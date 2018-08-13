import json
import pyEX as p
import tornado.concurrent
from .base import HTTPHandler, WebSocketHandler


class StockDataHandler(HTTPHandler):
    def initialize(self, cache, **kwargs):
        self._cache = cache
        super(StockDataHandler, self).initialize()

    @tornado.concurrent.run_on_executor
    def get_data(self, key, type):
        return json.dumps(self._cache.fetch(key, type))

    async def get(self, *args):
        try:
            key = self.get_argument('ticker', 'aapl')
            _type = self.get_argument('type', 'all')
            data = await self.get_data(key, _type)
            self.write(data)

        except KeyError:
            self.write(json.dumps({'key': 'error', 'data': ''}))


class StockDataHandlerWS(WebSocketHandler):
    def initialize(self, cache, **kwargs):
        self._cache = cache
        super(StockDataHandlerWS, self).initialize()

    def open(self):
        print('opened')

    def on_message(self, message):
        try:
            key = message.get('ticker', 'aapl')
            type = message.get('type', 'all')

            data = self._cache.fetch(key, type)
            self.write_message(json.dumps(data))

        except KeyError:
            self.write_message(json.dumps({'key': 'error', 'data': ''}))

    def on_close(self):
        pass


class MarketsDataHandler(HTTPHandler):
    def initialize(self, **kwargs):
        super(MarketsDataHandler, self).initialize()

    def get(self, *args):
        '''Get the login page'''
        self.write(json.dumps({'markets': p.marketsDF().to_dict(orient='records')}))
