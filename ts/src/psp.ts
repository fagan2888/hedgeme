import {
  Message
} from '@phosphor/messaging';

import {
  Widget
} from '@phosphor/widgets';


import '../ts/style/index.css';
import "@jpmorganchase/perspective-viewer";
import "@jpmorganchase/perspective-viewer-hypergrid";
import "@jpmorganchase/perspective-viewer-highcharts";

export
class PSPWidget extends Widget {

  static createNode(): HTMLElement {
    let node = document.createElement('div');
    let content = document.createElement('perspective-viewer');
    node.appendChild(content);
    return node;
  }

  constructor(name: string) {
    super({ node: PSPWidget.createNode() });
    this.addClass('pspwidget');
    this.title.label = name;
    this.title.closable = true;
    this.title.caption = `Long description for: ${name}`;
  }

  get pspNode(): HTMLInputElement {
    return this.node.getElementsByTagName('perspective-viewer')[0] as HTMLInputElement;
  }

  onAfterAttach(msg: Message) : void {
      // (<any>this.pspNode).update([   
      //               {'x': 1, 'y':'a', 'z': true},
      //               {'x': 2, 'y':'b', 'z': false},
      //               {'x': 3, 'y':'c', 'z': true},
      //               {'x': 4, 'y':'d', 'z': false}
      //       ]);
  }

  protected onActivateRequest(msg: Message): void {
    if (this.isAttached) {
      this.pspNode.focus();
    }
  }
}