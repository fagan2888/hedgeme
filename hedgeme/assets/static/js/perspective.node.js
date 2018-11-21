(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("tslib"), require("babel-runtime/core-js/symbol/iterator"), require("babel-runtime/core-js/get-iterator"), require("babel-runtime/core-js/json/stringify"), require("babel-runtime/helpers/classCallCheck"), require("babel-runtime/helpers/createClass"), require("babel-runtime/core-js/object/create"), require("babel-runtime/core-js/map"), require("flatbuffers"), require("babel-runtime/core-js/object/get-prototype-of"), require("babel-runtime/helpers/possibleConstructorReturn"), require("babel-runtime/helpers/inherits"), require("babel-runtime/regenerator"), require("babel-runtime/helpers/asyncToGenerator"), require("babel-runtime/core-js/promise"), require("babel-runtime/core-js/object/get-own-property-names"), require("babel-runtime/helpers/typeof"), require("babel-runtime/core-js/object/define-property"), require("babel-runtime/core-js/symbol/to-string-tag"), require("text-encoding-utf-8"), require("papaparse"), require("fs"), require("path"), require("babel-runtime/helpers/toConsumableArray"), require("babel-runtime/helpers/defineProperty"), require("babel-runtime/helpers/extends"), require("babel-runtime/core-js/number/parse-int"), require("babel-runtime/core-js/object/keys"), require("moment"), require("babel-runtime/core-js/object/entries"), require("babel-runtime/core-js/symbol"), require("babel-runtime/core-js/object/assign"), require("http"), require("ws"), require("process"));
	else if(typeof define === 'function' && define.amd)
		define(["tslib", "babel-runtime/core-js/symbol/iterator", "babel-runtime/core-js/get-iterator", "babel-runtime/core-js/json/stringify", "babel-runtime/helpers/classCallCheck", "babel-runtime/helpers/createClass", "babel-runtime/core-js/object/create", "babel-runtime/core-js/map", "flatbuffers", "babel-runtime/core-js/object/get-prototype-of", "babel-runtime/helpers/possibleConstructorReturn", "babel-runtime/helpers/inherits", "babel-runtime/regenerator", "babel-runtime/helpers/asyncToGenerator", "babel-runtime/core-js/promise", "babel-runtime/core-js/object/get-own-property-names", "babel-runtime/helpers/typeof", "babel-runtime/core-js/object/define-property", "babel-runtime/core-js/symbol/to-string-tag", "text-encoding-utf-8", "papaparse", "fs", "path", "babel-runtime/helpers/toConsumableArray", "babel-runtime/helpers/defineProperty", "babel-runtime/helpers/extends", "babel-runtime/core-js/number/parse-int", "babel-runtime/core-js/object/keys", "moment", "babel-runtime/core-js/object/entries", "babel-runtime/core-js/symbol", "babel-runtime/core-js/object/assign", "http", "ws", "process"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("tslib"), require("babel-runtime/core-js/symbol/iterator"), require("babel-runtime/core-js/get-iterator"), require("babel-runtime/core-js/json/stringify"), require("babel-runtime/helpers/classCallCheck"), require("babel-runtime/helpers/createClass"), require("babel-runtime/core-js/object/create"), require("babel-runtime/core-js/map"), require("flatbuffers"), require("babel-runtime/core-js/object/get-prototype-of"), require("babel-runtime/helpers/possibleConstructorReturn"), require("babel-runtime/helpers/inherits"), require("babel-runtime/regenerator"), require("babel-runtime/helpers/asyncToGenerator"), require("babel-runtime/core-js/promise"), require("babel-runtime/core-js/object/get-own-property-names"), require("babel-runtime/helpers/typeof"), require("babel-runtime/core-js/object/define-property"), require("babel-runtime/core-js/symbol/to-string-tag"), require("text-encoding-utf-8"), require("papaparse"), require("fs"), require("path"), require("babel-runtime/helpers/toConsumableArray"), require("babel-runtime/helpers/defineProperty"), require("babel-runtime/helpers/extends"), require("babel-runtime/core-js/number/parse-int"), require("babel-runtime/core-js/object/keys"), require("moment"), require("babel-runtime/core-js/object/entries"), require("babel-runtime/core-js/symbol"), require("babel-runtime/core-js/object/assign"), require("http"), require("ws"), require("process")) : factory(root["tslib"], root["babel-runtime/core-js/symbol/iterator"], root["babel-runtime/core-js/get-iterator"], root["babel-runtime/core-js/json/stringify"], root["babel-runtime/helpers/classCallCheck"], root["babel-runtime/helpers/createClass"], root["babel-runtime/core-js/object/create"], root["babel-runtime/core-js/map"], root["flatbuffers"], root["babel-runtime/core-js/object/get-prototype-of"], root["babel-runtime/helpers/possibleConstructorReturn"], root["babel-runtime/helpers/inherits"], root["babel-runtime/regenerator"], root["babel-runtime/helpers/asyncToGenerator"], root["babel-runtime/core-js/promise"], root["babel-runtime/core-js/object/get-own-property-names"], root["babel-runtime/helpers/typeof"], root["babel-runtime/core-js/object/define-property"], root["babel-runtime/core-js/symbol/to-string-tag"], root["text-encoding-utf-8"], root["papaparse"], root["fs"], root["path"], root["babel-runtime/helpers/toConsumableArray"], root["babel-runtime/helpers/defineProperty"], root["babel-runtime/helpers/extends"], root["babel-runtime/core-js/number/parse-int"], root["babel-runtime/core-js/object/keys"], root["moment"], root["babel-runtime/core-js/object/entries"], root["babel-runtime/core-js/symbol"], root["babel-runtime/core-js/object/assign"], root["http"], root["ws"], root["process"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_11__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_13__, __WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_15__, __WEBPACK_EXTERNAL_MODULE_18__, __WEBPACK_EXTERNAL_MODULE_19__, __WEBPACK_EXTERNAL_MODULE_20__, __WEBPACK_EXTERNAL_MODULE_21__, __WEBPACK_EXTERNAL_MODULE_22__, __WEBPACK_EXTERNAL_MODULE_23__, __WEBPACK_EXTERNAL_MODULE_24__, __WEBPACK_EXTERNAL_MODULE_25__, __WEBPACK_EXTERNAL_MODULE_26__, __WEBPACK_EXTERNAL_MODULE_27__, __WEBPACK_EXTERNAL_MODULE_30__, __WEBPACK_EXTERNAL_MODULE_31__, __WEBPACK_EXTERNAL_MODULE_32__, __WEBPACK_EXTERNAL_MODULE_33__, __WEBPACK_EXTERNAL_MODULE_35__, __WEBPACK_EXTERNAL_MODULE_40__, __WEBPACK_EXTERNAL_MODULE_41__, __WEBPACK_EXTERNAL_MODULE_42__, __WEBPACK_EXTERNAL_MODULE_43__, __WEBPACK_EXTERNAL_MODULE_46__, __WEBPACK_EXTERNAL_MODULE_56__, __WEBPACK_EXTERNAL_MODULE_61__, __WEBPACK_EXTERNAL_MODULE_63__, __WEBPACK_EXTERNAL_MODULE_64__, __WEBPACK_EXTERNAL_MODULE_65__, __WEBPACK_EXTERNAL_MODULE_66__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 34);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Dictionary = exports.Map_ = exports.FixedSizeList = exports.FixedSizeBinary = exports.SparseUnion = exports.DenseUnion = exports.Union = exports.Struct = exports.List = exports.Interval = exports.Timestamp = exports.Time = exports.Date_ = exports.Decimal = exports.Bool = exports.Utf8 = exports.Binary = exports.Float64 = exports.Float32 = exports.Float16 = exports.Float = exports.Uint64 = exports.Uint32 = exports.Uint16 = exports.Uint8 = exports.Int64 = exports.Int32 = exports.Int16 = exports.Int8 = exports.Int = exports.Null = exports.DataType = exports.Type = exports.Field = exports.Schema = exports.MetadataVersion = exports.MessageHeader = exports.IntervalUnit = exports.VectorType = exports.UnionMode = exports.Precision = exports.TimeUnit = exports.DateUnit = exports.ArrowType = exports.Long = undefined;

var _defineProperty = __webpack_require__(26);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _toStringTag = __webpack_require__(27);

var _toStringTag2 = _interopRequireDefault(_toStringTag);

var _create = __webpack_require__(13);

var _create2 = _interopRequireDefault(_create);

var _map = __webpack_require__(14);

var _map2 = _interopRequireDefault(_map);

var _tslib = __webpack_require__(0);

var tslib_1 = _interopRequireWildcard(_tslib);

var _Schema = __webpack_require__(5);

var Schema_ = _interopRequireWildcard(_Schema);

var _Message = __webpack_require__(28);

var Message_ = _interopRequireWildcard(_Message);

var _flatbuffers = __webpack_require__(15);

var _metadata = __webpack_require__(7);

var _visitor = __webpack_require__(8);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.
var Long = exports.Long = _flatbuffers.flatbuffers.Long;
var ArrowType = exports.ArrowType = Schema_.org.apache.arrow.flatbuf.Type;
var DateUnit = exports.DateUnit = Schema_.org.apache.arrow.flatbuf.DateUnit;
var TimeUnit = exports.TimeUnit = Schema_.org.apache.arrow.flatbuf.TimeUnit;
var Precision = exports.Precision = Schema_.org.apache.arrow.flatbuf.Precision;
var UnionMode = exports.UnionMode = Schema_.org.apache.arrow.flatbuf.UnionMode;
var VectorType = exports.VectorType = Schema_.org.apache.arrow.flatbuf.VectorType;
var IntervalUnit = exports.IntervalUnit = Schema_.org.apache.arrow.flatbuf.IntervalUnit;
var MessageHeader = exports.MessageHeader = Message_.org.apache.arrow.flatbuf.MessageHeader;
var MetadataVersion = exports.MetadataVersion = Schema_.org.apache.arrow.flatbuf.MetadataVersion;
var Schema = /** @class */function () {
    function Schema(fields, metadata, version, dictionaries) {
        if (version === void 0) {
            version = MetadataVersion.V4;
        }
        if (dictionaries === void 0) {
            dictionaries = new _map2.default();
        }
        this.fields = fields;
        this.version = version;
        this.metadata = metadata;
        this.dictionaries = dictionaries;
    }
    Schema.from = function (vectors) {
        return new Schema(vectors.map(function (v, i) {
            return new Field('' + i, v.type);
        }));
    };
    Object.defineProperty(Schema.prototype, "bodyLength", {
        get: function get() {
            return this._bodyLength;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Schema.prototype, "headerType", {
        get: function get() {
            return this._headerType;
        },
        enumerable: true,
        configurable: true
    });
    Schema.prototype.select = function () {
        var fieldNames = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            fieldNames[_i] = arguments[_i];
        }
        var namesToKeep = fieldNames.reduce(function (xs, x) {
            return (xs[x] = true) && xs;
        }, (0, _create2.default)(null));
        var newDictFields = new _map2.default(),
            newFields = this.fields.filter(function (f) {
            return namesToKeep[f.name];
        });
        this.dictionaries.forEach(function (f, dictId) {
            return namesToKeep[f.name] && newDictFields.set(dictId, f);
        });
        return new Schema(newFields, this.metadata, this.version, newDictFields);
    };
    Schema[_toStringTag2.default] = function (prototype) {
        prototype._bodyLength = 0;
        prototype._headerType = MessageHeader.Schema;
        return 'Schema';
    }(Schema.prototype);
    return Schema;
}();
exports.Schema = Schema;

var Field = /** @class */function () {
    function Field(name, type, nullable, metadata) {
        if (nullable === void 0) {
            nullable = false;
        }
        this.name = name;
        this.type = type;
        this.nullable = nullable;
        this.metadata = metadata;
    }
    Field.prototype.toString = function () {
        return this.name + ": " + this.type;
    };
    Object.defineProperty(Field.prototype, "typeId", {
        get: function get() {
            return this.type.TType;
        },
        enumerable: true,
        configurable: true
    });
    (0, _defineProperty2.default)(Field.prototype, _toStringTag2.default, {
        get: function get() {
            return 'Field';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "indices", {
        get: function get() {
            return DataType.isDictionary(this.type) ? this.type.indices : this.type;
        },
        enumerable: true,
        configurable: true
    });
    return Field;
}();
exports.Field = Field;
/**
 * *
 * Main data type enumeration:
 * *
 * Data types in this library are all *logical*. They can be expressed as
 * either a primitive physical type (bytes or bits of some fixed size), a
 * nested type consisting of other data types, or another data type (e.g. a
 * timestamp encoded as an int64)
 */

var Type = exports.Type = undefined;
(function (Type) {
    Type[Type["NONE"] = 0] = "NONE";
    Type[Type["Null"] = 1] = "Null";
    Type[Type["Int"] = 2] = "Int";
    Type[Type["Float"] = 3] = "Float";
    Type[Type["Binary"] = 4] = "Binary";
    Type[Type["Utf8"] = 5] = "Utf8";
    Type[Type["Bool"] = 6] = "Bool";
    Type[Type["Decimal"] = 7] = "Decimal";
    Type[Type["Date"] = 8] = "Date";
    Type[Type["Time"] = 9] = "Time";
    Type[Type["Timestamp"] = 10] = "Timestamp";
    Type[Type["Interval"] = 11] = "Interval";
    Type[Type["List"] = 12] = "List";
    Type[Type["Struct"] = 13] = "Struct";
    Type[Type["Union"] = 14] = "Union";
    Type[Type["FixedSizeBinary"] = 15] = "FixedSizeBinary";
    Type[Type["FixedSizeList"] = 16] = "FixedSizeList";
    Type[Type["Map"] = 17] = "Map";
    Type["Dictionary"] = "Dictionary";
    Type["DenseUnion"] = "DenseUnion";
    Type["SparseUnion"] = "SparseUnion";
})(Type || (exports.Type = Type = {}));
var DataType = /** @class */function () {
    function DataType(TType, children) {
        this.TType = TType;
        this.children = children;
    }
    DataType.isNull = function (x) {
        return x && x.TType === Type.Null;
    };
    DataType.isInt = function (x) {
        return x && x.TType === Type.Int;
    };
    DataType.isFloat = function (x) {
        return x && x.TType === Type.Float;
    };
    DataType.isBinary = function (x) {
        return x && x.TType === Type.Binary;
    };
    DataType.isUtf8 = function (x) {
        return x && x.TType === Type.Utf8;
    };
    DataType.isBool = function (x) {
        return x && x.TType === Type.Bool;
    };
    DataType.isDecimal = function (x) {
        return x && x.TType === Type.Decimal;
    };
    DataType.isDate = function (x) {
        return x && x.TType === Type.Date;
    };
    DataType.isTime = function (x) {
        return x && x.TType === Type.Time;
    };
    DataType.isTimestamp = function (x) {
        return x && x.TType === Type.Timestamp;
    };
    DataType.isInterval = function (x) {
        return x && x.TType === Type.Interval;
    };
    DataType.isList = function (x) {
        return x && x.TType === Type.List;
    };
    DataType.isStruct = function (x) {
        return x && x.TType === Type.Struct;
    };
    DataType.isUnion = function (x) {
        return x && x.TType === Type.Union;
    };
    DataType.isDenseUnion = function (x) {
        return x && x.TType === Type.DenseUnion;
    };
    DataType.isSparseUnion = function (x) {
        return x && x.TType === Type.SparseUnion;
    };
    DataType.isFixedSizeBinary = function (x) {
        return x && x.TType === Type.FixedSizeBinary;
    };
    DataType.isFixedSizeList = function (x) {
        return x && x.TType === Type.FixedSizeList;
    };
    DataType.isMap = function (x) {
        return x && x.TType === Type.Map;
    };
    DataType.isDictionary = function (x) {
        return x && x.TType === Type.Dictionary;
    };
    DataType.prototype.acceptTypeVisitor = function (visitor) {
        return _visitor.TypeVisitor.visitTypeInline(visitor, this);
    };
    DataType[_toStringTag2.default] = function (proto) {
        proto.ArrayType = Array;
        return proto[_toStringTag2.default] = 'DataType';
    }(DataType.prototype);
    return DataType;
}();
exports.DataType = DataType;

var Null = /** @class */function (_super) {
    tslib_1.__extends(Null, _super);
    function Null() {
        return _super.call(this, Type.Null) || this;
    }
    Null.prototype.toString = function () {
        return "Null";
    };
    Null[_toStringTag2.default] = function (proto) {
        return proto[_toStringTag2.default] = 'Null';
    }(Null.prototype);
    return Null;
}(DataType);
exports.Null = Null;

var Int = /** @class */function (_super) {
    tslib_1.__extends(Int, _super);
    function Int(isSigned, bitWidth) {
        var _this = _super.call(this, Type.Int) || this;
        _this.isSigned = isSigned;
        _this.bitWidth = bitWidth;
        return _this;
    }
    Object.defineProperty(Int.prototype, "ArrayType", {
        get: function get() {
            switch (this.bitWidth) {
                case 8:
                    return this.isSigned ? Int8Array : Uint8Array;
                case 16:
                    return this.isSigned ? Int16Array : Uint16Array;
                case 32:
                    return this.isSigned ? Int32Array : Uint32Array;
                case 64:
                    return this.isSigned ? Int32Array : Uint32Array;
            }
            throw new Error("Unrecognized " + this[_toStringTag2.default] + " type");
        },
        enumerable: true,
        configurable: true
    });
    Int.prototype.toString = function () {
        return (this.isSigned ? "I" : "Ui") + "nt" + this.bitWidth;
    };
    Int[_toStringTag2.default] = function (proto) {
        return proto[_toStringTag2.default] = 'Int';
    }(Int.prototype);
    return Int;
}(DataType);
exports.Int = Int;

var Int8 = /** @class */function (_super) {
    tslib_1.__extends(Int8, _super);
    function Int8() {
        return _super.call(this, true, 8) || this;
    }
    return Int8;
}(Int);
exports.Int8 = Int8;

var Int16 = /** @class */function (_super) {
    tslib_1.__extends(Int16, _super);
    function Int16() {
        return _super.call(this, true, 16) || this;
    }
    return Int16;
}(Int);
exports.Int16 = Int16;

var Int32 = /** @class */function (_super) {
    tslib_1.__extends(Int32, _super);
    function Int32() {
        return _super.call(this, true, 32) || this;
    }
    return Int32;
}(Int);
exports.Int32 = Int32;

var Int64 = /** @class */function (_super) {
    tslib_1.__extends(Int64, _super);
    function Int64() {
        return _super.call(this, true, 64) || this;
    }
    return Int64;
}(Int);
exports.Int64 = Int64;

var Uint8 = /** @class */function (_super) {
    tslib_1.__extends(Uint8, _super);
    function Uint8() {
        return _super.call(this, false, 8) || this;
    }
    return Uint8;
}(Int);
exports.Uint8 = Uint8;

var Uint16 = /** @class */function (_super) {
    tslib_1.__extends(Uint16, _super);
    function Uint16() {
        return _super.call(this, false, 16) || this;
    }
    return Uint16;
}(Int);
exports.Uint16 = Uint16;

var Uint32 = /** @class */function (_super) {
    tslib_1.__extends(Uint32, _super);
    function Uint32() {
        return _super.call(this, false, 32) || this;
    }
    return Uint32;
}(Int);
exports.Uint32 = Uint32;

var Uint64 = /** @class */function (_super) {
    tslib_1.__extends(Uint64, _super);
    function Uint64() {
        return _super.call(this, false, 64) || this;
    }
    return Uint64;
}(Int);
exports.Uint64 = Uint64;

var Float = /** @class */function (_super) {
    tslib_1.__extends(Float, _super);
    function Float(precision) {
        var _this = _super.call(this, Type.Float) || this;
        _this.precision = precision;
        return _this;
    }
    Object.defineProperty(Float.prototype, "ArrayType", {
        // @ts-ignore
        get: function get() {
            switch (this.precision) {
                case Precision.HALF:
                    return Uint16Array;
                case Precision.SINGLE:
                    return Float32Array;
                case Precision.DOUBLE:
                    return Float64Array;
            }
            throw new Error("Unrecognized " + this[_toStringTag2.default] + " type");
        },
        enumerable: true,
        configurable: true
    });
    Float.prototype.toString = function () {
        return "Float" + (this.precision << 5 || 16);
    };
    Float[_toStringTag2.default] = function (proto) {
        return proto[_toStringTag2.default] = 'Float';
    }(Float.prototype);
    return Float;
}(DataType);
exports.Float = Float;

var Float16 = /** @class */function (_super) {
    tslib_1.__extends(Float16, _super);
    function Float16() {
        return _super.call(this, Precision.HALF) || this;
    }
    return Float16;
}(Float);
exports.Float16 = Float16;

var Float32 = /** @class */function (_super) {
    tslib_1.__extends(Float32, _super);
    function Float32() {
        return _super.call(this, Precision.SINGLE) || this;
    }
    return Float32;
}(Float);
exports.Float32 = Float32;

var Float64 = /** @class */function (_super) {
    tslib_1.__extends(Float64, _super);
    function Float64() {
        return _super.call(this, Precision.DOUBLE) || this;
    }
    return Float64;
}(Float);
exports.Float64 = Float64;

var Binary = /** @class */function (_super) {
    tslib_1.__extends(Binary, _super);
    function Binary() {
        return _super.call(this, Type.Binary) || this;
    }
    Binary.prototype.toString = function () {
        return "Binary";
    };
    Binary[_toStringTag2.default] = function (proto) {
        proto.ArrayType = Uint8Array;
        return proto[_toStringTag2.default] = 'Binary';
    }(Binary.prototype);
    return Binary;
}(DataType);
exports.Binary = Binary;

var Utf8 = /** @class */function (_super) {
    tslib_1.__extends(Utf8, _super);
    function Utf8() {
        return _super.call(this, Type.Utf8) || this;
    }
    Utf8.prototype.toString = function () {
        return "Utf8";
    };
    Utf8[_toStringTag2.default] = function (proto) {
        proto.ArrayType = Uint8Array;
        return proto[_toStringTag2.default] = 'Utf8';
    }(Utf8.prototype);
    return Utf8;
}(DataType);
exports.Utf8 = Utf8;

var Bool = /** @class */function (_super) {
    tslib_1.__extends(Bool, _super);
    function Bool() {
        return _super.call(this, Type.Bool) || this;
    }
    Bool.prototype.toString = function () {
        return "Bool";
    };
    Bool[_toStringTag2.default] = function (proto) {
        proto.ArrayType = Uint8Array;
        return proto[_toStringTag2.default] = 'Bool';
    }(Bool.prototype);
    return Bool;
}(DataType);
exports.Bool = Bool;

var Decimal = /** @class */function (_super) {
    tslib_1.__extends(Decimal, _super);
    function Decimal(scale, precision) {
        var _this = _super.call(this, Type.Decimal) || this;
        _this.scale = scale;
        _this.precision = precision;
        return _this;
    }
    Decimal.prototype.toString = function () {
        return "Decimal[" + this.precision + "e" + (this.scale > 0 ? "+" : "") + this.scale + "]";
    };
    Decimal[_toStringTag2.default] = function (proto) {
        proto.ArrayType = Uint32Array;
        return proto[_toStringTag2.default] = 'Decimal';
    }(Decimal.prototype);
    return Decimal;
}(DataType);
exports.Decimal = Decimal;

var Date_ = /** @class */function (_super) {
    tslib_1.__extends(Date_, _super);
    function Date_(unit) {
        var _this = _super.call(this, Type.Date) || this;
        _this.unit = unit;
        return _this;
    }
    Date_.prototype.toString = function () {
        return "Date" + (this.unit + 1) * 32 + "<" + DateUnit[this.unit] + ">";
    };
    Date_[_toStringTag2.default] = function (proto) {
        proto.ArrayType = Int32Array;
        return proto[_toStringTag2.default] = 'Date';
    }(Date_.prototype);
    return Date_;
}(DataType);
exports.Date_ = Date_;

var Time = /** @class */function (_super) {
    tslib_1.__extends(Time, _super);
    function Time(unit, bitWidth) {
        var _this = _super.call(this, Type.Time) || this;
        _this.unit = unit;
        _this.bitWidth = bitWidth;
        return _this;
    }
    Time.prototype.toString = function () {
        return "Time" + this.bitWidth + "<" + TimeUnit[this.unit] + ">";
    };
    Time[_toStringTag2.default] = function (proto) {
        proto.ArrayType = Uint32Array;
        return proto[_toStringTag2.default] = 'Time';
    }(Time.prototype);
    return Time;
}(DataType);
exports.Time = Time;

var Timestamp = /** @class */function (_super) {
    tslib_1.__extends(Timestamp, _super);
    function Timestamp(unit, timezone) {
        var _this = _super.call(this, Type.Timestamp) || this;
        _this.unit = unit;
        _this.timezone = timezone;
        return _this;
    }
    Timestamp.prototype.toString = function () {
        return "Timestamp<" + TimeUnit[this.unit] + (this.timezone ? ", " + this.timezone : "") + ">";
    };
    Timestamp[_toStringTag2.default] = function (proto) {
        proto.ArrayType = Int32Array;
        return proto[_toStringTag2.default] = 'Timestamp';
    }(Timestamp.prototype);
    return Timestamp;
}(DataType);
exports.Timestamp = Timestamp;

var Interval = /** @class */function (_super) {
    tslib_1.__extends(Interval, _super);
    function Interval(unit) {
        var _this = _super.call(this, Type.Interval) || this;
        _this.unit = unit;
        return _this;
    }
    Interval.prototype.toString = function () {
        return "Interval<" + IntervalUnit[this.unit] + ">";
    };
    Interval[_toStringTag2.default] = function (proto) {
        proto.ArrayType = Int32Array;
        return proto[_toStringTag2.default] = 'Interval';
    }(Interval.prototype);
    return Interval;
}(DataType);
exports.Interval = Interval;

var List = /** @class */function (_super) {
    tslib_1.__extends(List, _super);
    function List(children) {
        var _this = _super.call(this, Type.List, children) || this;
        _this.children = children;
        return _this;
    }
    List.prototype.toString = function () {
        return "List<" + this.valueType + ">";
    };
    Object.defineProperty(List.prototype, "ArrayType", {
        get: function get() {
            return this.valueType.ArrayType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(List.prototype, "valueType", {
        get: function get() {
            return this.children[0].type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(List.prototype, "valueField", {
        get: function get() {
            return this.children[0];
        },
        enumerable: true,
        configurable: true
    });
    List[_toStringTag2.default] = function (proto) {
        return proto[_toStringTag2.default] = 'List';
    }(List.prototype);
    return List;
}(DataType);
exports.List = List;

var Struct = /** @class */function (_super) {
    tslib_1.__extends(Struct, _super);
    function Struct(children) {
        var _this = _super.call(this, Type.Struct, children) || this;
        _this.children = children;
        return _this;
    }
    Struct.prototype.toString = function () {
        return "Struct<" + this.children.map(function (f) {
            return f.type;
        }).join(", ") + ">";
    };
    Struct[_toStringTag2.default] = function (proto) {
        return proto[_toStringTag2.default] = 'Struct';
    }(Struct.prototype);
    return Struct;
}(DataType);
exports.Struct = Struct;

var Union = /** @class */function (_super) {
    tslib_1.__extends(Union, _super);
    function Union(mode, typeIds, children) {
        var _this = _super.call(this, mode === UnionMode.Sparse ? Type.SparseUnion : Type.DenseUnion, children) || this;
        _this.mode = mode;
        _this.typeIds = typeIds;
        _this.children = children;
        return _this;
    }
    Union.prototype.toString = function () {
        return this[_toStringTag2.default] + "<" + this.typeIds.map(function (x) {
            return Type[x];
        }).join(" | ") + ">";
    };
    Union[_toStringTag2.default] = function (proto) {
        proto.ArrayType = Int8Array;
        return proto[_toStringTag2.default] = 'Union';
    }(Union.prototype);
    return Union;
}(DataType);
exports.Union = Union;

var DenseUnion = /** @class */function (_super) {
    tslib_1.__extends(DenseUnion, _super);
    function DenseUnion(typeIds, children) {
        return _super.call(this, UnionMode.Dense, typeIds, children) || this;
    }
    DenseUnion[_toStringTag2.default] = function (proto) {
        return proto[_toStringTag2.default] = 'DenseUnion';
    }(DenseUnion.prototype);
    return DenseUnion;
}(Union);
exports.DenseUnion = DenseUnion;

var SparseUnion = /** @class */function (_super) {
    tslib_1.__extends(SparseUnion, _super);
    function SparseUnion(typeIds, children) {
        return _super.call(this, UnionMode.Sparse, typeIds, children) || this;
    }
    SparseUnion[_toStringTag2.default] = function (proto) {
        return proto[_toStringTag2.default] = 'SparseUnion';
    }(SparseUnion.prototype);
    return SparseUnion;
}(Union);
exports.SparseUnion = SparseUnion;

var FixedSizeBinary = /** @class */function (_super) {
    tslib_1.__extends(FixedSizeBinary, _super);
    function FixedSizeBinary(byteWidth) {
        var _this = _super.call(this, Type.FixedSizeBinary) || this;
        _this.byteWidth = byteWidth;
        return _this;
    }
    FixedSizeBinary.prototype.toString = function () {
        return "FixedSizeBinary[" + this.byteWidth + "]";
    };
    FixedSizeBinary[_toStringTag2.default] = function (proto) {
        proto.ArrayType = Uint8Array;
        return proto[_toStringTag2.default] = 'FixedSizeBinary';
    }(FixedSizeBinary.prototype);
    return FixedSizeBinary;
}(DataType);
exports.FixedSizeBinary = FixedSizeBinary;

var FixedSizeList = /** @class */function (_super) {
    tslib_1.__extends(FixedSizeList, _super);
    function FixedSizeList(listSize, children) {
        var _this = _super.call(this, Type.FixedSizeList, children) || this;
        _this.listSize = listSize;
        _this.children = children;
        return _this;
    }
    Object.defineProperty(FixedSizeList.prototype, "ArrayType", {
        get: function get() {
            return this.valueType.ArrayType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FixedSizeList.prototype, "valueType", {
        get: function get() {
            return this.children[0].type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FixedSizeList.prototype, "valueField", {
        get: function get() {
            return this.children[0];
        },
        enumerable: true,
        configurable: true
    });
    FixedSizeList.prototype.toString = function () {
        return "FixedSizeList[" + this.listSize + "]<" + this.valueType + ">";
    };
    FixedSizeList[_toStringTag2.default] = function (proto) {
        return proto[_toStringTag2.default] = 'FixedSizeList';
    }(FixedSizeList.prototype);
    return FixedSizeList;
}(DataType);
exports.FixedSizeList = FixedSizeList;

var Map_ = /** @class */function (_super) {
    tslib_1.__extends(Map_, _super);
    function Map_(keysSorted, children) {
        var _this = _super.call(this, Type.Map, children) || this;
        _this.keysSorted = keysSorted;
        _this.children = children;
        return _this;
    }
    Map_.prototype.toString = function () {
        return "Map<" + this.children.join(", ") + ">";
    };
    Map_[_toStringTag2.default] = function (proto) {
        return proto[_toStringTag2.default] = 'Map_';
    }(Map_.prototype);
    return Map_;
}(DataType);
exports.Map_ = Map_;

var Dictionary = /** @class */function (_super) {
    tslib_1.__extends(Dictionary, _super);
    function Dictionary(dictionary, indices, id, isOrdered) {
        var _this = _super.call(this, Type.Dictionary) || this;
        _this.indices = indices;
        _this.dictionary = dictionary;
        _this.isOrdered = isOrdered || false;
        _this.id = id == null ? _metadata.DictionaryBatch.getId() : typeof id === 'number' ? id : id.low;
        return _this;
    }
    Object.defineProperty(Dictionary.prototype, "ArrayType", {
        get: function get() {
            return this.dictionary.ArrayType;
        },
        enumerable: true,
        configurable: true
    });
    Dictionary.prototype.toString = function () {
        return "Dictionary<" + this.indices + ", " + this.dictionary + ">";
    };
    Dictionary[_toStringTag2.default] = function (proto) {
        return proto[_toStringTag2.default] = 'Dictionary';
    }(Dictionary.prototype);
    return Dictionary;
}(DataType);
exports.Dictionary = Dictionary;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createVector = exports.DictionaryVector = exports.UnionVector = exports.StructVector = exports.MapVector = exports.FixedSizeListVector = exports.ListVector = exports.Utf8Vector = exports.FixedSizeBinaryVector = exports.BinaryVector = exports.IntervalVector = exports.TimestampVector = exports.TimeVector = exports.DecimalVector = exports.DateVector = exports.FloatVector = exports.IntVector = exports.BoolVector = exports.NullVector = exports.NestedVector = exports.ListVectorBase = exports.FlatVector = exports.Vector = undefined;

var _getIterator2 = __webpack_require__(3);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _iterator = __webpack_require__(2);

var _iterator2 = _interopRequireDefault(_iterator);

var _toStringTag = __webpack_require__(27);

var _toStringTag2 = _interopRequireDefault(_toStringTag);

var _defineProperty = __webpack_require__(26);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _tslib = __webpack_require__(0);

var tslib_1 = _interopRequireWildcard(_tslib);

var _data = __webpack_require__(9);

var _visitor = __webpack_require__(8);

var _type2 = __webpack_require__(1);

var _chunked = __webpack_require__(29);

var _dictionary = __webpack_require__(49);

var _list = __webpack_require__(50);

var _nested = __webpack_require__(51);

var _flat = __webpack_require__(52);

var _bit = __webpack_require__(6);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Vector = /** @class */function () {
    function Vector(data, view) {
        this.data = data;
        this.type = data.type;
        this.length = data.length;
        var nulls;
        if (data instanceof _data.ChunkedData && !(view instanceof _chunked.ChunkedView)) {
            this.view = new _chunked.ChunkedView(data);
        } else if (!(view instanceof _flat.ValidityView) && (nulls = data.nullBitmap) && nulls.length > 0 && data.nullCount > 0) {
            this.view = new _flat.ValidityView(data, view);
        } else {
            this.view = view;
        }
    }
    Vector.create = function (data) {
        return createVector(data);
    };
    Vector.concat = function (source) {
        var others = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            others[_i - 1] = arguments[_i];
        }
        return others.reduce(function (a, b) {
            return a ? a.concat(b) : b;
        }, source);
    };
    Object.defineProperty(Vector.prototype, "nullCount", {
        get: function get() {
            return this.data.nullCount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vector.prototype, "nullBitmap", {
        get: function get() {
            return this.data.nullBitmap;
        },
        enumerable: true,
        configurable: true
    });
    (0, _defineProperty2.default)(Vector.prototype, _toStringTag2.default, {
        get: function get() {
            return "Vector<" + this.type[_toStringTag2.default] + ">";
        },
        enumerable: true,
        configurable: true
    });
    Vector.prototype.toJSON = function () {
        return this.toArray();
    };
    Vector.prototype.clone = function (data, view) {
        if (view === void 0) {
            view = this.view.clone(data);
        }
        return new this.constructor(data, view);
    };
    Vector.prototype.isValid = function (index) {
        return this.view.isValid(index);
    };
    Vector.prototype.get = function (index) {
        return this.view.get(index);
    };
    Vector.prototype.set = function (index, value) {
        return this.view.set(index, value);
    };
    Vector.prototype.toArray = function () {
        return this.view.toArray();
    };
    Vector.prototype.indexOf = function (value) {
        return this.view.indexOf(value);
    };
    Vector.prototype[_iterator2.default] = function () {
        return (0, _getIterator3.default)(this.view);
    };
    Vector.prototype.concat = function () {
        var others = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            others[_i] = arguments[_i];
        }
        if ((others = others.filter(Boolean)).length === 0) {
            return this;
        }
        var view = this.view;
        var vecs = !(view instanceof _chunked.ChunkedView) ? tslib_1.__spread([this], others) : tslib_1.__spread(view.chunkVectors, others);
        var offsets = _data.ChunkedData.computeOffsets(vecs);
        var chunksLength = offsets[offsets.length - 1];
        var chunkedData = new _data.ChunkedData(this.type, chunksLength, vecs, 0, -1, offsets);
        return this.clone(chunkedData, new _chunked.ChunkedView(chunkedData));
    };
    Vector.prototype.slice = function (begin, end) {
        var length = this.length;
        var size = this.view.size || 1;
        var total = length,
            from = (begin || 0) * size;
        var to = (typeof end === 'number' ? end : total) * size;
        if (to < 0) {
            to = total - to * -1 % total;
        }
        if (from < 0) {
            from = total - from * -1 % total;
        }
        if (to < from) {
            _a = tslib_1.__read([to, from], 2), from = _a[0], to = _a[1];
        }
        total = !isFinite(total = to - from) || total < 0 ? 0 : total;
        var slicedData = this.data.slice(from, Math.min(total, length));
        return this.clone(slicedData, this.view.clone(slicedData));
        var _a;
    };
    Vector.prototype.acceptTypeVisitor = function (visitor) {
        return _visitor.TypeVisitor.visitTypeInline(visitor, this.type);
    };
    Vector.prototype.acceptVectorVisitor = function (visitor) {
        return _visitor.VectorVisitor.visitTypeInline(visitor, this.type, this);
    };
    return Vector;
}(); // Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.
exports.Vector = Vector;

var FlatVector = /** @class */function (_super) {
    tslib_1.__extends(FlatVector, _super);
    function FlatVector() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(FlatVector.prototype, "values", {
        get: function get() {
            return this.data.values;
        },
        enumerable: true,
        configurable: true
    });
    FlatVector.prototype.lows = function () {
        return this.asInt32(0, 2);
    };
    FlatVector.prototype.highs = function () {
        return this.asInt32(1, 2);
    };
    FlatVector.prototype.asInt32 = function (offset, stride) {
        if (offset === void 0) {
            offset = 0;
        }
        if (stride === void 0) {
            stride = 2;
        }
        var data = this.data.clone(new _type2.Int32());
        if (offset > 0) {
            data = data.slice(offset, this.length - offset);
        }
        var int32s = new IntVector(data, new _flat.PrimitiveView(data, stride));
        int32s.length = this.length / stride | 0;
        return int32s;
    };
    return FlatVector;
}(Vector);
exports.FlatVector = FlatVector;

var ListVectorBase = /** @class */function (_super) {
    tslib_1.__extends(ListVectorBase, _super);
    function ListVectorBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ListVectorBase.prototype, "values", {
        get: function get() {
            return this.data.values;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListVectorBase.prototype, "valueOffsets", {
        get: function get() {
            return this.data.valueOffsets;
        },
        enumerable: true,
        configurable: true
    });
    ListVectorBase.prototype.getValueOffset = function (index) {
        return this.valueOffsets[index];
    };
    ListVectorBase.prototype.getValueLength = function (index) {
        return this.valueOffsets[index + 1] - this.valueOffsets[index];
    };
    return ListVectorBase;
}(Vector);
exports.ListVectorBase = ListVectorBase;

var NestedVector = /** @class */function (_super) {
    tslib_1.__extends(NestedVector, _super);
    function NestedVector() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NestedVector.prototype.getChildAt = function (index) {
        return this.view.getChildAt(index);
    };
    Object.defineProperty(NestedVector.prototype, "childData", {
        get: function get() {
            var data;
            if (data = this._childData) {
                // Return the cached childData reference first
                return data;
            } else if (!((data = this.data) instanceof _data.ChunkedData)) {
                // If data isn't chunked, cache and return NestedData's childData
                return this._childData = data.childData;
            }
            // Otherwise if the data is chunked, concatenate the childVectors from each chunk
            // to construct a single chunked Vector for each column. Then return the ChunkedData
            // instance from each unified chunked column as the childData of a chunked NestedVector
            var chunks = data.chunkVectors;
            return this._childData = chunks.reduce(function (cols, chunk) {
                return chunk.childData.reduce(function (cols, _, i) {
                    return (cols[i] || (cols[i] = [])).push(chunk.getChildAt(i)) && cols || cols;
                }, cols);
            }, []).map(function (vecs) {
                return Vector.concat.apply(Vector, tslib_1.__spread(vecs)).data;
            });
        },
        enumerable: true,
        configurable: true
    });
    return NestedVector;
}(Vector);
exports.NestedVector = NestedVector;

var NullVector = /** @class */function (_super) {
    tslib_1.__extends(NullVector, _super);
    function NullVector(data, view) {
        if (view === void 0) {
            view = new _flat.NullView(data);
        }
        return _super.call(this, data, view) || this;
    }
    return NullVector;
}(Vector);
exports.NullVector = NullVector;

var BoolVector = /** @class */function (_super) {
    tslib_1.__extends(BoolVector, _super);
    function BoolVector(data, view) {
        if (view === void 0) {
            view = new _flat.BoolView(data);
        }
        return _super.call(this, data, view) || this;
    }
    BoolVector.from = function (data) {
        return new BoolVector(new _data.BoolData(new _type2.Bool(), data.length, null, (0, _bit.packBools)(data)));
    };
    Object.defineProperty(BoolVector.prototype, "values", {
        get: function get() {
            return this.data.values;
        },
        enumerable: true,
        configurable: true
    });
    return BoolVector;
}(Vector);
exports.BoolVector = BoolVector;

var IntVector = /** @class */function (_super) {
    tslib_1.__extends(IntVector, _super);
    function IntVector(data, view) {
        if (view === void 0) {
            view = IntVector.defaultView(data);
        }
        return _super.call(this, data, view) || this;
    }
    IntVector.from = function (data, is64) {
        if (is64 === true) {
            return data instanceof Int32Array ? new IntVector(new _data.FlatData(new _type2.Int64(), data.length, null, data)) : new IntVector(new _data.FlatData(new _type2.Uint64(), data.length, null, data));
        }
        switch (data.constructor) {
            case Int8Array:
                return new IntVector(new _data.FlatData(new _type2.Int8(), data.length, null, data));
            case Int16Array:
                return new IntVector(new _data.FlatData(new _type2.Int16(), data.length, null, data));
            case Int32Array:
                return new IntVector(new _data.FlatData(new _type2.Int32(), data.length, null, data));
            case Uint8Array:
                return new IntVector(new _data.FlatData(new _type2.Uint8(), data.length, null, data));
            case Uint16Array:
                return new IntVector(new _data.FlatData(new _type2.Uint16(), data.length, null, data));
            case Uint32Array:
                return new IntVector(new _data.FlatData(new _type2.Uint32(), data.length, null, data));
        }
        throw new TypeError('Unrecognized Int data');
    };
    IntVector.defaultView = function (data) {
        return data.type.bitWidth <= 32 ? new _flat.FlatView(data) : new _flat.FixedSizeView(data, data.type.bitWidth / 32 | 0);
    };
    return IntVector;
}(FlatVector);
exports.IntVector = IntVector;

var FloatVector = /** @class */function (_super) {
    tslib_1.__extends(FloatVector, _super);
    function FloatVector(data, view) {
        if (view === void 0) {
            view = FloatVector.defaultView(data);
        }
        return _super.call(this, data, view) || this;
    }
    FloatVector.from = function (data) {
        switch (data.constructor) {
            case Uint16Array:
                return new FloatVector(new _data.FlatData(new _type2.Float16(), data.length, null, data));
            case Float32Array:
                return new FloatVector(new _data.FlatData(new _type2.Float32(), data.length, null, data));
            case Float64Array:
                return new FloatVector(new _data.FlatData(new _type2.Float64(), data.length, null, data));
        }
        throw new TypeError('Unrecognized Float data');
    };
    FloatVector.defaultView = function (data) {
        return data.type.precision !== _type2.Precision.HALF ? new _flat.FlatView(data) : new _flat.Float16View(data);
    };
    return FloatVector;
}(FlatVector);
exports.FloatVector = FloatVector;

var DateVector = /** @class */function (_super) {
    tslib_1.__extends(DateVector, _super);
    function DateVector(data, view) {
        if (view === void 0) {
            view = DateVector.defaultView(data);
        }
        return _super.call(this, data, view) || this;
    }
    DateVector.defaultView = function (data) {
        return data.type.unit === _type2.DateUnit.DAY ? new _flat.DateDayView(data) : new _flat.DateMillisecondView(data, 2);
    };
    DateVector.prototype.lows = function () {
        return this.type.unit === _type2.DateUnit.DAY ? this.asInt32(0, 1) : this.asInt32(0, 2);
    };
    DateVector.prototype.highs = function () {
        return this.type.unit === _type2.DateUnit.DAY ? this.asInt32(0, 1) : this.asInt32(1, 2);
    };
    DateVector.prototype.asEpochMilliseconds = function () {
        var data = this.data.clone(new _type2.Int32());
        switch (this.type.unit) {
            case _type2.DateUnit.DAY:
                return new IntVector(data, new _flat.TimestampDayView(data, 1));
            case _type2.DateUnit.MILLISECOND:
                return new IntVector(data, new _flat.TimestampMillisecondView(data, 2));
        }
        throw new TypeError("Unrecognized date unit \"" + _type2.DateUnit[this.type.unit] + "\"");
    };
    return DateVector;
}(FlatVector);
exports.DateVector = DateVector;

var DecimalVector = /** @class */function (_super) {
    tslib_1.__extends(DecimalVector, _super);
    function DecimalVector(data, view) {
        if (view === void 0) {
            view = new _flat.FixedSizeView(data, 4);
        }
        return _super.call(this, data, view) || this;
    }
    return DecimalVector;
}(FlatVector);
exports.DecimalVector = DecimalVector;

var TimeVector = /** @class */function (_super) {
    tslib_1.__extends(TimeVector, _super);
    function TimeVector(data, view) {
        if (view === void 0) {
            view = TimeVector.defaultView(data);
        }
        return _super.call(this, data, view) || this;
    }
    TimeVector.defaultView = function (data) {
        return data.type.bitWidth <= 32 ? new _flat.FlatView(data) : new _flat.FixedSizeView(data, data.type.bitWidth / 32 | 0);
    };
    TimeVector.prototype.lows = function () {
        return this.type.bitWidth <= 32 ? this.asInt32(0, 1) : this.asInt32(0, 2);
    };
    TimeVector.prototype.highs = function () {
        return this.type.bitWidth <= 32 ? this.asInt32(0, 1) : this.asInt32(1, 2);
    };
    return TimeVector;
}(FlatVector);
exports.TimeVector = TimeVector;

var TimestampVector = /** @class */function (_super) {
    tslib_1.__extends(TimestampVector, _super);
    function TimestampVector(data, view) {
        if (view === void 0) {
            view = new _flat.FixedSizeView(data, 2);
        }
        return _super.call(this, data, view) || this;
    }
    TimestampVector.prototype.asEpochMilliseconds = function () {
        var data = this.data.clone(new _type2.Int32());
        switch (this.type.unit) {
            case _type2.TimeUnit.SECOND:
                return new IntVector(data, new _flat.TimestampSecondView(data, 1));
            case _type2.TimeUnit.MILLISECOND:
                return new IntVector(data, new _flat.TimestampMillisecondView(data, 2));
            case _type2.TimeUnit.MICROSECOND:
                return new IntVector(data, new _flat.TimestampMicrosecondView(data, 2));
            case _type2.TimeUnit.NANOSECOND:
                return new IntVector(data, new _flat.TimestampNanosecondView(data, 2));
        }
        throw new TypeError("Unrecognized time unit \"" + _type2.TimeUnit[this.type.unit] + "\"");
    };
    return TimestampVector;
}(FlatVector);
exports.TimestampVector = TimestampVector;

var IntervalVector = /** @class */function (_super) {
    tslib_1.__extends(IntervalVector, _super);
    function IntervalVector(data, view) {
        if (view === void 0) {
            view = IntervalVector.defaultView(data);
        }
        return _super.call(this, data, view) || this;
    }
    IntervalVector.defaultView = function (data) {
        return data.type.unit === _type2.IntervalUnit.YEAR_MONTH ? new _flat.IntervalYearMonthView(data) : new _flat.FixedSizeView(data, 2);
    };
    IntervalVector.prototype.lows = function () {
        return this.type.unit === _type2.IntervalUnit.YEAR_MONTH ? this.asInt32(0, 1) : this.asInt32(0, 2);
    };
    IntervalVector.prototype.highs = function () {
        return this.type.unit === _type2.IntervalUnit.YEAR_MONTH ? this.asInt32(0, 1) : this.asInt32(1, 2);
    };
    return IntervalVector;
}(FlatVector);
exports.IntervalVector = IntervalVector;

var BinaryVector = /** @class */function (_super) {
    tslib_1.__extends(BinaryVector, _super);
    function BinaryVector(data, view) {
        if (view === void 0) {
            view = new _list.BinaryView(data);
        }
        return _super.call(this, data, view) || this;
    }
    BinaryVector.prototype.asUtf8 = function () {
        return new Utf8Vector(this.data.clone(new _type2.Utf8()));
    };
    return BinaryVector;
}(ListVectorBase);
exports.BinaryVector = BinaryVector;

var FixedSizeBinaryVector = /** @class */function (_super) {
    tslib_1.__extends(FixedSizeBinaryVector, _super);
    function FixedSizeBinaryVector(data, view) {
        if (view === void 0) {
            view = new _flat.FixedSizeView(data, data.type.byteWidth);
        }
        return _super.call(this, data, view) || this;
    }
    return FixedSizeBinaryVector;
}(FlatVector);
exports.FixedSizeBinaryVector = FixedSizeBinaryVector;

var Utf8Vector = /** @class */function (_super) {
    tslib_1.__extends(Utf8Vector, _super);
    function Utf8Vector(data, view) {
        if (view === void 0) {
            view = new _list.Utf8View(data);
        }
        return _super.call(this, data, view) || this;
    }
    Utf8Vector.prototype.asBinary = function () {
        return new BinaryVector(this.data.clone(new _type2.Binary()));
    };
    return Utf8Vector;
}(ListVectorBase);
exports.Utf8Vector = Utf8Vector;

var ListVector = /** @class */function (_super) {
    tslib_1.__extends(ListVector, _super);
    function ListVector(data, view) {
        if (view === void 0) {
            view = new _list.ListView(data);
        }
        return _super.call(this, data, view) || this;
    }
    return ListVector;
}(ListVectorBase);
exports.ListVector = ListVector;

var FixedSizeListVector = /** @class */function (_super) {
    tslib_1.__extends(FixedSizeListVector, _super);
    function FixedSizeListVector(data, view) {
        if (view === void 0) {
            view = new _list.FixedSizeListView(data);
        }
        return _super.call(this, data, view) || this;
    }
    return FixedSizeListVector;
}(Vector);
exports.FixedSizeListVector = FixedSizeListVector;

var MapVector = /** @class */function (_super) {
    tslib_1.__extends(MapVector, _super);
    function MapVector(data, view) {
        if (view === void 0) {
            view = new _nested.MapView(data);
        }
        return _super.call(this, data, view) || this;
    }
    MapVector.prototype.asStruct = function () {
        return new StructVector(this.data.clone(new _type2.Struct(this.type.children)));
    };
    return MapVector;
}(NestedVector);
exports.MapVector = MapVector;

var StructVector = /** @class */function (_super) {
    tslib_1.__extends(StructVector, _super);
    function StructVector(data, view) {
        if (view === void 0) {
            view = new _nested.StructView(data);
        }
        return _super.call(this, data, view) || this;
    }
    StructVector.prototype.asMap = function (keysSorted) {
        if (keysSorted === void 0) {
            keysSorted = false;
        }
        return new MapVector(this.data.clone(new _type2.Map_(keysSorted, this.type.children)));
    };
    return StructVector;
}(NestedVector);
exports.StructVector = StructVector;

var UnionVector = /** @class */function (_super) {
    tslib_1.__extends(UnionVector, _super);
    function UnionVector(data, view) {
        if (view === void 0) {
            view = data.type.mode === _type2.UnionMode.Sparse ? new _nested.UnionView(data) : new _nested.DenseUnionView(data);
        }
        return _super.call(this, data, view) || this;
    }
    return UnionVector;
}(NestedVector);
exports.UnionVector = UnionVector;

var DictionaryVector = /** @class */function (_super) {
    tslib_1.__extends(DictionaryVector, _super);
    function DictionaryVector(data, view) {
        if (view === void 0) {
            view = new _dictionary.DictionaryView(data.dictionary, new IntVector(data.indices));
        }
        var _this = _super.call(this, data, view) || this;
        if (view instanceof _flat.ValidityView) {
            view = view.view;
        }
        if (data instanceof _data.DictionaryData && view instanceof _dictionary.DictionaryView) {
            _this.indices = view.indices;
            _this.dictionary = data.dictionary;
        } else if (data instanceof _data.ChunkedData && view instanceof _chunked.ChunkedView) {
            var chunks = view.chunkVectors;
            // Assume the last chunk's dictionary data is the most up-to-date,
            // including data from DictionaryBatches that were marked as deltas
            _this.dictionary = chunks[chunks.length - 1].dictionary;
            _this.indices = chunks.reduce(function (idxs, dict) {
                return !idxs ? dict.indices : idxs.concat(dict.indices);
            }, null);
        } else {
            throw new TypeError("Unrecognized DictionaryVector view");
        }
        return _this;
    }
    DictionaryVector.prototype.getKey = function (index) {
        return this.indices.get(index);
    };
    DictionaryVector.prototype.getValue = function (key) {
        return this.dictionary.get(key);
    };
    DictionaryVector.prototype.reverseLookup = function (value) {
        return this.dictionary.indexOf(value);
    };
    return DictionaryVector;
}(Vector);
exports.DictionaryVector = DictionaryVector;
var createVector = exports.createVector = function (VectorLoader) {
    return function (data) {
        return _visitor.TypeVisitor.visitTypeInline(new VectorLoader(data), data.type);
    };
}( /** @class */function (_super) {
    tslib_1.__extends(VectorLoader, _super);
    function VectorLoader(data) {
        var _this = _super.call(this) || this;
        _this.data = data;
        return _this;
    }
    VectorLoader.prototype.visitNull = function (_type) {
        return new NullVector(this.data);
    };
    VectorLoader.prototype.visitInt = function (_type) {
        return new IntVector(this.data);
    };
    VectorLoader.prototype.visitFloat = function (_type) {
        return new FloatVector(this.data);
    };
    VectorLoader.prototype.visitBinary = function (_type) {
        return new BinaryVector(this.data);
    };
    VectorLoader.prototype.visitUtf8 = function (_type) {
        return new Utf8Vector(this.data);
    };
    VectorLoader.prototype.visitBool = function (_type) {
        return new BoolVector(this.data);
    };
    VectorLoader.prototype.visitDecimal = function (_type) {
        return new DecimalVector(this.data);
    };
    VectorLoader.prototype.visitDate = function (_type) {
        return new DateVector(this.data);
    };
    VectorLoader.prototype.visitTime = function (_type) {
        return new TimeVector(this.data);
    };
    VectorLoader.prototype.visitTimestamp = function (_type) {
        return new TimestampVector(this.data);
    };
    VectorLoader.prototype.visitInterval = function (_type) {
        return new IntervalVector(this.data);
    };
    VectorLoader.prototype.visitList = function (_type) {
        return new ListVector(this.data);
    };
    VectorLoader.prototype.visitStruct = function (_type) {
        return new StructVector(this.data);
    };
    VectorLoader.prototype.visitUnion = function (_type) {
        return new UnionVector(this.data);
    };
    VectorLoader.prototype.visitFixedSizeBinary = function (_type) {
        return new FixedSizeBinaryVector(this.data);
    };
    VectorLoader.prototype.visitFixedSizeList = function (_type) {
        return new FixedSizeListVector(this.data);
    };
    VectorLoader.prototype.visitMap = function (_type) {
        return new MapVector(this.data);
    };
    VectorLoader.prototype.visitDictionary = function (_type) {
        return new DictionaryVector(this.data);
    };
    return VectorLoader;
}(_visitor.TypeVisitor));

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/* tslint:disable:class-name */
// automatically generated by the FlatBuffers compiler, do not modify
/**
 * @enum
 */
var org = exports.org = undefined;
(function (org) {
    var apache;
    (function (apache) {
        var arrow;
        (function (arrow) {
            var flatbuf;
            (function (flatbuf) {
                var MetadataVersion;
                (function (MetadataVersion) {
                    /**
                     * 0.1.0
                     */
                    MetadataVersion[MetadataVersion["V1"] = 0] = "V1";
                    /**
                     * 0.2.0
                     */
                    MetadataVersion[MetadataVersion["V2"] = 1] = "V2";
                    /**
                     * 0.3.0 -> 0.7.1
                     */
                    MetadataVersion[MetadataVersion["V3"] = 2] = "V3";
                    /**
                     * >= 0.8.0
                     */
                    MetadataVersion[MetadataVersion["V4"] = 3] = "V4";
                })(MetadataVersion = flatbuf.MetadataVersion || (flatbuf.MetadataVersion = {}));
            })(flatbuf = arrow.flatbuf || (arrow.flatbuf = {}));
        })(arrow = apache.arrow || (apache.arrow = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (exports.org = org = {}));
/**
 * @enum
 */
(function (org) {
    var apache;
    (function (apache) {
        var arrow;
        (function (arrow) {
            var flatbuf;
            (function (flatbuf) {
                var UnionMode;
                (function (UnionMode) {
                    UnionMode[UnionMode["Sparse"] = 0] = "Sparse";
                    UnionMode[UnionMode["Dense"] = 1] = "Dense";
                })(UnionMode = flatbuf.UnionMode || (flatbuf.UnionMode = {}));
            })(flatbuf = arrow.flatbuf || (arrow.flatbuf = {}));
        })(arrow = apache.arrow || (apache.arrow = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (exports.org = org = {}));
/**
 * @enum
 */
(function (org) {
    var apache;
    (function (apache) {
        var arrow;
        (function (arrow) {
            var flatbuf;
            (function (flatbuf) {
                var Precision;
                (function (Precision) {
                    Precision[Precision["HALF"] = 0] = "HALF";
                    Precision[Precision["SINGLE"] = 1] = "SINGLE";
                    Precision[Precision["DOUBLE"] = 2] = "DOUBLE";
                })(Precision = flatbuf.Precision || (flatbuf.Precision = {}));
            })(flatbuf = arrow.flatbuf || (arrow.flatbuf = {}));
        })(arrow = apache.arrow || (apache.arrow = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (exports.org = org = {}));
/**
 * @enum
 */
(function (org) {
    var apache;
    (function (apache) {
        var arrow;
        (function (arrow) {
            var flatbuf;
            (function (flatbuf) {
                var DateUnit;
                (function (DateUnit) {
                    DateUnit[DateUnit["DAY"] = 0] = "DAY";
                    DateUnit[DateUnit["MILLISECOND"] = 1] = "MILLISECOND";
                })(DateUnit = flatbuf.DateUnit || (flatbuf.DateUnit = {}));
            })(flatbuf = arrow.flatbuf || (arrow.flatbuf = {}));
        })(arrow = apache.arrow || (apache.arrow = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (exports.org = org = {}));
/**
 * @enum
 */
(function (org) {
    var apache;
    (function (apache) {
        var arrow;
        (function (arrow) {
            var flatbuf;
            (function (flatbuf) {
                var TimeUnit;
                (function (TimeUnit) {
                    TimeUnit[TimeUnit["SECOND"] = 0] = "SECOND";
                    TimeUnit[TimeUnit["MILLISECOND"] = 1] = "MILLISECOND";
                    TimeUnit[TimeUnit["MICROSECOND"] = 2] = "MICROSECOND";
                    TimeUnit[TimeUnit["NANOSECOND"] = 3] = "NANOSECOND";
                })(TimeUnit = flatbuf.TimeUnit || (flatbuf.TimeUnit = {}));
            })(flatbuf = arrow.flatbuf || (arrow.flatbuf = {}));
        })(arrow = apache.arrow || (apache.arrow = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (exports.org = org = {}));
/**
 * @enum
 */
(function (org) {
    var apache;
    (function (apache) {
        var arrow;
        (function (arrow) {
            var flatbuf;
            (function (flatbuf) {
                var IntervalUnit;
                (function (IntervalUnit) {
                    IntervalUnit[IntervalUnit["YEAR_MONTH"] = 0] = "YEAR_MONTH";
                    IntervalUnit[IntervalUnit["DAY_TIME"] = 1] = "DAY_TIME";
                })(IntervalUnit = flatbuf.IntervalUnit || (flatbuf.IntervalUnit = {}));
            })(flatbuf = arrow.flatbuf || (arrow.flatbuf = {}));
        })(arrow = apache.arrow || (apache.arrow = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (exports.org = org = {}));
/**
 * ----------------------------------------------------------------------
 * Top-level Type value, enabling extensible type-specific metadata. We can
 * add new logical types to Type without breaking backwards compatibility
 *
 * @enum
 */
(function (org) {
    var apache;
    (function (apache) {
        var arrow;
        (function (arrow) {
            var flatbuf;
            (function (flatbuf) {
                var Type;
                (function (Type) {
                    Type[Type["NONE"] = 0] = "NONE";
                    Type[Type["Null"] = 1] = "Null";
                    Type[Type["Int"] = 2] = "Int";
                    Type[Type["FloatingPoint"] = 3] = "FloatingPoint";
                    Type[Type["Binary"] = 4] = "Binary";
                    Type[Type["Utf8"] = 5] = "Utf8";
                    Type[Type["Bool"] = 6] = "Bool";
                    Type[Type["Decimal"] = 7] = "Decimal";
                    Type[Type["Date"] = 8] = "Date";
                    Type[Type["Time"] = 9] = "Time";
                    Type[Type["Timestamp"] = 10] = "Timestamp";
                    Type[Type["Interval"] = 11] = "Interval";
                    Type[Type["List"] = 12] = "List";
                    Type[Type["Struct_"] = 13] = "Struct_";
                    Type[Type["Union"] = 14] = "Union";
                    Type[Type["FixedSizeBinary"] = 15] = "FixedSizeBinary";
                    Type[Type["FixedSizeList"] = 16] = "FixedSizeList";
                    Type[Type["Map"] = 17] = "Map";
                })(Type = flatbuf.Type || (flatbuf.Type = {}));
            })(flatbuf = arrow.flatbuf || (arrow.flatbuf = {}));
        })(arrow = apache.arrow || (apache.arrow = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (exports.org = org = {}));
/**
 * ----------------------------------------------------------------------
 * The possible types of a vector
 *
 * @enum
 */
(function (org) {
    var apache;
    (function (apache) {
        var arrow;
        (function (arrow) {
            var flatbuf;
            (function (flatbuf) {
                var VectorType;
                (function (VectorType) {
                    /**
                     * used in List type, Dense Union and variable length primitive types (String, Binary)
                     */
                    VectorType[VectorType["OFFSET"] = 0] = "OFFSET";
                    /**
                     * actual data, either wixed width primitive types in slots or variable width delimited by an OFFSET vector
                     */
                    VectorType[VectorType["DATA"] = 1] = "DATA";
                    /**
                     * Bit vector indicating if each value is null
                     */
                    VectorType[VectorType["VALIDITY"] = 2] = "VALIDITY";
                    /**
                     * Type vector used in Union type
                     */
                    VectorType[VectorType["TYPE"] = 3] = "TYPE";
                })(VectorType = flatbuf.VectorType || (flatbuf.VectorType = {}));
            })(flatbuf = arrow.flatbuf || (arrow.flatbuf = {}));
        })(arrow = apache.arrow || (apache.arrow = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (exports.org = org = {}));
/**
 * ----------------------------------------------------------------------
 * Endianness of the platform producing the data
 *
 * @enum
 */
(function (org) {
    var apache;
    (function (apache) {
        var arrow;
        (function (arrow) {
            var flatbuf;
            (function (flatbuf) {
                var Endianness;
                (function (Endianness) {
                    Endianness[Endianness["Little"] = 0] = "Little";
                    Endianness[Endianness["Big"] = 1] = "Big";
                })(Endianness = flatbuf.Endianness || (flatbuf.Endianness = {}));
            })(flatbuf = arrow.flatbuf || (arrow.flatbuf = {}));
        })(arrow = apache.arrow || (apache.arrow = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (exports.org = org = {}));
/**
 * These are stored in the flatbuffer in the Type union below
 *
 * @constructor
 */
(function (org) {
    var apache;
    (function (apache) {
        var arrow;
        (function (arrow) {
            var flatbuf;
            (function (flatbuf) {
                var Null = /** @class */function () {
                    function Null() {
                        /**
                         * @type {number}
                         */
                        this.bb_pos = 0;
                    }
                    /**
                     * @param {number} i
                     * @param {flatbuffers.ByteBuffer} bb
                     * @returns {Null}
                     */
                    Null.prototype.__init = function (i, bb) {
                        this.bb_pos = i;
                        this.bb = bb;
                        return this;
                    };
                    /**
                     * @param {flatbuffers.ByteBuffer} bb
                     * @param {Null=} obj
                     * @returns {Null}
                     */
                    Null.getRootAsNull = function (bb, obj) {
                        return (obj || new Null()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     */
                    Null.startNull = function (builder) {
                        builder.startObject(0);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @returns {flatbuffers.Offset}
                     */
                    Null.endNull = function (builder) {
                        var offset = builder.endObject();
                        return offset;
                    };
                    return Null;
                }();
                flatbuf.Null = Null;
            })(flatbuf = arrow.flatbuf || (arrow.flatbuf = {}));
        })(arrow = apache.arrow || (apache.arrow = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (exports.org = org = {}));
/**
 * A Struct_ in the flatbuffer metadata is the same as an Arrow Struct
 * (according to the physical memory layout). We used Struct_ here as
 * Struct is a reserved word in Flatbuffers
 *
 * @constructor
 */
(function (org) {
    var apache;
    (function (apache) {
        var arrow;
        (function (arrow) {
            var flatbuf;
            (function (flatbuf) {
                var Struct_ = /** @class */function () {
                    function Struct_() {
                        /**
                         * @type {number}
                         */
                        this.bb_pos = 0;
                    }
                    /**
                     * @param {number} i
                     * @param {flatbuffers.ByteBuffer} bb
                     * @returns {Struct_}
                     */
                    Struct_.prototype.__init = function (i, bb) {
                        this.bb_pos = i;
                        this.bb = bb;
                        return this;
                    };
                    /**
                     * @param {flatbuffers.ByteBuffer} bb
                     * @param {Struct_=} obj
                     * @returns {Struct_}
                     */
                    Struct_.getRootAsStruct_ = function (bb, obj) {
                        return (obj || new Struct_()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     */
                    Struct_.startStruct_ = function (builder) {
                        builder.startObject(0);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @returns {flatbuffers.Offset}
                     */
                    Struct_.endStruct_ = function (builder) {
                        var offset = builder.endObject();
                        return offset;
                    };
                    return Struct_;
                }();
                flatbuf.Struct_ = Struct_;
            })(flatbuf = arrow.flatbuf || (arrow.flatbuf = {}));
        })(arrow = apache.arrow || (apache.arrow = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (exports.org = org = {}));
/**
 * @constructor
 */
(function (org) {
    var apache;
    (function (apache) {
        var arrow;
        (function (arrow) {
            var flatbuf;
            (function (flatbuf) {
                var List = /** @class */function () {
                    function List() {
                        /**
                         * @type {number}
                         */
                        this.bb_pos = 0;
                    }
                    /**
                     * @param {number} i
                     * @param {flatbuffers.ByteBuffer} bb
                     * @returns {List}
                     */
                    List.prototype.__init = function (i, bb) {
                        this.bb_pos = i;
                        this.bb = bb;
                        return this;
                    };
                    /**
                     * @param {flatbuffers.ByteBuffer} bb
                     * @param {List=} obj
                     * @returns {List}
                     */
                    List.getRootAsList = function (bb, obj) {
                        return (obj || new List()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     */
                    List.startList = function (builder) {
                        builder.startObject(0);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @returns {flatbuffers.Offset}
                     */
                    List.endList = function (builder) {
                        var offset = builder.endObject();
                        return offset;
                    };
                    return List;
                }();
                flatbuf.List = List;
            })(flatbuf = arrow.flatbuf || (arrow.flatbuf = {}));
        })(arrow = apache.arrow || (apache.arrow = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (exports.org = org = {}));
/**
 * @constructor
 */
(function (org) {
    var apache;
    (function (apache) {
        var arrow;
        (function (arrow) {
            var flatbuf;
            (function (flatbuf) {
                var FixedSizeList = /** @class */function () {
                    function FixedSizeList() {
                        /**
                         * @type {number}
                         */
                        this.bb_pos = 0;
                    }
                    /**
                     * @param {number} i
                     * @param {flatbuffers.ByteBuffer} bb
                     * @returns {FixedSizeList}
                     */
                    FixedSizeList.prototype.__init = function (i, bb) {
                        this.bb_pos = i;
                        this.bb = bb;
                        return this;
                    };
                    /**
                     * @param {flatbuffers.ByteBuffer} bb
                     * @param {FixedSizeList=} obj
                     * @returns {FixedSizeList}
                     */
                    FixedSizeList.getRootAsFixedSizeList = function (bb, obj) {
                        return (obj || new FixedSizeList()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
                    };
                    /**
                     * Number of list items per value
                     *
                     * @returns {number}
                     */
                    FixedSizeList.prototype.listSize = function () {
                        var offset = this.bb.__offset(this.bb_pos, 4);
                        return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     */
                    FixedSizeList.startFixedSizeList = function (builder) {
                        builder.startObject(1);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @param {number} listSize
                     */
                    FixedSizeList.addListSize = function (builder, listSize) {
                        builder.addFieldInt32(0, listSize, 0);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @returns {flatbuffers.Offset}
                     */
                    FixedSizeList.endFixedSizeList = function (builder) {
                        var offset = builder.endObject();
                        return offset;
                    };
                    return FixedSizeList;
                }();
                flatbuf.FixedSizeList = FixedSizeList;
            })(flatbuf = arrow.flatbuf || (arrow.flatbuf = {}));
        })(arrow = apache.arrow || (apache.arrow = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (exports.org = org = {}));
/**
 * A Map is a logical nested type that is represented as
 *
 * List<entry: Struct<key: K, value: V>>
 *
 * In this layout, the keys and values are each respectively contiguous. We do
 * not constrain the key and value types, so the application is responsible
 * for ensuring that the keys are hashable and unique. Whether the keys are sorted
 * may be set in the metadata for this field
 *
 * In a Field with Map type, the Field has a child Struct field, which then
 * has two children: key type and the second the value type. The names of the
 * child fields may be respectively "entry", "key", and "value", but this is
 * not enforced
 *
 * Map
 *   - child[0] entry: Struct
 *     - child[0] key: K
 *     - child[1] value: V
 *
 * Neither the "entry" field nor the "key" field may be nullable.
 *
 * The metadata is structured so that Arrow systems without special handling
 * for Map can make Map an alias for List. The "layout" attribute for the Map
 * field must have the same contents as a List.
 *
 * @constructor
 */
(function (org) {
    var apache;
    (function (apache) {
        var arrow;
        (function (arrow) {
            var flatbuf;
            (function (flatbuf) {
                var Map = /** @class */function () {
                    function Map() {
                        /**
                         * @type {number}
                         */
                        this.bb_pos = 0;
                    }
                    /**
                     * @param {number} i
                     * @param {flatbuffers.ByteBuffer} bb
                     * @returns {Map}
                     */
                    Map.prototype.__init = function (i, bb) {
                        this.bb_pos = i;
                        this.bb = bb;
                        return this;
                    };
                    /**
                     * @param {flatbuffers.ByteBuffer} bb
                     * @param {Map=} obj
                     * @returns {Map}
                     */
                    Map.getRootAsMap = function (bb, obj) {
                        return (obj || new Map()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
                    };
                    /**
                     * Set to true if the keys within each value are sorted
                     *
                     * @returns {boolean}
                     */
                    Map.prototype.keysSorted = function () {
                        var offset = this.bb.__offset(this.bb_pos, 4);
                        return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     */
                    Map.startMap = function (builder) {
                        builder.startObject(1);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @param {boolean} keysSorted
                     */
                    Map.addKeysSorted = function (builder, keysSorted) {
                        builder.addFieldInt8(0, +keysSorted, +false);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @returns {flatbuffers.Offset}
                     */
                    Map.endMap = function (builder) {
                        var offset = builder.endObject();
                        return offset;
                    };
                    return Map;
                }();
                flatbuf.Map = Map;
            })(flatbuf = arrow.flatbuf || (arrow.flatbuf = {}));
        })(arrow = apache.arrow || (apache.arrow = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (exports.org = org = {}));
/**
 * A union is a complex type with children in Field
 * By default ids in the type vector refer to the offsets in the children
 * optionally typeIds provides an indirection between the child offset and the type id
 * for each child typeIds[offset] is the id used in the type vector
 *
 * @constructor
 */
(function (org) {
    var apache;
    (function (apache) {
        var arrow;
        (function (arrow) {
            var flatbuf;
            (function (flatbuf) {
                var Union = /** @class */function () {
                    function Union() {
                        /**
                         * @type {number}
                         */
                        this.bb_pos = 0;
                    }
                    /**
                     * @param {number} i
                     * @param {flatbuffers.ByteBuffer} bb
                     * @returns {Union}
                     */
                    Union.prototype.__init = function (i, bb) {
                        this.bb_pos = i;
                        this.bb = bb;
                        return this;
                    };
                    /**
                     * @param {flatbuffers.ByteBuffer} bb
                     * @param {Union=} obj
                     * @returns {Union}
                     */
                    Union.getRootAsUnion = function (bb, obj) {
                        return (obj || new Union()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
                    };
                    /**
                     * @returns {org.apache.arrow.flatbuf.UnionMode}
                     */
                    Union.prototype.mode = function () {
                        var offset = this.bb.__offset(this.bb_pos, 4);
                        return offset ? /** @type {org.apache.arrow.flatbuf.UnionMode} */this.bb.readInt16(this.bb_pos + offset) : org.apache.arrow.flatbuf.UnionMode.Sparse;
                    };
                    /**
                     * @param {number} index
                     * @returns {number}
                     */
                    Union.prototype.typeIds = function (index) {
                        var offset = this.bb.__offset(this.bb_pos, 6);
                        return offset ? this.bb.readInt32(this.bb.__vector(this.bb_pos + offset) + index * 4) : 0;
                    };
                    /**
                     * @returns {number}
                     */
                    Union.prototype.typeIdsLength = function () {
                        var offset = this.bb.__offset(this.bb_pos, 6);
                        return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
                    };
                    /**
                     * @returns {Int32Array}
                     */
                    Union.prototype.typeIdsArray = function () {
                        var offset = this.bb.__offset(this.bb_pos, 6);
                        return offset ? new Int32Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     */
                    Union.startUnion = function (builder) {
                        builder.startObject(2);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @param {org.apache.arrow.flatbuf.UnionMode} mode
                     */
                    Union.addMode = function (builder, mode) {
                        builder.addFieldInt16(0, mode, org.apache.arrow.flatbuf.UnionMode.Sparse);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @param {flatbuffers.Offset} typeIdsOffset
                     */
                    Union.addTypeIds = function (builder, typeIdsOffset) {
                        builder.addFieldOffset(1, typeIdsOffset, 0);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @param {Array.<number>} data
                     * @returns {flatbuffers.Offset}
                     */
                    Union.createTypeIdsVector = function (builder, data) {
                        builder.startVector(4, data.length, 4);
                        for (var i = data.length - 1; i >= 0; i--) {
                            builder.addInt32(data[i]);
                        }
                        return builder.endVector();
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @param {number} numElems
                     */
                    Union.startTypeIdsVector = function (builder, numElems) {
                        builder.startVector(4, numElems, 4);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @returns {flatbuffers.Offset}
                     */
                    Union.endUnion = function (builder) {
                        var offset = builder.endObject();
                        return offset;
                    };
                    return Union;
                }();
                flatbuf.Union = Union;
            })(flatbuf = arrow.flatbuf || (arrow.flatbuf = {}));
        })(arrow = apache.arrow || (apache.arrow = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (exports.org = org = {}));
/**
 * @constructor
 */
(function (org) {
    var apache;
    (function (apache) {
        var arrow;
        (function (arrow) {
            var flatbuf;
            (function (flatbuf) {
                var Int = /** @class */function () {
                    function Int() {
                        /**
                         * @type {number}
                         */
                        this.bb_pos = 0;
                    }
                    /**
                     * @param {number} i
                     * @param {flatbuffers.ByteBuffer} bb
                     * @returns {Int}
                     */
                    Int.prototype.__init = function (i, bb) {
                        this.bb_pos = i;
                        this.bb = bb;
                        return this;
                    };
                    /**
                     * @param {flatbuffers.ByteBuffer} bb
                     * @param {Int=} obj
                     * @returns {Int}
                     */
                    Int.getRootAsInt = function (bb, obj) {
                        return (obj || new Int()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
                    };
                    /**
                     * @returns {number}
                     */
                    Int.prototype.bitWidth = function () {
                        var offset = this.bb.__offset(this.bb_pos, 4);
                        return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
                    };
                    /**
                     * @returns {boolean}
                     */
                    Int.prototype.isSigned = function () {
                        var offset = this.bb.__offset(this.bb_pos, 6);
                        return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     */
                    Int.startInt = function (builder) {
                        builder.startObject(2);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @param {number} bitWidth
                     */
                    Int.addBitWidth = function (builder, bitWidth) {
                        builder.addFieldInt32(0, bitWidth, 0);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @param {boolean} isSigned
                     */
                    Int.addIsSigned = function (builder, isSigned) {
                        builder.addFieldInt8(1, +isSigned, +false);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @returns {flatbuffers.Offset}
                     */
                    Int.endInt = function (builder) {
                        var offset = builder.endObject();
                        return offset;
                    };
                    return Int;
                }();
                flatbuf.Int = Int;
            })(flatbuf = arrow.flatbuf || (arrow.flatbuf = {}));
        })(arrow = apache.arrow || (apache.arrow = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (exports.org = org = {}));
/**
 * @constructor
 */
(function (org) {
    var apache;
    (function (apache) {
        var arrow;
        (function (arrow) {
            var flatbuf;
            (function (flatbuf) {
                var FloatingPoint = /** @class */function () {
                    function FloatingPoint() {
                        /**
                         * @type {number}
                         */
                        this.bb_pos = 0;
                    }
                    /**
                     * @param {number} i
                     * @param {flatbuffers.ByteBuffer} bb
                     * @returns {FloatingPoint}
                     */
                    FloatingPoint.prototype.__init = function (i, bb) {
                        this.bb_pos = i;
                        this.bb = bb;
                        return this;
                    };
                    /**
                     * @param {flatbuffers.ByteBuffer} bb
                     * @param {FloatingPoint=} obj
                     * @returns {FloatingPoint}
                     */
                    FloatingPoint.getRootAsFloatingPoint = function (bb, obj) {
                        return (obj || new FloatingPoint()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
                    };
                    /**
                     * @returns {org.apache.arrow.flatbuf.Precision}
                     */
                    FloatingPoint.prototype.precision = function () {
                        var offset = this.bb.__offset(this.bb_pos, 4);
                        return offset ? /** @type {org.apache.arrow.flatbuf.Precision} */this.bb.readInt16(this.bb_pos + offset) : org.apache.arrow.flatbuf.Precision.HALF;
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     */
                    FloatingPoint.startFloatingPoint = function (builder) {
                        builder.startObject(1);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @param {org.apache.arrow.flatbuf.Precision} precision
                     */
                    FloatingPoint.addPrecision = function (builder, precision) {
                        builder.addFieldInt16(0, precision, org.apache.arrow.flatbuf.Precision.HALF);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @returns {flatbuffers.Offset}
                     */
                    FloatingPoint.endFloatingPoint = function (builder) {
                        var offset = builder.endObject();
                        return offset;
                    };
                    return FloatingPoint;
                }();
                flatbuf.FloatingPoint = FloatingPoint;
            })(flatbuf = arrow.flatbuf || (arrow.flatbuf = {}));
        })(arrow = apache.arrow || (apache.arrow = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (exports.org = org = {}));
/**
 * Unicode with UTF-8 encoding
 *
 * @constructor
 */
(function (org) {
    var apache;
    (function (apache) {
        var arrow;
        (function (arrow) {
            var flatbuf;
            (function (flatbuf) {
                var Utf8 = /** @class */function () {
                    function Utf8() {
                        /**
                         * @type {number}
                         */
                        this.bb_pos = 0;
                    }
                    /**
                     * @param {number} i
                     * @param {flatbuffers.ByteBuffer} bb
                     * @returns {Utf8}
                     */
                    Utf8.prototype.__init = function (i, bb) {
                        this.bb_pos = i;
                        this.bb = bb;
                        return this;
                    };
                    /**
                     * @param {flatbuffers.ByteBuffer} bb
                     * @param {Utf8=} obj
                     * @returns {Utf8}
                     */
                    Utf8.getRootAsUtf8 = function (bb, obj) {
                        return (obj || new Utf8()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     */
                    Utf8.startUtf8 = function (builder) {
                        builder.startObject(0);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @returns {flatbuffers.Offset}
                     */
                    Utf8.endUtf8 = function (builder) {
                        var offset = builder.endObject();
                        return offset;
                    };
                    return Utf8;
                }();
                flatbuf.Utf8 = Utf8;
            })(flatbuf = arrow.flatbuf || (arrow.flatbuf = {}));
        })(arrow = apache.arrow || (apache.arrow = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (exports.org = org = {}));
/**
 * @constructor
 */
(function (org) {
    var apache;
    (function (apache) {
        var arrow;
        (function (arrow) {
            var flatbuf;
            (function (flatbuf) {
                var Binary = /** @class */function () {
                    function Binary() {
                        /**
                         * @type {number}
                         */
                        this.bb_pos = 0;
                    }
                    /**
                     * @param {number} i
                     * @param {flatbuffers.ByteBuffer} bb
                     * @returns {Binary}
                     */
                    Binary.prototype.__init = function (i, bb) {
                        this.bb_pos = i;
                        this.bb = bb;
                        return this;
                    };
                    /**
                     * @param {flatbuffers.ByteBuffer} bb
                     * @param {Binary=} obj
                     * @returns {Binary}
                     */
                    Binary.getRootAsBinary = function (bb, obj) {
                        return (obj || new Binary()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     */
                    Binary.startBinary = function (builder) {
                        builder.startObject(0);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @returns {flatbuffers.Offset}
                     */
                    Binary.endBinary = function (builder) {
                        var offset = builder.endObject();
                        return offset;
                    };
                    return Binary;
                }();
                flatbuf.Binary = Binary;
            })(flatbuf = arrow.flatbuf || (arrow.flatbuf = {}));
        })(arrow = apache.arrow || (apache.arrow = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (exports.org = org = {}));
/**
 * @constructor
 */
(function (org) {
    var apache;
    (function (apache) {
        var arrow;
        (function (arrow) {
            var flatbuf;
            (function (flatbuf) {
                var FixedSizeBinary = /** @class */function () {
                    function FixedSizeBinary() {
                        /**
                         * @type {number}
                         */
                        this.bb_pos = 0;
                    }
                    /**
                     * @param {number} i
                     * @param {flatbuffers.ByteBuffer} bb
                     * @returns {FixedSizeBinary}
                     */
                    FixedSizeBinary.prototype.__init = function (i, bb) {
                        this.bb_pos = i;
                        this.bb = bb;
                        return this;
                    };
                    /**
                     * @param {flatbuffers.ByteBuffer} bb
                     * @param {FixedSizeBinary=} obj
                     * @returns {FixedSizeBinary}
                     */
                    FixedSizeBinary.getRootAsFixedSizeBinary = function (bb, obj) {
                        return (obj || new FixedSizeBinary()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
                    };
                    /**
                     * Number of bytes per value
                     *
                     * @returns {number}
                     */
                    FixedSizeBinary.prototype.byteWidth = function () {
                        var offset = this.bb.__offset(this.bb_pos, 4);
                        return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     */
                    FixedSizeBinary.startFixedSizeBinary = function (builder) {
                        builder.startObject(1);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @param {number} byteWidth
                     */
                    FixedSizeBinary.addByteWidth = function (builder, byteWidth) {
                        builder.addFieldInt32(0, byteWidth, 0);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @returns {flatbuffers.Offset}
                     */
                    FixedSizeBinary.endFixedSizeBinary = function (builder) {
                        var offset = builder.endObject();
                        return offset;
                    };
                    return FixedSizeBinary;
                }();
                flatbuf.FixedSizeBinary = FixedSizeBinary;
            })(flatbuf = arrow.flatbuf || (arrow.flatbuf = {}));
        })(arrow = apache.arrow || (apache.arrow = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (exports.org = org = {}));
/**
 * @constructor
 */
(function (org) {
    var apache;
    (function (apache) {
        var arrow;
        (function (arrow) {
            var flatbuf;
            (function (flatbuf) {
                var Bool = /** @class */function () {
                    function Bool() {
                        /**
                         * @type {number}
                         */
                        this.bb_pos = 0;
                    }
                    /**
                     * @param {number} i
                     * @param {flatbuffers.ByteBuffer} bb
                     * @returns {Bool}
                     */
                    Bool.prototype.__init = function (i, bb) {
                        this.bb_pos = i;
                        this.bb = bb;
                        return this;
                    };
                    /**
                     * @param {flatbuffers.ByteBuffer} bb
                     * @param {Bool=} obj
                     * @returns {Bool}
                     */
                    Bool.getRootAsBool = function (bb, obj) {
                        return (obj || new Bool()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     */
                    Bool.startBool = function (builder) {
                        builder.startObject(0);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @returns {flatbuffers.Offset}
                     */
                    Bool.endBool = function (builder) {
                        var offset = builder.endObject();
                        return offset;
                    };
                    return Bool;
                }();
                flatbuf.Bool = Bool;
            })(flatbuf = arrow.flatbuf || (arrow.flatbuf = {}));
        })(arrow = apache.arrow || (apache.arrow = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (exports.org = org = {}));
/**
 * @constructor
 */
(function (org) {
    var apache;
    (function (apache) {
        var arrow;
        (function (arrow) {
            var flatbuf;
            (function (flatbuf) {
                var Decimal = /** @class */function () {
                    function Decimal() {
                        /**
                         * @type {number}
                         */
                        this.bb_pos = 0;
                    }
                    /**
                     * @param {number} i
                     * @param {flatbuffers.ByteBuffer} bb
                     * @returns {Decimal}
                     */
                    Decimal.prototype.__init = function (i, bb) {
                        this.bb_pos = i;
                        this.bb = bb;
                        return this;
                    };
                    /**
                     * @param {flatbuffers.ByteBuffer} bb
                     * @param {Decimal=} obj
                     * @returns {Decimal}
                     */
                    Decimal.getRootAsDecimal = function (bb, obj) {
                        return (obj || new Decimal()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
                    };
                    /**
                     * Total number of decimal digits
                     *
                     * @returns {number}
                     */
                    Decimal.prototype.precision = function () {
                        var offset = this.bb.__offset(this.bb_pos, 4);
                        return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
                    };
                    /**
                     * Number of digits after the decimal point "."
                     *
                     * @returns {number}
                     */
                    Decimal.prototype.scale = function () {
                        var offset = this.bb.__offset(this.bb_pos, 6);
                        return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     */
                    Decimal.startDecimal = function (builder) {
                        builder.startObject(2);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @param {number} precision
                     */
                    Decimal.addPrecision = function (builder, precision) {
                        builder.addFieldInt32(0, precision, 0);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @param {number} scale
                     */
                    Decimal.addScale = function (builder, scale) {
                        builder.addFieldInt32(1, scale, 0);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @returns {flatbuffers.Offset}
                     */
                    Decimal.endDecimal = function (builder) {
                        var offset = builder.endObject();
                        return offset;
                    };
                    return Decimal;
                }();
                flatbuf.Decimal = Decimal;
            })(flatbuf = arrow.flatbuf || (arrow.flatbuf = {}));
        })(arrow = apache.arrow || (apache.arrow = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (exports.org = org = {}));
/**
 * Date is either a 32-bit or 64-bit type representing elapsed time since UNIX
 * epoch (1970-01-01), stored in either of two units:
 *
 * * Milliseconds (64 bits) indicating UNIX time elapsed since the epoch (no
 *   leap seconds), where the values are evenly divisible by 86400000
 * * Days (32 bits) since the UNIX epoch
 *
 * @constructor
 */
(function (org) {
    var apache;
    (function (apache) {
        var arrow;
        (function (arrow) {
            var flatbuf;
            (function (flatbuf) {
                var Date = /** @class */function () {
                    function Date() {
                        /**
                         * @type {number}
                         */
                        this.bb_pos = 0;
                    }
                    /**
                     * @param {number} i
                     * @param {flatbuffers.ByteBuffer} bb
                     * @returns {Date}
                     */
                    Date.prototype.__init = function (i, bb) {
                        this.bb_pos = i;
                        this.bb = bb;
                        return this;
                    };
                    /**
                     * @param {flatbuffers.ByteBuffer} bb
                     * @param {Date=} obj
                     * @returns {Date}
                     */
                    Date.getRootAsDate = function (bb, obj) {
                        return (obj || new Date()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
                    };
                    /**
                     * @returns {org.apache.arrow.flatbuf.DateUnit}
                     */
                    Date.prototype.unit = function () {
                        var offset = this.bb.__offset(this.bb_pos, 4);
                        return offset ? /** @type {org.apache.arrow.flatbuf.DateUnit} */this.bb.readInt16(this.bb_pos + offset) : org.apache.arrow.flatbuf.DateUnit.MILLISECOND;
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     */
                    Date.startDate = function (builder) {
                        builder.startObject(1);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @param {org.apache.arrow.flatbuf.DateUnit} unit
                     */
                    Date.addUnit = function (builder, unit) {
                        builder.addFieldInt16(0, unit, org.apache.arrow.flatbuf.DateUnit.MILLISECOND);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @returns {flatbuffers.Offset}
                     */
                    Date.endDate = function (builder) {
                        var offset = builder.endObject();
                        return offset;
                    };
                    return Date;
                }();
                flatbuf.Date = Date;
            })(flatbuf = arrow.flatbuf || (arrow.flatbuf = {}));
        })(arrow = apache.arrow || (apache.arrow = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (exports.org = org = {}));
/**
 * Time type. The physical storage type depends on the unit
 * - SECOND and MILLISECOND: 32 bits
 * - MICROSECOND and NANOSECOND: 64 bits
 *
 * @constructor
 */
(function (org) {
    var apache;
    (function (apache) {
        var arrow;
        (function (arrow) {
            var flatbuf;
            (function (flatbuf) {
                var Time = /** @class */function () {
                    function Time() {
                        /**
                         * @type {number}
                         */
                        this.bb_pos = 0;
                    }
                    /**
                     * @param {number} i
                     * @param {flatbuffers.ByteBuffer} bb
                     * @returns {Time}
                     */
                    Time.prototype.__init = function (i, bb) {
                        this.bb_pos = i;
                        this.bb = bb;
                        return this;
                    };
                    /**
                     * @param {flatbuffers.ByteBuffer} bb
                     * @param {Time=} obj
                     * @returns {Time}
                     */
                    Time.getRootAsTime = function (bb, obj) {
                        return (obj || new Time()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
                    };
                    /**
                     * @returns {org.apache.arrow.flatbuf.TimeUnit}
                     */
                    Time.prototype.unit = function () {
                        var offset = this.bb.__offset(this.bb_pos, 4);
                        return offset ? /** @type {org.apache.arrow.flatbuf.TimeUnit} */this.bb.readInt16(this.bb_pos + offset) : org.apache.arrow.flatbuf.TimeUnit.MILLISECOND;
                    };
                    /**
                     * @returns {number}
                     */
                    Time.prototype.bitWidth = function () {
                        var offset = this.bb.__offset(this.bb_pos, 6);
                        return offset ? this.bb.readInt32(this.bb_pos + offset) : 32;
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     */
                    Time.startTime = function (builder) {
                        builder.startObject(2);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @param {org.apache.arrow.flatbuf.TimeUnit} unit
                     */
                    Time.addUnit = function (builder, unit) {
                        builder.addFieldInt16(0, unit, org.apache.arrow.flatbuf.TimeUnit.MILLISECOND);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @param {number} bitWidth
                     */
                    Time.addBitWidth = function (builder, bitWidth) {
                        builder.addFieldInt32(1, bitWidth, 32);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @returns {flatbuffers.Offset}
                     */
                    Time.endTime = function (builder) {
                        var offset = builder.endObject();
                        return offset;
                    };
                    return Time;
                }();
                flatbuf.Time = Time;
            })(flatbuf = arrow.flatbuf || (arrow.flatbuf = {}));
        })(arrow = apache.arrow || (apache.arrow = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (exports.org = org = {}));
/**
 * Time elapsed from the Unix epoch, 00:00:00.000 on 1 January 1970, excluding
 * leap seconds, as a 64-bit integer. Note that UNIX time does not include
 * leap seconds.
 *
 * The Timestamp metadata supports both "time zone naive" and "time zone
 * aware" timestamps. Read about the timezone attribute for more detail
 *
 * @constructor
 */
(function (org) {
    var apache;
    (function (apache) {
        var arrow;
        (function (arrow) {
            var flatbuf;
            (function (flatbuf) {
                var Timestamp = /** @class */function () {
                    function Timestamp() {
                        /**
                         * @type {number}
                         */
                        this.bb_pos = 0;
                    }
                    /**
                     * @param {number} i
                     * @param {flatbuffers.ByteBuffer} bb
                     * @returns {Timestamp}
                     */
                    Timestamp.prototype.__init = function (i, bb) {
                        this.bb_pos = i;
                        this.bb = bb;
                        return this;
                    };
                    /**
                     * @param {flatbuffers.ByteBuffer} bb
                     * @param {Timestamp=} obj
                     * @returns {Timestamp}
                     */
                    Timestamp.getRootAsTimestamp = function (bb, obj) {
                        return (obj || new Timestamp()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
                    };
                    /**
                     * @returns {org.apache.arrow.flatbuf.TimeUnit}
                     */
                    Timestamp.prototype.unit = function () {
                        var offset = this.bb.__offset(this.bb_pos, 4);
                        return offset ? /** @type {org.apache.arrow.flatbuf.TimeUnit} */this.bb.readInt16(this.bb_pos + offset) : org.apache.arrow.flatbuf.TimeUnit.SECOND;
                    };
                    Timestamp.prototype.timezone = function (optionalEncoding) {
                        var offset = this.bb.__offset(this.bb_pos, 6);
                        return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     */
                    Timestamp.startTimestamp = function (builder) {
                        builder.startObject(2);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @param {org.apache.arrow.flatbuf.TimeUnit} unit
                     */
                    Timestamp.addUnit = function (builder, unit) {
                        builder.addFieldInt16(0, unit, org.apache.arrow.flatbuf.TimeUnit.SECOND);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @param {flatbuffers.Offset} timezoneOffset
                     */
                    Timestamp.addTimezone = function (builder, timezoneOffset) {
                        builder.addFieldOffset(1, timezoneOffset, 0);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @returns {flatbuffers.Offset}
                     */
                    Timestamp.endTimestamp = function (builder) {
                        var offset = builder.endObject();
                        return offset;
                    };
                    return Timestamp;
                }();
                flatbuf.Timestamp = Timestamp;
            })(flatbuf = arrow.flatbuf || (arrow.flatbuf = {}));
        })(arrow = apache.arrow || (apache.arrow = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (exports.org = org = {}));
/**
 * @constructor
 */
(function (org) {
    var apache;
    (function (apache) {
        var arrow;
        (function (arrow) {
            var flatbuf;
            (function (flatbuf) {
                var Interval = /** @class */function () {
                    function Interval() {
                        /**
                         * @type {number}
                         */
                        this.bb_pos = 0;
                    }
                    /**
                     * @param {number} i
                     * @param {flatbuffers.ByteBuffer} bb
                     * @returns {Interval}
                     */
                    Interval.prototype.__init = function (i, bb) {
                        this.bb_pos = i;
                        this.bb = bb;
                        return this;
                    };
                    /**
                     * @param {flatbuffers.ByteBuffer} bb
                     * @param {Interval=} obj
                     * @returns {Interval}
                     */
                    Interval.getRootAsInterval = function (bb, obj) {
                        return (obj || new Interval()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
                    };
                    /**
                     * @returns {org.apache.arrow.flatbuf.IntervalUnit}
                     */
                    Interval.prototype.unit = function () {
                        var offset = this.bb.__offset(this.bb_pos, 4);
                        return offset ? /** @type {org.apache.arrow.flatbuf.IntervalUnit} */this.bb.readInt16(this.bb_pos + offset) : org.apache.arrow.flatbuf.IntervalUnit.YEAR_MONTH;
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     */
                    Interval.startInterval = function (builder) {
                        builder.startObject(1);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @param {org.apache.arrow.flatbuf.IntervalUnit} unit
                     */
                    Interval.addUnit = function (builder, unit) {
                        builder.addFieldInt16(0, unit, org.apache.arrow.flatbuf.IntervalUnit.YEAR_MONTH);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @returns {flatbuffers.Offset}
                     */
                    Interval.endInterval = function (builder) {
                        var offset = builder.endObject();
                        return offset;
                    };
                    return Interval;
                }();
                flatbuf.Interval = Interval;
            })(flatbuf = arrow.flatbuf || (arrow.flatbuf = {}));
        })(arrow = apache.arrow || (apache.arrow = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (exports.org = org = {}));
/**
 * ----------------------------------------------------------------------
 * represents the physical layout of a buffer
 * buffers have fixed width slots of a given type
 *
 * @constructor
 */
(function (org) {
    var apache;
    (function (apache) {
        var arrow;
        (function (arrow) {
            var flatbuf;
            (function (flatbuf) {
                var VectorLayout = /** @class */function () {
                    function VectorLayout() {
                        /**
                         * @type {number}
                         */
                        this.bb_pos = 0;
                    }
                    /**
                     * @param {number} i
                     * @param {flatbuffers.ByteBuffer} bb
                     * @returns {VectorLayout}
                     */
                    VectorLayout.prototype.__init = function (i, bb) {
                        this.bb_pos = i;
                        this.bb = bb;
                        return this;
                    };
                    /**
                     * @param {flatbuffers.ByteBuffer} bb
                     * @param {VectorLayout=} obj
                     * @returns {VectorLayout}
                     */
                    VectorLayout.getRootAsVectorLayout = function (bb, obj) {
                        return (obj || new VectorLayout()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
                    };
                    /**
                     * the width of a slot in the buffer (typically 1, 8, 16, 32 or 64)
                     *
                     * @returns {number}
                     */
                    VectorLayout.prototype.bitWidth = function () {
                        var offset = this.bb.__offset(this.bb_pos, 4);
                        return offset ? this.bb.readInt16(this.bb_pos + offset) : 0;
                    };
                    /**
                     * the purpose of the vector
                     *
                     * @returns {org.apache.arrow.flatbuf.VectorType}
                     */
                    VectorLayout.prototype.type = function () {
                        var offset = this.bb.__offset(this.bb_pos, 6);
                        return offset ? /** @type {org.apache.arrow.flatbuf.VectorType} */this.bb.readInt16(this.bb_pos + offset) : org.apache.arrow.flatbuf.VectorType.OFFSET;
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     */
                    VectorLayout.startVectorLayout = function (builder) {
                        builder.startObject(2);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @param {number} bitWidth
                     */
                    VectorLayout.addBitWidth = function (builder, bitWidth) {
                        builder.addFieldInt16(0, bitWidth, 0);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @param {org.apache.arrow.flatbuf.VectorType} type
                     */
                    VectorLayout.addType = function (builder, type) {
                        builder.addFieldInt16(1, type, org.apache.arrow.flatbuf.VectorType.OFFSET);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @returns {flatbuffers.Offset}
                     */
                    VectorLayout.endVectorLayout = function (builder) {
                        var offset = builder.endObject();
                        return offset;
                    };
                    return VectorLayout;
                }();
                flatbuf.VectorLayout = VectorLayout;
            })(flatbuf = arrow.flatbuf || (arrow.flatbuf = {}));
        })(arrow = apache.arrow || (apache.arrow = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (exports.org = org = {}));
/**
 * ----------------------------------------------------------------------
 * user defined key value pairs to add custom metadata to arrow
 * key namespacing is the responsibility of the user
 *
 * @constructor
 */
(function (org) {
    var apache;
    (function (apache) {
        var arrow;
        (function (arrow) {
            var flatbuf;
            (function (flatbuf) {
                var KeyValue = /** @class */function () {
                    function KeyValue() {
                        /**
                         * @type {number}
                         */
                        this.bb_pos = 0;
                    }
                    /**
                     * @param {number} i
                     * @param {flatbuffers.ByteBuffer} bb
                     * @returns {KeyValue}
                     */
                    KeyValue.prototype.__init = function (i, bb) {
                        this.bb_pos = i;
                        this.bb = bb;
                        return this;
                    };
                    /**
                     * @param {flatbuffers.ByteBuffer} bb
                     * @param {KeyValue=} obj
                     * @returns {KeyValue}
                     */
                    KeyValue.getRootAsKeyValue = function (bb, obj) {
                        return (obj || new KeyValue()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
                    };
                    KeyValue.prototype.key = function (optionalEncoding) {
                        var offset = this.bb.__offset(this.bb_pos, 4);
                        return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
                    };
                    KeyValue.prototype.value = function (optionalEncoding) {
                        var offset = this.bb.__offset(this.bb_pos, 6);
                        return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     */
                    KeyValue.startKeyValue = function (builder) {
                        builder.startObject(2);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @param {flatbuffers.Offset} keyOffset
                     */
                    KeyValue.addKey = function (builder, keyOffset) {
                        builder.addFieldOffset(0, keyOffset, 0);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @param {flatbuffers.Offset} valueOffset
                     */
                    KeyValue.addValue = function (builder, valueOffset) {
                        builder.addFieldOffset(1, valueOffset, 0);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @returns {flatbuffers.Offset}
                     */
                    KeyValue.endKeyValue = function (builder) {
                        var offset = builder.endObject();
                        return offset;
                    };
                    return KeyValue;
                }();
                flatbuf.KeyValue = KeyValue;
            })(flatbuf = arrow.flatbuf || (arrow.flatbuf = {}));
        })(arrow = apache.arrow || (apache.arrow = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (exports.org = org = {}));
/**
 * ----------------------------------------------------------------------
 * Dictionary encoding metadata
 *
 * @constructor
 */
(function (org) {
    var apache;
    (function (apache) {
        var arrow;
        (function (arrow) {
            var flatbuf;
            (function (flatbuf) {
                var DictionaryEncoding = /** @class */function () {
                    function DictionaryEncoding() {
                        /**
                         * @type {number}
                         */
                        this.bb_pos = 0;
                    }
                    /**
                     * @param {number} i
                     * @param {flatbuffers.ByteBuffer} bb
                     * @returns {DictionaryEncoding}
                     */
                    DictionaryEncoding.prototype.__init = function (i, bb) {
                        this.bb_pos = i;
                        this.bb = bb;
                        return this;
                    };
                    /**
                     * @param {flatbuffers.ByteBuffer} bb
                     * @param {DictionaryEncoding=} obj
                     * @returns {DictionaryEncoding}
                     */
                    DictionaryEncoding.getRootAsDictionaryEncoding = function (bb, obj) {
                        return (obj || new DictionaryEncoding()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
                    };
                    /**
                     * The known dictionary id in the application where this data is used. In
                     * the file or streaming formats, the dictionary ids are found in the
                     * DictionaryBatch messages
                     *
                     * @returns {flatbuffers.Long}
                     */
                    DictionaryEncoding.prototype.id = function () {
                        var offset = this.bb.__offset(this.bb_pos, 4);
                        return offset ? this.bb.readInt64(this.bb_pos + offset) : this.bb.createLong(0, 0);
                    };
                    /**
                     * The dictionary indices are constrained to be positive integers. If this
                     * field is null, the indices must be signed int32
                     *
                     * @param {org.apache.arrow.flatbuf.Int=} obj
                     * @returns {org.apache.arrow.flatbuf.Int|null}
                     */
                    DictionaryEncoding.prototype.indexType = function (obj) {
                        var offset = this.bb.__offset(this.bb_pos, 6);
                        return offset ? (obj || new org.apache.arrow.flatbuf.Int()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
                    };
                    /**
                     * By default, dictionaries are not ordered, or the order does not have
                     * semantic meaning. In some statistical, applications, dictionary-encoding
                     * is used to represent ordered categorical data, and we provide a way to
                     * preserve that metadata here
                     *
                     * @returns {boolean}
                     */
                    DictionaryEncoding.prototype.isOrdered = function () {
                        var offset = this.bb.__offset(this.bb_pos, 8);
                        return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     */
                    DictionaryEncoding.startDictionaryEncoding = function (builder) {
                        builder.startObject(3);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @param {flatbuffers.Long} id
                     */
                    DictionaryEncoding.addId = function (builder, id) {
                        builder.addFieldInt64(0, id, builder.createLong(0, 0));
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @param {flatbuffers.Offset} indexTypeOffset
                     */
                    DictionaryEncoding.addIndexType = function (builder, indexTypeOffset) {
                        builder.addFieldOffset(1, indexTypeOffset, 0);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @param {boolean} isOrdered
                     */
                    DictionaryEncoding.addIsOrdered = function (builder, isOrdered) {
                        builder.addFieldInt8(2, +isOrdered, +false);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @returns {flatbuffers.Offset}
                     */
                    DictionaryEncoding.endDictionaryEncoding = function (builder) {
                        var offset = builder.endObject();
                        return offset;
                    };
                    return DictionaryEncoding;
                }();
                flatbuf.DictionaryEncoding = DictionaryEncoding;
            })(flatbuf = arrow.flatbuf || (arrow.flatbuf = {}));
        })(arrow = apache.arrow || (apache.arrow = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (exports.org = org = {}));
/**
 * ----------------------------------------------------------------------
 * A field represents a named column in a record / row batch or child of a
 * nested type.
 *
 * - children is only for nested Arrow arrays
 * - For primitive types, children will have length 0
 * - nullable should default to true in general
 *
 * @constructor
 */
(function (org) {
    var apache;
    (function (apache) {
        var arrow;
        (function (arrow) {
            var flatbuf;
            (function (flatbuf) {
                var Field = /** @class */function () {
                    function Field() {
                        /**
                         * @type {number}
                         */
                        this.bb_pos = 0;
                    }
                    /**
                     * @param {number} i
                     * @param {flatbuffers.ByteBuffer} bb
                     * @returns {Field}
                     */
                    Field.prototype.__init = function (i, bb) {
                        this.bb_pos = i;
                        this.bb = bb;
                        return this;
                    };
                    /**
                     * @param {flatbuffers.ByteBuffer} bb
                     * @param {Field=} obj
                     * @returns {Field}
                     */
                    Field.getRootAsField = function (bb, obj) {
                        return (obj || new Field()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
                    };
                    Field.prototype.name = function (optionalEncoding) {
                        var offset = this.bb.__offset(this.bb_pos, 4);
                        return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
                    };
                    /**
                     * @returns {boolean}
                     */
                    Field.prototype.nullable = function () {
                        var offset = this.bb.__offset(this.bb_pos, 6);
                        return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
                    };
                    /**
                     * @returns {org.apache.arrow.flatbuf.Type}
                     */
                    Field.prototype.typeType = function () {
                        var offset = this.bb.__offset(this.bb_pos, 8);
                        return offset ? /** @type {org.apache.arrow.flatbuf.Type} */this.bb.readUint8(this.bb_pos + offset) : org.apache.arrow.flatbuf.Type.NONE;
                    };
                    /**
                     * @param {flatbuffers.Table} obj
                     * @returns {?flatbuffers.Table}
                     */
                    Field.prototype.type = function (obj) {
                        var offset = this.bb.__offset(this.bb_pos, 10);
                        return offset ? this.bb.__union(obj, this.bb_pos + offset) : null;
                    };
                    /**
                     * @param {org.apache.arrow.flatbuf.DictionaryEncoding=} obj
                     * @returns {org.apache.arrow.flatbuf.DictionaryEncoding|null}
                     */
                    Field.prototype.dictionary = function (obj) {
                        var offset = this.bb.__offset(this.bb_pos, 12);
                        return offset ? (obj || new org.apache.arrow.flatbuf.DictionaryEncoding()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
                    };
                    /**
                     * @param {number} index
                     * @param {org.apache.arrow.flatbuf.Field=} obj
                     * @returns {org.apache.arrow.flatbuf.Field}
                     */
                    Field.prototype.children = function (index, obj) {
                        var offset = this.bb.__offset(this.bb_pos, 14);
                        return offset ? (obj || new org.apache.arrow.flatbuf.Field()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
                    };
                    /**
                     * @returns {number}
                     */
                    Field.prototype.childrenLength = function () {
                        var offset = this.bb.__offset(this.bb_pos, 14);
                        return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
                    };
                    /**
                     * layout of buffers produced for this type (as derived from the Type)
                     * does not include children
                     * each recordbatch will return instances of those Buffers.
                     *
                     * @param {number} index
                     * @param {org.apache.arrow.flatbuf.VectorLayout=} obj
                     * @returns {org.apache.arrow.flatbuf.VectorLayout}
                     */
                    Field.prototype.layout = function (index, obj) {
                        var offset = this.bb.__offset(this.bb_pos, 16);
                        return offset ? (obj || new org.apache.arrow.flatbuf.VectorLayout()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
                    };
                    /**
                     * @returns {number}
                     */
                    Field.prototype.layoutLength = function () {
                        var offset = this.bb.__offset(this.bb_pos, 16);
                        return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
                    };
                    /**
                     * @param {number} index
                     * @param {org.apache.arrow.flatbuf.KeyValue=} obj
                     * @returns {org.apache.arrow.flatbuf.KeyValue}
                     */
                    Field.prototype.customMetadata = function (index, obj) {
                        var offset = this.bb.__offset(this.bb_pos, 18);
                        return offset ? (obj || new org.apache.arrow.flatbuf.KeyValue()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
                    };
                    /**
                     * @returns {number}
                     */
                    Field.prototype.customMetadataLength = function () {
                        var offset = this.bb.__offset(this.bb_pos, 18);
                        return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     */
                    Field.startField = function (builder) {
                        builder.startObject(8);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @param {flatbuffers.Offset} nameOffset
                     */
                    Field.addName = function (builder, nameOffset) {
                        builder.addFieldOffset(0, nameOffset, 0);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @param {boolean} nullable
                     */
                    Field.addNullable = function (builder, nullable) {
                        builder.addFieldInt8(1, +nullable, +false);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @param {org.apache.arrow.flatbuf.Type} typeType
                     */
                    Field.addTypeType = function (builder, typeType) {
                        builder.addFieldInt8(2, typeType, org.apache.arrow.flatbuf.Type.NONE);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @param {flatbuffers.Offset} typeOffset
                     */
                    Field.addType = function (builder, typeOffset) {
                        builder.addFieldOffset(3, typeOffset, 0);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @param {flatbuffers.Offset} dictionaryOffset
                     */
                    Field.addDictionary = function (builder, dictionaryOffset) {
                        builder.addFieldOffset(4, dictionaryOffset, 0);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @param {flatbuffers.Offset} childrenOffset
                     */
                    Field.addChildren = function (builder, childrenOffset) {
                        builder.addFieldOffset(5, childrenOffset, 0);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @param {Array.<flatbuffers.Offset>} data
                     * @returns {flatbuffers.Offset}
                     */
                    Field.createChildrenVector = function (builder, data) {
                        builder.startVector(4, data.length, 4);
                        for (var i = data.length - 1; i >= 0; i--) {
                            builder.addOffset(data[i]);
                        }
                        return builder.endVector();
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @param {number} numElems
                     */
                    Field.startChildrenVector = function (builder, numElems) {
                        builder.startVector(4, numElems, 4);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @param {flatbuffers.Offset} layoutOffset
                     */
                    Field.addLayout = function (builder, layoutOffset) {
                        builder.addFieldOffset(6, layoutOffset, 0);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @param {Array.<flatbuffers.Offset>} data
                     * @returns {flatbuffers.Offset}
                     */
                    Field.createLayoutVector = function (builder, data) {
                        builder.startVector(4, data.length, 4);
                        for (var i = data.length - 1; i >= 0; i--) {
                            builder.addOffset(data[i]);
                        }
                        return builder.endVector();
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @param {number} numElems
                     */
                    Field.startLayoutVector = function (builder, numElems) {
                        builder.startVector(4, numElems, 4);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @param {flatbuffers.Offset} customMetadataOffset
                     */
                    Field.addCustomMetadata = function (builder, customMetadataOffset) {
                        builder.addFieldOffset(7, customMetadataOffset, 0);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @param {Array.<flatbuffers.Offset>} data
                     * @returns {flatbuffers.Offset}
                     */
                    Field.createCustomMetadataVector = function (builder, data) {
                        builder.startVector(4, data.length, 4);
                        for (var i = data.length - 1; i >= 0; i--) {
                            builder.addOffset(data[i]);
                        }
                        return builder.endVector();
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @param {number} numElems
                     */
                    Field.startCustomMetadataVector = function (builder, numElems) {
                        builder.startVector(4, numElems, 4);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @returns {flatbuffers.Offset}
                     */
                    Field.endField = function (builder) {
                        var offset = builder.endObject();
                        return offset;
                    };
                    return Field;
                }();
                flatbuf.Field = Field;
            })(flatbuf = arrow.flatbuf || (arrow.flatbuf = {}));
        })(arrow = apache.arrow || (apache.arrow = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (exports.org = org = {}));
/**
 * ----------------------------------------------------------------------
 * A Buffer represents a single contiguous memory segment
 *
 * @constructor
 */
(function (org) {
    var apache;
    (function (apache) {
        var arrow;
        (function (arrow) {
            var flatbuf;
            (function (flatbuf) {
                var Buffer = /** @class */function () {
                    function Buffer() {
                        /**
                         * @type {number}
                         */
                        this.bb_pos = 0;
                    }
                    /**
                     * @param {number} i
                     * @param {flatbuffers.ByteBuffer} bb
                     * @returns {Buffer}
                     */
                    Buffer.prototype.__init = function (i, bb) {
                        this.bb_pos = i;
                        this.bb = bb;
                        return this;
                    };
                    /**
                     * The relative offset into the shared memory page where the bytes for this
                     * buffer starts
                     *
                     * @returns {flatbuffers.Long}
                     */
                    Buffer.prototype.offset = function () {
                        return this.bb.readInt64(this.bb_pos);
                    };
                    /**
                     * The absolute length (in bytes) of the memory buffer. The memory is found
                     * from offset (inclusive) to offset + length (non-inclusive).
                     *
                     * @returns {flatbuffers.Long}
                     */
                    Buffer.prototype.length = function () {
                        return this.bb.readInt64(this.bb_pos + 8);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @param {flatbuffers.Long} offset
                     * @param {flatbuffers.Long} length
                     * @returns {flatbuffers.Offset}
                     */
                    Buffer.createBuffer = function (builder, offset, length) {
                        builder.prep(8, 16);
                        builder.writeInt64(length);
                        builder.writeInt64(offset);
                        return builder.offset();
                    };
                    return Buffer;
                }();
                flatbuf.Buffer = Buffer;
            })(flatbuf = arrow.flatbuf || (arrow.flatbuf = {}));
        })(arrow = apache.arrow || (apache.arrow = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (exports.org = org = {}));
/**
 * ----------------------------------------------------------------------
 * A Schema describes the columns in a row batch
 *
 * @constructor
 */
(function (org) {
    var apache;
    (function (apache) {
        var arrow;
        (function (arrow) {
            var flatbuf;
            (function (flatbuf) {
                var Schema = /** @class */function () {
                    function Schema() {
                        /**
                         * @type {number}
                         */
                        this.bb_pos = 0;
                    }
                    /**
                     * @param {number} i
                     * @param {flatbuffers.ByteBuffer} bb
                     * @returns {Schema}
                     */
                    Schema.prototype.__init = function (i, bb) {
                        this.bb_pos = i;
                        this.bb = bb;
                        return this;
                    };
                    /**
                     * @param {flatbuffers.ByteBuffer} bb
                     * @param {Schema=} obj
                     * @returns {Schema}
                     */
                    Schema.getRootAsSchema = function (bb, obj) {
                        return (obj || new Schema()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
                    };
                    /**
                     * endianness of the buffer
                     * it is Little Endian by default
                     * if endianness doesn't match the underlying system then the vectors need to be converted
                     *
                     * @returns {org.apache.arrow.flatbuf.Endianness}
                     */
                    Schema.prototype.endianness = function () {
                        var offset = this.bb.__offset(this.bb_pos, 4);
                        return offset ? /** @type {org.apache.arrow.flatbuf.Endianness} */this.bb.readInt16(this.bb_pos + offset) : org.apache.arrow.flatbuf.Endianness.Little;
                    };
                    /**
                     * @param {number} index
                     * @param {org.apache.arrow.flatbuf.Field=} obj
                     * @returns {org.apache.arrow.flatbuf.Field}
                     */
                    Schema.prototype.fields = function (index, obj) {
                        var offset = this.bb.__offset(this.bb_pos, 6);
                        return offset ? (obj || new org.apache.arrow.flatbuf.Field()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
                    };
                    /**
                     * @returns {number}
                     */
                    Schema.prototype.fieldsLength = function () {
                        var offset = this.bb.__offset(this.bb_pos, 6);
                        return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
                    };
                    /**
                     * @param {number} index
                     * @param {org.apache.arrow.flatbuf.KeyValue=} obj
                     * @returns {org.apache.arrow.flatbuf.KeyValue}
                     */
                    Schema.prototype.customMetadata = function (index, obj) {
                        var offset = this.bb.__offset(this.bb_pos, 8);
                        return offset ? (obj || new org.apache.arrow.flatbuf.KeyValue()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
                    };
                    /**
                     * @returns {number}
                     */
                    Schema.prototype.customMetadataLength = function () {
                        var offset = this.bb.__offset(this.bb_pos, 8);
                        return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     */
                    Schema.startSchema = function (builder) {
                        builder.startObject(3);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @param {org.apache.arrow.flatbuf.Endianness} endianness
                     */
                    Schema.addEndianness = function (builder, endianness) {
                        builder.addFieldInt16(0, endianness, org.apache.arrow.flatbuf.Endianness.Little);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @param {flatbuffers.Offset} fieldsOffset
                     */
                    Schema.addFields = function (builder, fieldsOffset) {
                        builder.addFieldOffset(1, fieldsOffset, 0);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @param {Array.<flatbuffers.Offset>} data
                     * @returns {flatbuffers.Offset}
                     */
                    Schema.createFieldsVector = function (builder, data) {
                        builder.startVector(4, data.length, 4);
                        for (var i = data.length - 1; i >= 0; i--) {
                            builder.addOffset(data[i]);
                        }
                        return builder.endVector();
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @param {number} numElems
                     */
                    Schema.startFieldsVector = function (builder, numElems) {
                        builder.startVector(4, numElems, 4);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @param {flatbuffers.Offset} customMetadataOffset
                     */
                    Schema.addCustomMetadata = function (builder, customMetadataOffset) {
                        builder.addFieldOffset(2, customMetadataOffset, 0);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @param {Array.<flatbuffers.Offset>} data
                     * @returns {flatbuffers.Offset}
                     */
                    Schema.createCustomMetadataVector = function (builder, data) {
                        builder.startVector(4, data.length, 4);
                        for (var i = data.length - 1; i >= 0; i--) {
                            builder.addOffset(data[i]);
                        }
                        return builder.endVector();
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @param {number} numElems
                     */
                    Schema.startCustomMetadataVector = function (builder, numElems) {
                        builder.startVector(4, numElems, 4);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @returns {flatbuffers.Offset}
                     */
                    Schema.endSchema = function (builder) {
                        var offset = builder.endObject();
                        return offset;
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @param {flatbuffers.Offset} offset
                     */
                    Schema.finishSchemaBuffer = function (builder, offset) {
                        builder.finish(offset);
                    };
                    return Schema;
                }();
                flatbuf.Schema = Schema;
            })(flatbuf = arrow.flatbuf || (arrow.flatbuf = {}));
        })(arrow = apache.arrow || (apache.arrow = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (exports.org = org = {}));

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.align = align;
exports.padding = padding;
exports.getBool = getBool;
exports.getBit = getBit;
exports.setBool = setBool;
exports.packBools = packBools;
exports.iterateBits = iterateBits;
exports.popcnt_bit_range = popcnt_bit_range;
exports.popcnt_array = popcnt_array;
exports.popcnt_uint32 = popcnt_uint32;

var _tslib = __webpack_require__(0);

var tslib_1 = _interopRequireWildcard(_tslib);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function align(value, alignment) {
    return value + padding(value, alignment);
} // Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.
function padding(value, alignment) {
    return value % alignment === 0 ? 0 : alignment - value % alignment;
}
function getBool(_data, _index, byte, bit) {
    return (byte & 1 << bit) !== 0;
}
function getBit(_data, _index, byte, bit) {
    return (byte & 1 << bit) >> bit;
}
function setBool(bytes, index, value) {
    return value ? !!(bytes[index >> 3] |= 1 << index % 8) || true : !(bytes[index >> 3] &= ~(1 << index % 8)) && false;
}
function packBools(values) {
    var n = 0,
        i = 0;
    var xs = [];
    var bit = 0,
        byte = 0;
    try {
        for (var values_1 = tslib_1.__values(values), values_1_1 = values_1.next(); !values_1_1.done; values_1_1 = values_1.next()) {
            var value = values_1_1.value;
            value && (byte |= 1 << bit);
            if (++bit === 8) {
                xs[i++] = byte;
                byte = bit = 0;
            }
        }
    } catch (e_1_1) {
        e_1 = { error: e_1_1 };
    } finally {
        try {
            if (values_1_1 && !values_1_1.done && (_a = values_1.return)) _a.call(values_1);
        } finally {
            if (e_1) throw e_1.error;
        }
    }
    if (i === 0 || bit > 0) {
        xs[i++] = byte;
    }
    if (i % 8 && (n = i + 8 - i % 8)) {
        do {
            xs[i] = 0;
        } while (++i < n);
    }
    return new Uint8Array(xs);
    var e_1, _a;
}
function iterateBits(bytes, begin, length, context, get) {
    var bit, byteIndex, index, remaining, byte;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                bit = begin % 8;
                byteIndex = begin >> 3;
                index = 0, remaining = length;
                _a.label = 1;
            case 1:
                if (!(remaining > 0)) return [3 /*break*/, 6];
                byte = bytes[byteIndex++];
                _a.label = 2;
            case 2:
                return [4 /*yield*/, get(context, index++, byte, bit)];
            case 3:
                _a.sent();
                _a.label = 4;
            case 4:
                if (--remaining > 0 && ++bit < 8) return [3 /*break*/, 2];
                _a.label = 5;
            case 5:
                bit = 0;
                return [3 /*break*/, 1];
            case 6:
                return [2 /*return*/];
        }
    });
}
/**
 * Compute the population count (the number of bits set to 1) for a range of bits in a Uint8Array.
 * @param vector The Uint8Array of bits for which to compute the population count.
 * @param lhs The range's left-hand side (or start) bit
 * @param rhs The range's right-hand side (or end) bit
 */
function popcnt_bit_range(data, lhs, rhs) {
    if (rhs - lhs <= 0) {
        return 0;
    }
    // If the bit range is less than one byte, sum the 1 bits in the bit range
    if (rhs - lhs < 8) {
        var sum = 0;
        try {
            for (var _a = tslib_1.__values(iterateBits(data, lhs, rhs - lhs, data, getBit)), _b = _a.next(); !_b.done; _b = _a.next()) {
                var bit = _b.value;
                sum += bit;
            }
        } catch (e_2_1) {
            e_2 = { error: e_2_1 };
        } finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            } finally {
                if (e_2) throw e_2.error;
            }
        }
        return sum;
    }
    // Get the next lowest multiple of 8 from the right hand side
    var rhsInside = rhs >> 3 << 3;
    // Get the next highest multiple of 8 from the left hand side
    var lhsInside = lhs + (lhs % 8 === 0 ? 0 : 8 - lhs % 8);
    return (
        // Get the popcnt of bits between the left hand side, and the next highest multiple of 8
        popcnt_bit_range(data, lhs, lhsInside) +
        // Get the popcnt of bits between the right hand side, and the next lowest multiple of 8
        popcnt_bit_range(data, rhsInside, rhs) +
        // Get the popcnt of all bits between the left and right hand sides' multiples of 8
        popcnt_array(data, lhsInside >> 3, rhsInside - lhsInside >> 3)
    );
    var e_2, _c;
}
function popcnt_array(arr, byteOffset, byteLength) {
    var cnt = 0,
        pos = byteOffset | 0;
    var view = new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
    var len = byteLength === void 0 ? arr.byteLength : pos + byteLength;
    while (len - pos >= 4) {
        cnt += popcnt_uint32(view.getUint32(pos));
        pos += 4;
    }
    while (len - pos >= 2) {
        cnt += popcnt_uint32(view.getUint16(pos));
        pos += 2;
    }
    while (len - pos >= 1) {
        cnt += popcnt_uint32(view.getUint8(pos));
        pos += 1;
    }
    return cnt;
}
function popcnt_uint32(uint32) {
    var i = uint32 | 0;
    i = i - (i >>> 1 & 0x55555555);
    i = (i & 0x33333333) + (i >>> 2 & 0x33333333);
    return (i + (i >>> 4) & 0x0F0F0F0F) * 0x01010101 >>> 24;
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FieldMetadata = exports.BufferMetadata = exports.DictionaryBatch = exports.RecordBatchMetadata = exports.Message = exports.FileBlock = exports.Footer = undefined;

var _tslib = __webpack_require__(0);

var tslib_1 = _interopRequireWildcard(_tslib);

var _bit = __webpack_require__(6);

var _type = __webpack_require__(1);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/* tslint:disable:class-name */
var Footer = /** @class */function () {
    function Footer(dictionaryBatches, recordBatches, schema) {
        this.dictionaryBatches = dictionaryBatches;
        this.recordBatches = recordBatches;
        this.schema = schema;
    }
    return Footer;
}(); // Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.
exports.Footer = Footer;

var FileBlock = /** @class */function () {
    function FileBlock(metaDataLength, bodyLength, offset) {
        this.metaDataLength = metaDataLength;
        this.bodyLength = bodyLength;
        this.offset = offset;
    }
    return FileBlock;
}();
exports.FileBlock = FileBlock;

var Message = /** @class */function () {
    function Message(version, bodyLength, headerType) {
        this.version = version;
        this.headerType = headerType;
        this.bodyLength = typeof bodyLength === 'number' ? bodyLength : bodyLength.low;
    }
    Message.isSchema = function (m) {
        return m.headerType === _type.MessageHeader.Schema;
    };
    Message.isRecordBatch = function (m) {
        return m.headerType === _type.MessageHeader.RecordBatch;
    };
    Message.isDictionaryBatch = function (m) {
        return m.headerType === _type.MessageHeader.DictionaryBatch;
    };
    return Message;
}();
exports.Message = Message;

var RecordBatchMetadata = /** @class */function (_super) {
    tslib_1.__extends(RecordBatchMetadata, _super);
    function RecordBatchMetadata(version, length, nodes, buffers) {
        var _this = _super.call(this, version, buffers.reduce(function (s, b) {
            return (0, _bit.align)(s + b.length + (b.offset - s), 8);
        }, 0), _type.MessageHeader.RecordBatch) || this;
        _this.nodes = nodes;
        _this.buffers = buffers;
        _this.length = typeof length === 'number' ? length : length.low;
        return _this;
    }
    return RecordBatchMetadata;
}(Message);
exports.RecordBatchMetadata = RecordBatchMetadata;

var DictionaryBatch = /** @class */function (_super) {
    tslib_1.__extends(DictionaryBatch, _super);
    function DictionaryBatch(version, data, id, isDelta) {
        if (isDelta === void 0) {
            isDelta = false;
        }
        var _this = _super.call(this, version, data.bodyLength, _type.MessageHeader.DictionaryBatch) || this;
        _this.isDelta = isDelta;
        _this.data = data;
        _this.id = typeof id === 'number' ? id : id.low;
        return _this;
    }
    DictionaryBatch.getId = function () {
        return DictionaryBatch.atomicDictionaryId++;
    };
    Object.defineProperty(DictionaryBatch.prototype, "nodes", {
        get: function get() {
            return this.data.nodes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DictionaryBatch.prototype, "buffers", {
        get: function get() {
            return this.data.buffers;
        },
        enumerable: true,
        configurable: true
    });
    DictionaryBatch.atomicDictionaryId = 0;
    return DictionaryBatch;
}(Message);
exports.DictionaryBatch = DictionaryBatch;

var BufferMetadata = /** @class */function () {
    function BufferMetadata(offset, length) {
        this.offset = typeof offset === 'number' ? offset : offset.low;
        this.length = typeof length === 'number' ? length : length.low;
    }
    return BufferMetadata;
}();
exports.BufferMetadata = BufferMetadata;

var FieldMetadata = /** @class */function () {
    function FieldMetadata(length, nullCount) {
        this.length = typeof length === 'number' ? length : length.low;
        this.nullCount = typeof nullCount === 'number' ? nullCount : nullCount.low;
    }
    return FieldMetadata;
}();
exports.FieldMetadata = FieldMetadata;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.VectorVisitor = exports.TypeVisitor = undefined;

var _type = __webpack_require__(1);

var TypeVisitor = /** @class */function () {
    function TypeVisitor() {}
    TypeVisitor.prototype.visit = function (type) {
        return type.acceptTypeVisitor && type.acceptTypeVisitor(this) || null;
    };
    TypeVisitor.prototype.visitMany = function (types) {
        var _this = this;
        return types.map(function (type) {
            return _this.visit(type);
        });
    };
    TypeVisitor.visitTypeInline = function (visitor, type) {
        switch (type.TType) {
            case _type.Type.Null:
                return visitor.visitNull && visitor.visitNull(type);
            case _type.Type.Int:
                return visitor.visitInt && visitor.visitInt(type);
            case _type.Type.Float:
                return visitor.visitFloat && visitor.visitFloat(type);
            case _type.Type.Binary:
                return visitor.visitBinary && visitor.visitBinary(type);
            case _type.Type.Utf8:
                return visitor.visitUtf8 && visitor.visitUtf8(type);
            case _type.Type.Bool:
                return visitor.visitBool && visitor.visitBool(type);
            case _type.Type.Decimal:
                return visitor.visitDecimal && visitor.visitDecimal(type);
            case _type.Type.Date:
                return visitor.visitDate && visitor.visitDate(type);
            case _type.Type.Time:
                return visitor.visitTime && visitor.visitTime(type);
            case _type.Type.Timestamp:
                return visitor.visitTimestamp && visitor.visitTimestamp(type);
            case _type.Type.Interval:
                return visitor.visitInterval && visitor.visitInterval(type);
            case _type.Type.List:
                return visitor.visitList && visitor.visitList(type);
            case _type.Type.Struct:
                return visitor.visitStruct && visitor.visitStruct(type);
            case _type.Type.Union:
                return visitor.visitUnion && visitor.visitUnion(type);
            case _type.Type.FixedSizeBinary:
                return visitor.visitFixedSizeBinary && visitor.visitFixedSizeBinary(type);
            case _type.Type.FixedSizeList:
                return visitor.visitFixedSizeList && visitor.visitFixedSizeList(type);
            case _type.Type.Map:
                return visitor.visitMap && visitor.visitMap(type);
            case _type.Type.Dictionary:
                return visitor.visitDictionary && visitor.visitDictionary(type);
            default:
                return null;
        }
    };
    return TypeVisitor;
}(); // Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.
exports.TypeVisitor = TypeVisitor;

var VectorVisitor = /** @class */function () {
    function VectorVisitor() {}
    VectorVisitor.prototype.visit = function (vector) {
        return vector.acceptVectorVisitor && vector.acceptVectorVisitor(this) || null;
    };
    VectorVisitor.prototype.visitMany = function (vectors) {
        var _this = this;
        return vectors.map(function (vector) {
            return _this.visit(vector);
        });
    };
    VectorVisitor.visitTypeInline = function (visitor, type, vector) {
        switch (type.TType) {
            case _type.Type.Null:
                return visitor.visitNull && visitor.visitNull(vector);
            case _type.Type.Int:
                return visitor.visitInt && visitor.visitInt(vector);
            case _type.Type.Float:
                return visitor.visitFloat && visitor.visitFloat(vector);
            case _type.Type.Binary:
                return visitor.visitBinary && visitor.visitBinary(vector);
            case _type.Type.Utf8:
                return visitor.visitUtf8 && visitor.visitUtf8(vector);
            case _type.Type.Bool:
                return visitor.visitBool && visitor.visitBool(vector);
            case _type.Type.Decimal:
                return visitor.visitDecimal && visitor.visitDecimal(vector);
            case _type.Type.Date:
                return visitor.visitDate && visitor.visitDate(vector);
            case _type.Type.Time:
                return visitor.visitTime && visitor.visitTime(vector);
            case _type.Type.Timestamp:
                return visitor.visitTimestamp && visitor.visitTimestamp(vector);
            case _type.Type.Interval:
                return visitor.visitInterval && visitor.visitInterval(vector);
            case _type.Type.List:
                return visitor.visitList && visitor.visitList(vector);
            case _type.Type.Struct:
                return visitor.visitStruct && visitor.visitStruct(vector);
            case _type.Type.Union:
                return visitor.visitUnion && visitor.visitUnion(vector);
            case _type.Type.FixedSizeBinary:
                return visitor.visitFixedSizeBinary && visitor.visitFixedSizeBinary(vector);
            case _type.Type.FixedSizeList:
                return visitor.visitFixedSizeList && visitor.visitFixedSizeList(vector);
            case _type.Type.Map:
                return visitor.visitMap && visitor.visitMap(vector);
            case _type.Type.Dictionary:
                return visitor.visitDictionary && visitor.visitDictionary(vector);
            default:
                return null;
        }
    };
    return VectorVisitor;
}();
exports.VectorVisitor = VectorVisitor;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ChunkedData = exports.DenseUnionData = exports.SparseUnionData = exports.UnionData = exports.ListData = exports.SingleNestedData = exports.NestedData = exports.DictionaryData = exports.FlatListData = exports.BoolData = exports.FlatData = exports.BaseData = exports.kUnknownNullCount = undefined;
exports.toTypedArray = toTypedArray;

var _tslib = __webpack_require__(0);

var tslib_1 = _interopRequireWildcard(_tslib);

var _bit = __webpack_require__(6);

var _type = __webpack_require__(1);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function toTypedArray(ArrayType, values) {
    if (!ArrayType && ArrayBuffer.isView(values)) {
        return values;
    }
    return values instanceof ArrayType ? values : !values || !ArrayBuffer.isView(values) ? ArrayType.from(values || []) : new ArrayType(values.buffer, values.byteOffset, values.byteLength / ArrayType.BYTES_PER_ELEMENT);
} // Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.
var kUnknownNullCount = exports.kUnknownNullCount = -1;
var BaseData = /** @class */function () {
    function BaseData(type, length, offset, nullCount) {
        this.type = type;
        this.length = Math.floor(Math.max(length || 0, 0));
        this.offset = Math.floor(Math.max(offset || 0, 0));
        this._nullCount = Math.floor(Math.max(nullCount || 0, -1));
    }
    Object.defineProperty(BaseData.prototype, "typeId", {
        get: function get() {
            return this.type.TType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseData.prototype, "nullBitmap", {
        get: function get() {
            return this[_type.VectorType.VALIDITY];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseData.prototype, "nullCount", {
        get: function get() {
            var nullCount = this._nullCount;
            var nullBitmap;
            if (nullCount === -1 && (nullBitmap = this[_type.VectorType.VALIDITY])) {
                this._nullCount = nullCount = this.length - (0, _bit.popcnt_bit_range)(nullBitmap, this.offset, this.offset + this.length);
            }
            return nullCount;
        },
        enumerable: true,
        configurable: true
    });
    BaseData.prototype.clone = function (type, length, offset, nullCount) {
        if (length === void 0) {
            length = this.length;
        }
        if (offset === void 0) {
            offset = this.offset;
        }
        if (nullCount === void 0) {
            nullCount = this._nullCount;
        }
        return new BaseData(type, length, offset, nullCount);
    };
    BaseData.prototype.slice = function (offset, length) {
        return length <= 0 ? this : this.sliceInternal(this.clone(this.type, length, this.offset + offset, +(this._nullCount === 0) - 1), offset, length);
    };
    BaseData.prototype.sliceInternal = function (clone, offset, length) {
        var arr;
        // If typeIds exist, slice the typeIds buffer
        (arr = this[_type.VectorType.TYPE]) && (clone[_type.VectorType.TYPE] = this.sliceData(arr, offset, length));
        // If offsets exist, only slice the offsets buffer
        (arr = this[_type.VectorType.OFFSET]) && (clone[_type.VectorType.OFFSET] = this.sliceOffsets(arr, offset, length)) ||
        // Otherwise if no offsets, slice the data buffer
        (arr = this[_type.VectorType.DATA]) && (clone[_type.VectorType.DATA] = this.sliceData(arr, offset, length));
        return clone;
    };
    BaseData.prototype.sliceData = function (data, offset, length) {
        return data.subarray(offset, offset + length);
    };
    BaseData.prototype.sliceOffsets = function (valueOffsets, offset, length) {
        return valueOffsets.subarray(offset, offset + length + 1);
    };
    return BaseData;
}();
exports.BaseData = BaseData;

var FlatData = /** @class */function (_super) {
    tslib_1.__extends(FlatData, _super);
    function FlatData(type, length, nullBitmap, data, offset, nullCount) {
        var _this = _super.call(this, type, length, offset, nullCount) || this;
        _this[_type.VectorType.DATA] = toTypedArray(_this.ArrayType, data);
        _this[_type.VectorType.VALIDITY] = toTypedArray(Uint8Array, nullBitmap);
        return _this;
    }
    Object.defineProperty(FlatData.prototype, "values", {
        get: function get() {
            return this[_type.VectorType.DATA];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlatData.prototype, "ArrayType", {
        get: function get() {
            return this.type.ArrayType;
        },
        enumerable: true,
        configurable: true
    });
    FlatData.prototype.clone = function (type, length, offset, nullCount) {
        if (length === void 0) {
            length = this.length;
        }
        if (offset === void 0) {
            offset = this.offset;
        }
        if (nullCount === void 0) {
            nullCount = this._nullCount;
        }
        return new this.constructor(type, length, this[_type.VectorType.VALIDITY], this[_type.VectorType.DATA], offset, nullCount);
    };
    return FlatData;
}(BaseData);
exports.FlatData = FlatData;

var BoolData = /** @class */function (_super) {
    tslib_1.__extends(BoolData, _super);
    function BoolData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BoolData.prototype.sliceData = function (data) {
        return data;
    };
    return BoolData;
}(FlatData);
exports.BoolData = BoolData;

var FlatListData = /** @class */function (_super) {
    tslib_1.__extends(FlatListData, _super);
    function FlatListData(type, length, nullBitmap, valueOffsets, data, offset, nullCount) {
        var _this = _super.call(this, type, length, nullBitmap, data, offset, nullCount) || this;
        _this[_type.VectorType.OFFSET] = toTypedArray(Int32Array, valueOffsets);
        return _this;
    }
    Object.defineProperty(FlatListData.prototype, "values", {
        get: function get() {
            return this[_type.VectorType.DATA];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlatListData.prototype, "valueOffsets", {
        get: function get() {
            return this[_type.VectorType.OFFSET];
        },
        enumerable: true,
        configurable: true
    });
    FlatListData.prototype.clone = function (type, length, offset, nullCount) {
        if (length === void 0) {
            length = this.length;
        }
        if (offset === void 0) {
            offset = this.offset;
        }
        if (nullCount === void 0) {
            nullCount = this._nullCount;
        }
        return new FlatListData(type, length, this[_type.VectorType.VALIDITY], this[_type.VectorType.OFFSET], this[_type.VectorType.DATA], offset, nullCount);
    };
    return FlatListData;
}(FlatData);
exports.FlatListData = FlatListData;

var DictionaryData = /** @class */function (_super) {
    tslib_1.__extends(DictionaryData, _super);
    function DictionaryData(type, dictionary, indices) {
        var _this = _super.call(this, type, indices.length, indices.offset, indices._nullCount) || this;
        _this._indices = indices;
        _this._dictionary = dictionary;
        return _this;
    }
    Object.defineProperty(DictionaryData.prototype, "indices", {
        get: function get() {
            return this._indices;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DictionaryData.prototype, "dictionary", {
        get: function get() {
            return this._dictionary;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DictionaryData.prototype, "nullCount", {
        get: function get() {
            return this._indices.nullCount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DictionaryData.prototype, "nullBitmap", {
        get: function get() {
            return this._indices.nullBitmap;
        },
        enumerable: true,
        configurable: true
    });
    DictionaryData.prototype.clone = function (type, length, offset) {
        if (length === void 0) {
            length = this.length;
        }
        if (offset === void 0) {
            offset = this.offset;
        }
        var data = this._dictionary.data.clone(type.dictionary);
        return new DictionaryData(this.type, this._dictionary.clone(data), this._indices.slice(offset - this.offset, length));
    };
    DictionaryData.prototype.sliceInternal = function (clone, _offset, _length) {
        clone.length = clone._indices.length;
        clone._nullCount = clone._indices._nullCount;
        return clone;
    };
    return DictionaryData;
}(BaseData);
exports.DictionaryData = DictionaryData;

var NestedData = /** @class */function (_super) {
    tslib_1.__extends(NestedData, _super);
    function NestedData(type, length, nullBitmap, childData, offset, nullCount) {
        var _this = _super.call(this, type, length, offset, nullCount) || this;
        _this.childData = childData;
        _this[_type.VectorType.VALIDITY] = toTypedArray(Uint8Array, nullBitmap);
        return _this;
    }
    NestedData.prototype.clone = function (type, length, offset, nullCount) {
        if (length === void 0) {
            length = this.length;
        }
        if (offset === void 0) {
            offset = this.offset;
        }
        if (nullCount === void 0) {
            nullCount = this._nullCount;
        }
        return new NestedData(type, length, this[_type.VectorType.VALIDITY], this.childData, offset, nullCount);
    };
    NestedData.prototype.sliceInternal = function (clone, offset, length) {
        if (!this[_type.VectorType.OFFSET]) {
            clone.childData = this.childData.map(function (child) {
                return child.slice(offset, length);
            });
        }
        return _super.prototype.sliceInternal.call(this, clone, offset, length);
    };
    return NestedData;
}(BaseData);
exports.NestedData = NestedData;

var SingleNestedData = /** @class */function (_super) {
    tslib_1.__extends(SingleNestedData, _super);
    function SingleNestedData(type, length, nullBitmap, valueChildData, offset, nullCount) {
        var _this = _super.call(this, type, length, nullBitmap, [valueChildData], offset, nullCount) || this;
        _this._valuesData = valueChildData;
        return _this;
    }
    Object.defineProperty(SingleNestedData.prototype, "values", {
        get: function get() {
            return this._valuesData;
        },
        enumerable: true,
        configurable: true
    });
    return SingleNestedData;
}(NestedData);
exports.SingleNestedData = SingleNestedData;

var ListData = /** @class */function (_super) {
    tslib_1.__extends(ListData, _super);
    function ListData(type, length, nullBitmap, valueOffsets, valueChildData, offset, nullCount) {
        var _this = _super.call(this, type, length, nullBitmap, valueChildData, offset, nullCount) || this;
        _this[_type.VectorType.OFFSET] = toTypedArray(Int32Array, valueOffsets);
        return _this;
    }
    Object.defineProperty(ListData.prototype, "valueOffsets", {
        get: function get() {
            return this[_type.VectorType.OFFSET];
        },
        enumerable: true,
        configurable: true
    });
    ListData.prototype.clone = function (type, length, offset, nullCount) {
        if (length === void 0) {
            length = this.length;
        }
        if (offset === void 0) {
            offset = this.offset;
        }
        if (nullCount === void 0) {
            nullCount = this._nullCount;
        }
        return new ListData(type, length, this[_type.VectorType.VALIDITY], this[_type.VectorType.OFFSET], this._valuesData, offset, nullCount);
    };
    return ListData;
}(SingleNestedData);
exports.ListData = ListData;

var UnionData = /** @class */function (_super) {
    tslib_1.__extends(UnionData, _super);
    function UnionData(type, length, nullBitmap, typeIds, childData, offset, nullCount) {
        var _this = _super.call(this, type, length, nullBitmap, childData, offset, nullCount) || this;
        _this[_type.VectorType.TYPE] = toTypedArray(Int8Array, typeIds);
        return _this;
    }
    Object.defineProperty(UnionData.prototype, "typeIds", {
        get: function get() {
            return this[_type.VectorType.TYPE];
        },
        enumerable: true,
        configurable: true
    });
    UnionData.prototype.clone = function (type, length, offset, nullCount) {
        if (length === void 0) {
            length = this.length;
        }
        if (offset === void 0) {
            offset = this.offset;
        }
        if (nullCount === void 0) {
            nullCount = this._nullCount;
        }
        return new UnionData(type, length, this[_type.VectorType.VALIDITY], this[_type.VectorType.TYPE], this.childData, offset, nullCount);
    };
    return UnionData;
}(NestedData);
exports.UnionData = UnionData;

var SparseUnionData = /** @class */function (_super) {
    tslib_1.__extends(SparseUnionData, _super);
    function SparseUnionData(type, length, nullBitmap, typeIds, childData, offset, nullCount) {
        return _super.call(this, type, length, nullBitmap, typeIds, childData, offset, nullCount) || this;
    }
    SparseUnionData.prototype.clone = function (type, length, offset, nullCount) {
        if (length === void 0) {
            length = this.length;
        }
        if (offset === void 0) {
            offset = this.offset;
        }
        if (nullCount === void 0) {
            nullCount = this._nullCount;
        }
        return new SparseUnionData(type, length, this[_type.VectorType.VALIDITY], this[_type.VectorType.TYPE], this.childData, offset, nullCount);
    };
    return SparseUnionData;
}(UnionData);
exports.SparseUnionData = SparseUnionData;

var DenseUnionData = /** @class */function (_super) {
    tslib_1.__extends(DenseUnionData, _super);
    function DenseUnionData(type, length, nullBitmap, typeIds, valueOffsets, childData, offset, nullCount) {
        var _this = _super.call(this, type, length, nullBitmap, typeIds, childData, offset, nullCount) || this;
        _this[_type.VectorType.OFFSET] = toTypedArray(Int32Array, valueOffsets);
        return _this;
    }
    Object.defineProperty(DenseUnionData.prototype, "valueOffsets", {
        get: function get() {
            return this[_type.VectorType.OFFSET];
        },
        enumerable: true,
        configurable: true
    });
    DenseUnionData.prototype.clone = function (type, length, offset, nullCount) {
        if (length === void 0) {
            length = this.length;
        }
        if (offset === void 0) {
            offset = this.offset;
        }
        if (nullCount === void 0) {
            nullCount = this._nullCount;
        }
        return new DenseUnionData(type, length, this[_type.VectorType.VALIDITY], this[_type.VectorType.TYPE], this[_type.VectorType.OFFSET], this.childData, offset, nullCount);
    };
    return DenseUnionData;
}(UnionData);
exports.DenseUnionData = DenseUnionData;

var ChunkedData = /** @class */function (_super) {
    tslib_1.__extends(ChunkedData, _super);
    function ChunkedData(type, length, chunkVectors, offset, nullCount, chunkOffsets) {
        var _this = _super.call(this, type, length, offset, nullCount) || this;
        _this._chunkVectors = chunkVectors;
        _this._chunkOffsets = chunkOffsets || ChunkedData.computeOffsets(chunkVectors);
        return _this;
    }
    Object.defineProperty(ChunkedData.prototype, "chunkVectors", {
        get: function get() {
            return this._chunkVectors;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChunkedData.prototype, "chunkOffsets", {
        get: function get() {
            return this._chunkOffsets;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChunkedData.prototype, "chunkData", {
        get: function get() {
            return this._chunkData || (this._chunkData = this._chunkVectors.map(function (_a) {
                var data = _a.data;
                return data;
            }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChunkedData.prototype, "nullCount", {
        get: function get() {
            var nullCount = this._nullCount;
            if (nullCount === -1) {
                this._nullCount = nullCount = this._chunkVectors.reduce(function (x, c) {
                    return x + c.nullCount;
                }, 0);
            }
            return nullCount;
        },
        enumerable: true,
        configurable: true
    });
    ChunkedData.prototype.clone = function (type, length, offset, nullCount) {
        if (length === void 0) {
            length = this.length;
        }
        if (offset === void 0) {
            offset = this.offset;
        }
        if (nullCount === void 0) {
            nullCount = this._nullCount;
        }
        return new ChunkedData(type, length, this._chunkVectors.map(function (vec) {
            return vec.clone(vec.data.clone(type));
        }), offset, nullCount, this._chunkOffsets);
    };
    ChunkedData.prototype.sliceInternal = function (clone, offset, length) {
        var chunks = this._chunkVectors;
        var offsets = this._chunkOffsets;
        var chunkSlices = [];
        for (var childIndex = -1, numChildren = chunks.length; ++childIndex < numChildren;) {
            var child = chunks[childIndex];
            var childLength = child.length;
            var childOffset = offsets[childIndex];
            // If the child is to the right of the slice boundary, exclude
            if (childOffset >= offset + length) {
                continue;
            }
            // If the child is to the left of of the slice boundary, exclude
            if (offset >= childOffset + childLength) {
                continue;
            }
            // If the child is between both left and right boundaries, include w/o slicing
            if (childOffset >= offset && childOffset + childLength <= offset + length) {
                chunkSlices.push(child);
                continue;
            }
            // If the child overlaps one of the slice boundaries, include that slice
            var begin = Math.max(0, offset - childOffset);
            var end = begin + Math.min(childLength - begin, offset + length - childOffset);
            chunkSlices.push(child.slice(begin, end));
        }
        clone._chunkVectors = chunkSlices;
        clone._chunkOffsets = ChunkedData.computeOffsets(chunkSlices);
        return clone;
    };
    ChunkedData.computeOffsets = function (childVectors) {
        var childOffsets = new Uint32Array(childVectors.length + 1);
        for (var index = 0, length_1 = childOffsets.length, childOffset = childOffsets[0] = 0; ++index < length_1;) {
            childOffsets[index] = childOffset += childVectors[index - 1].length;
        }
        return childOffsets;
    };
    return ChunkedData;
}(BaseData);
exports.ChunkedData = ChunkedData;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_13__;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_14__;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_15__;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RecordBatch = undefined;

var _create = __webpack_require__(13);

var _create2 = _interopRequireDefault(_create);

var _tslib = __webpack_require__(0);

var tslib_1 = _interopRequireWildcard(_tslib);

var _type = __webpack_require__(1);

var _vector = __webpack_require__(4);

var _data = __webpack_require__(9);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.
var RecordBatch = /** @class */function (_super) {
    tslib_1.__extends(RecordBatch, _super);
    function RecordBatch() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = this;
        if (typeof args[1] !== 'number') {
            var data = args[1];
            _this = _super.call(this, data, args[2]) || this;
            _this.schema = args[0];
            _this.length = data.length;
        } else {
            var _a = tslib_1.__read(args, 3),
                schema = _a[0],
                numRows = _a[1],
                cols = _a[2];
            var childData = new Array(cols.length);
            for (var index = -1, length_1 = cols.length; ++index < length_1;) {
                var col = cols[index];
                childData[index] = col instanceof _vector.Vector ? col.data : col;
            }
            _this = _super.call(this, new _data.NestedData(new _type.Struct(schema.fields), numRows, null, childData)) || this;
            _this.schema = schema;
            _this.length = numRows;
        }
        _this.numCols = _this.schema.fields.length;
        return _this;
    }
    RecordBatch.from = function (vectors) {
        return new RecordBatch(_type.Schema.from(vectors), Math.max.apply(Math, tslib_1.__spread(vectors.map(function (v) {
            return v.length;
        }))), vectors);
    };
    RecordBatch.prototype.clone = function (data, view) {
        if (view === void 0) {
            view = this.view.clone(data);
        }
        return new RecordBatch(this.schema, data, view);
    };
    RecordBatch.prototype.getChildAt = function (index) {
        return index < 0 || index >= this.numCols ? null : _super.prototype.getChildAt.call(this, index);
    };
    RecordBatch.prototype.select = function () {
        var columnNames = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            columnNames[_i] = arguments[_i];
        }
        var fields = this.schema.fields;
        var namesToKeep = columnNames.reduce(function (xs, x) {
            return (xs[x] = true) && xs;
        }, (0, _create2.default)(null));
        return new RecordBatch((_a = this.schema).select.apply(_a, tslib_1.__spread(columnNames)), this.length, this.childData.filter(function (_, i) {
            return namesToKeep[fields[i].name];
        }));
        var _a;
    };
    return RecordBatch;
}(_vector.StructVector);
exports.RecordBatch = RecordBatch;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TypeDataLoader = undefined;
exports.readRecordBatches = readRecordBatches;
exports.readRecordBatchesAsync = readRecordBatchesAsync;
exports.readRecordBatch = readRecordBatch;

var _tslib = __webpack_require__(0);

var tslib_1 = _interopRequireWildcard(_tslib);

var _vector = __webpack_require__(4);

var _recordbatch = __webpack_require__(16);

var _visitor = __webpack_require__(8);

var _metadata = __webpack_require__(7);

var _data = __webpack_require__(9);

var _type = __webpack_require__(1);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function readRecordBatches(messages) {
    var messages_1, messages_1_1, _a, schema, message, loader, e_1_1, e_1, _b;
    return tslib_1.__generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 5, 6, 7]);
                messages_1 = tslib_1.__values(messages), messages_1_1 = messages_1.next();
                _c.label = 1;
            case 1:
                if (!!messages_1_1.done) return [3 /*break*/, 4];
                _a = messages_1_1.value, schema = _a.schema, message = _a.message, loader = _a.loader;
                return [5 /*yield**/, tslib_1.__values(readRecordBatch(schema, message, loader))];
            case 2:
                _c.sent();
                _c.label = 3;
            case 3:
                messages_1_1 = messages_1.next();
                return [3 /*break*/, 1];
            case 4:
                return [3 /*break*/, 7];
            case 5:
                e_1_1 = _c.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 7];
            case 6:
                try {
                    if (messages_1_1 && !messages_1_1.done && (_b = messages_1.return)) _b.call(messages_1);
                } finally {
                    if (e_1) throw e_1.error;
                }
                return [7 /*endfinally*/];
            case 7:
                return [2 /*return*/];
        }
    });
} // Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.
function readRecordBatchesAsync(messages) {
    return tslib_1.__asyncGenerator(this, arguments, function readRecordBatchesAsync_1() {
        var messages_2, messages_2_1, _a, schema, message, loader, e_2_1, e_2, _b;
        return tslib_1.__generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 8, 9, 14]);
                    messages_2 = tslib_1.__asyncValues(messages);
                    _c.label = 1;
                case 1:
                    return [4 /*yield*/, tslib_1.__await(messages_2.next())];
                case 2:
                    if (!(messages_2_1 = _c.sent(), !messages_2_1.done)) return [3 /*break*/, 7];
                    return [4 /*yield*/, tslib_1.__await(messages_2_1.value)];
                case 3:
                    _a = _c.sent(), schema = _a.schema, message = _a.message, loader = _a.loader;
                    return [5 /*yield**/, tslib_1.__values(tslib_1.__asyncDelegator(tslib_1.__asyncValues(readRecordBatch(schema, message, loader))))];
                case 4:
                    return [4 /*yield*/, tslib_1.__await.apply(void 0, [_c.sent()])];
                case 5:
                    _c.sent();
                    _c.label = 6;
                case 6:
                    return [3 /*break*/, 1];
                case 7:
                    return [3 /*break*/, 14];
                case 8:
                    e_2_1 = _c.sent();
                    e_2 = { error: e_2_1 };
                    return [3 /*break*/, 14];
                case 9:
                    _c.trys.push([9,, 12, 13]);
                    if (!(messages_2_1 && !messages_2_1.done && (_b = messages_2.return))) return [3 /*break*/, 11];
                    return [4 /*yield*/, tslib_1.__await(_b.call(messages_2))];
                case 10:
                    _c.sent();
                    _c.label = 11;
                case 11:
                    return [3 /*break*/, 13];
                case 12:
                    if (e_2) throw e_2.error;
                    return [7 /*endfinally*/];
                case 13:
                    return [7 /*endfinally*/];
                case 14:
                    return [2 /*return*/];
            }
        });
    });
}
function readRecordBatch(schema, message, loader) {
    var dictionaryId, dictionaries, dictionaryField, dictionaryDataType, dictionaryVector;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!_metadata.Message.isRecordBatch(message)) return [3 /*break*/, 2];
                return [4 /*yield*/, new _recordbatch.RecordBatch(schema, message.length, loader.visitFields(schema.fields))];
            case 1:
                _a.sent();
                return [3 /*break*/, 3];
            case 2:
                if (_metadata.Message.isDictionaryBatch(message)) {
                    dictionaryId = message.id;
                    dictionaries = loader.dictionaries;
                    dictionaryField = schema.dictionaries.get(dictionaryId);
                    dictionaryDataType = dictionaryField.type.dictionary;
                    dictionaryVector = _vector.Vector.create(loader.visit(dictionaryDataType));
                    if (message.isDelta && dictionaries.has(dictionaryId)) {
                        dictionaryVector = dictionaries.get(dictionaryId).concat(dictionaryVector);
                    }
                    dictionaries.set(dictionaryId, dictionaryVector);
                }
                _a.label = 3;
            case 3:
                return [2 /*return*/];
        }
    });
}
var TypeDataLoader = /** @class */function (_super) {
    tslib_1.__extends(TypeDataLoader, _super);
    function TypeDataLoader(nodes, buffers, dictionaries) {
        var _this = _super.call(this) || this;
        _this.nodes = nodes;
        _this.buffers = buffers;
        _this.dictionaries = dictionaries;
        return _this;
    }
    TypeDataLoader.prototype.visitFields = function (fields) {
        var _this = this;
        return fields.map(function (field) {
            return _this.visit(field.type);
        });
    };
    TypeDataLoader.prototype.visitNull = function (type) {
        return this.visitNullType(type);
    };
    TypeDataLoader.prototype.visitInt = function (type) {
        return this.visitFlatType(type);
    };
    TypeDataLoader.prototype.visitFloat = function (type) {
        return this.visitFlatType(type);
    };
    TypeDataLoader.prototype.visitBinary = function (type) {
        return this.visitFlatList(type);
    };
    TypeDataLoader.prototype.visitUtf8 = function (type) {
        return this.visitFlatList(type);
    };
    TypeDataLoader.prototype.visitBool = function (type) {
        return this.visitBoolType(type);
    };
    TypeDataLoader.prototype.visitDecimal = function (type) {
        return this.visitFlatType(type);
    };
    TypeDataLoader.prototype.visitDate = function (type) {
        return this.visitFlatType(type);
    };
    TypeDataLoader.prototype.visitTime = function (type) {
        return this.visitFlatType(type);
    };
    TypeDataLoader.prototype.visitTimestamp = function (type) {
        return this.visitFlatType(type);
    };
    TypeDataLoader.prototype.visitInterval = function (type) {
        return this.visitFlatType(type);
    };
    TypeDataLoader.prototype.visitList = function (type) {
        return this.visitListType(type);
    };
    TypeDataLoader.prototype.visitStruct = function (type) {
        return this.visitNestedType(type);
    };
    TypeDataLoader.prototype.visitUnion = function (type) {
        return this.visitUnionType(type);
    };
    TypeDataLoader.prototype.visitFixedSizeBinary = function (type) {
        return this.visitFlatType(type);
    };
    TypeDataLoader.prototype.visitFixedSizeList = function (type) {
        return this.visitFixedSizeListType(type);
    };
    TypeDataLoader.prototype.visitMap = function (type) {
        return this.visitNestedType(type);
    };
    TypeDataLoader.prototype.visitDictionary = function (type) {
        return new _data.DictionaryData(type, this.dictionaries.get(type.id), this.visit(type.indices));
    };
    TypeDataLoader.prototype.getFieldMetadata = function () {
        return this.nodes.next().value;
    };
    TypeDataLoader.prototype.getBufferMetadata = function () {
        return this.buffers.next().value;
    };
    TypeDataLoader.prototype.readNullBitmap = function (type, nullCount, buffer) {
        if (buffer === void 0) {
            buffer = this.getBufferMetadata();
        }
        return nullCount > 0 && this.readData(type, buffer) || new Uint8Array(0);
    };
    TypeDataLoader.prototype.visitNullType = function (type, _a) {
        var _b = _a === void 0 ? this.getFieldMetadata() : _a,
            length = _b.length,
            nullCount = _b.nullCount;
        return new _data.FlatData(type, length, this.readNullBitmap(type, nullCount), new Uint8Array(0), 0, nullCount);
    };
    TypeDataLoader.prototype.visitFlatType = function (type, _a) {
        var _b = _a === void 0 ? this.getFieldMetadata() : _a,
            length = _b.length,
            nullCount = _b.nullCount;
        return new _data.FlatData(type, length, this.readNullBitmap(type, nullCount), this.readData(type), 0, nullCount);
    };
    TypeDataLoader.prototype.visitBoolType = function (type, _a, data) {
        var _b = _a === void 0 ? this.getFieldMetadata() : _a,
            length = _b.length,
            nullCount = _b.nullCount;
        return new _data.BoolData(type, length, this.readNullBitmap(type, nullCount), data || this.readData(type), 0, nullCount);
    };
    TypeDataLoader.prototype.visitFlatList = function (type, _a) {
        var _b = _a === void 0 ? this.getFieldMetadata() : _a,
            length = _b.length,
            nullCount = _b.nullCount;
        return new _data.FlatListData(type, length, this.readNullBitmap(type, nullCount), this.readOffsets(type), this.readData(type), 0, nullCount);
    };
    TypeDataLoader.prototype.visitListType = function (type, _a) {
        var _b = _a === void 0 ? this.getFieldMetadata() : _a,
            length = _b.length,
            nullCount = _b.nullCount;
        return new _data.ListData(type, length, this.readNullBitmap(type, nullCount), this.readOffsets(type), this.visit(type.children[0].type), 0, nullCount);
    };
    TypeDataLoader.prototype.visitFixedSizeListType = function (type, _a) {
        var _b = _a === void 0 ? this.getFieldMetadata() : _a,
            length = _b.length,
            nullCount = _b.nullCount;
        return new _data.SingleNestedData(type, length, this.readNullBitmap(type, nullCount), this.visit(type.children[0].type), 0, nullCount);
    };
    TypeDataLoader.prototype.visitNestedType = function (type, _a) {
        var _b = _a === void 0 ? this.getFieldMetadata() : _a,
            length = _b.length,
            nullCount = _b.nullCount;
        return new _data.NestedData(type, length, this.readNullBitmap(type, nullCount), this.visitFields(type.children), 0, nullCount);
    };
    TypeDataLoader.prototype.visitUnionType = function (type, _a) {
        var _b = _a === void 0 ? this.getFieldMetadata() : _a,
            length = _b.length,
            nullCount = _b.nullCount;
        return type.mode === _type.UnionMode.Sparse ? new _data.SparseUnionData(type, length, this.readNullBitmap(type, nullCount), this.readTypeIds(type), this.visitFields(type.children), 0, nullCount) : new _data.DenseUnionData(type, length, this.readNullBitmap(type, nullCount), this.readOffsets(type), this.readTypeIds(type), this.visitFields(type.children), 0, nullCount);
    };
    return TypeDataLoader;
}(_visitor.TypeVisitor);
exports.TypeDataLoader = TypeDataLoader;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_18__;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_19__;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_20__;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_21__;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_22__;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_23__;

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_24__;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_25__;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_26__;

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_27__;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.org = undefined;

var _Schema = __webpack_require__(5);

var NS16187549871986683199 = _interopRequireWildcard(_Schema);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var org = exports.org = undefined; // automatically generated by the FlatBuffers compiler, do not modify

(function (org) {
    var apache;
    (function (apache) {
        var arrow;
        (function (arrow) {
            var flatbuf;
            (function (flatbuf) {
                flatbuf.Schema = NS16187549871986683199.org.apache.arrow.flatbuf.Schema;
            })(flatbuf = arrow.flatbuf || (arrow.flatbuf = {}));
        })(arrow = apache.arrow || (apache.arrow = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (exports.org = org = {}));
/**
 * ----------------------------------------------------------------------
 * The root Message type
 * This union enables us to easily send different message types without
 * redundant storage, and in the future we can easily add new message types.
 *
 * Arrow implementations do not need to implement all of the message types,
 * which may include experimental metadata types. For maximum compatibility,
 * it is best to send data using RecordBatch
 *
 * @enum
 */
(function (org) {
    var apache;
    (function (apache) {
        var arrow;
        (function (arrow) {
            var flatbuf;
            (function (flatbuf) {
                var MessageHeader;
                (function (MessageHeader) {
                    MessageHeader[MessageHeader["NONE"] = 0] = "NONE";
                    MessageHeader[MessageHeader["Schema"] = 1] = "Schema";
                    MessageHeader[MessageHeader["DictionaryBatch"] = 2] = "DictionaryBatch";
                    MessageHeader[MessageHeader["RecordBatch"] = 3] = "RecordBatch";
                    MessageHeader[MessageHeader["Tensor"] = 4] = "Tensor";
                })(MessageHeader = flatbuf.MessageHeader || (flatbuf.MessageHeader = {}));
            })(flatbuf = arrow.flatbuf || (arrow.flatbuf = {}));
        })(arrow = apache.arrow || (apache.arrow = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (exports.org = org = {}));
/**
 * ----------------------------------------------------------------------
 * Data structures for describing a table row batch (a collection of
 * equal-length Arrow arrays)
 * Metadata about a field at some level of a nested type tree (but not
 * its children).
 *
 * For example, a List<Int16> with values [[1, 2, 3], null, [4], [5, 6], null]
 * would have {length: 5, null_count: 2} for its List node, and {length: 6,
 * null_count: 0} for its Int16 node, as separate FieldNode structs
 *
 * @constructor
 */
(function (org) {
    var apache;
    (function (apache) {
        var arrow;
        (function (arrow) {
            var flatbuf;
            (function (flatbuf) {
                var FieldNode = /** @class */function () {
                    function FieldNode() {
                        /**
                         * @type {number}
                         */
                        this.bb_pos = 0;
                    }
                    /**
                     * @param {number} i
                     * @param {flatbuffers.ByteBuffer} bb
                     * @returns {FieldNode}
                     */
                    FieldNode.prototype.__init = function (i, bb) {
                        this.bb_pos = i;
                        this.bb = bb;
                        return this;
                    };
                    /**
                     * The number of value slots in the Arrow array at this level of a nested
                     * tree
                     *
                     * @returns {flatbuffers.Long}
                     */
                    FieldNode.prototype.length = function () {
                        return this.bb.readInt64(this.bb_pos);
                    };
                    /**
                     * The number of observed nulls. Fields with null_count == 0 may choose not
                     * to write their physical validity bitmap out as a materialized buffer,
                     * instead setting the length of the bitmap buffer to 0.
                     *
                     * @returns {flatbuffers.Long}
                     */
                    FieldNode.prototype.nullCount = function () {
                        return this.bb.readInt64(this.bb_pos + 8);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @param {flatbuffers.Long} length
                     * @param {flatbuffers.Long} null_count
                     * @returns {flatbuffers.Offset}
                     */
                    FieldNode.createFieldNode = function (builder, length, null_count) {
                        builder.prep(8, 16);
                        builder.writeInt64(null_count);
                        builder.writeInt64(length);
                        return builder.offset();
                    };
                    return FieldNode;
                }();
                flatbuf.FieldNode = FieldNode;
            })(flatbuf = arrow.flatbuf || (arrow.flatbuf = {}));
        })(arrow = apache.arrow || (apache.arrow = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (exports.org = org = {}));
/**
 * A data header describing the shared memory layout of a "record" or "row"
 * batch. Some systems call this a "row batch" internally and others a "record
 * batch".
 *
 * @constructor
 */
(function (org) {
    var apache;
    (function (apache) {
        var arrow;
        (function (arrow) {
            var flatbuf;
            (function (flatbuf) {
                var RecordBatch = /** @class */function () {
                    function RecordBatch() {
                        /**
                         * @type {number}
                         */
                        this.bb_pos = 0;
                    }
                    /**
                     * @param {number} i
                     * @param {flatbuffers.ByteBuffer} bb
                     * @returns {RecordBatch}
                     */
                    RecordBatch.prototype.__init = function (i, bb) {
                        this.bb_pos = i;
                        this.bb = bb;
                        return this;
                    };
                    /**
                     * @param {flatbuffers.ByteBuffer} bb
                     * @param {RecordBatch=} obj
                     * @returns {RecordBatch}
                     */
                    RecordBatch.getRootAsRecordBatch = function (bb, obj) {
                        return (obj || new RecordBatch()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
                    };
                    /**
                     * number of records / rows. The arrays in the batch should all have this
                     * length
                     *
                     * @returns {flatbuffers.Long}
                     */
                    RecordBatch.prototype.length = function () {
                        var offset = this.bb.__offset(this.bb_pos, 4);
                        return offset ? this.bb.readInt64(this.bb_pos + offset) : this.bb.createLong(0, 0);
                    };
                    /**
                     * Nodes correspond to the pre-ordered flattened logical schema
                     *
                     * @param {number} index
                     * @param {org.apache.arrow.flatbuf.FieldNode=} obj
                     * @returns {org.apache.arrow.flatbuf.FieldNode}
                     */
                    RecordBatch.prototype.nodes = function (index, obj) {
                        var offset = this.bb.__offset(this.bb_pos, 6);
                        return offset ? (obj || new org.apache.arrow.flatbuf.FieldNode()).__init(this.bb.__vector(this.bb_pos + offset) + index * 16, this.bb) : null;
                    };
                    /**
                     * @returns {number}
                     */
                    RecordBatch.prototype.nodesLength = function () {
                        var offset = this.bb.__offset(this.bb_pos, 6);
                        return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
                    };
                    /**
                     * Buffers correspond to the pre-ordered flattened buffer tree
                     *
                     * The number of buffers appended to this list depends on the schema. For
                     * example, most primitive arrays will have 2 buffers, 1 for the validity
                     * bitmap and 1 for the values. For struct arrays, there will only be a
                     * single buffer for the validity (nulls) bitmap
                     *
                     * @param {number} index
                     * @param {org.apache.arrow.flatbuf.Buffer=} obj
                     * @returns {org.apache.arrow.flatbuf.Buffer}
                     */
                    RecordBatch.prototype.buffers = function (index, obj) {
                        var offset = this.bb.__offset(this.bb_pos, 8);
                        return offset ? (obj || new NS16187549871986683199.org.apache.arrow.flatbuf.Buffer()).__init(this.bb.__vector(this.bb_pos + offset) + index * 16, this.bb) : null;
                    };
                    /**
                     * @returns {number}
                     */
                    RecordBatch.prototype.buffersLength = function () {
                        var offset = this.bb.__offset(this.bb_pos, 8);
                        return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     */
                    RecordBatch.startRecordBatch = function (builder) {
                        builder.startObject(3);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @param {flatbuffers.Long} length
                     */
                    RecordBatch.addLength = function (builder, length) {
                        builder.addFieldInt64(0, length, builder.createLong(0, 0));
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @param {flatbuffers.Offset} nodesOffset
                     */
                    RecordBatch.addNodes = function (builder, nodesOffset) {
                        builder.addFieldOffset(1, nodesOffset, 0);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @param {number} numElems
                     */
                    RecordBatch.startNodesVector = function (builder, numElems) {
                        builder.startVector(16, numElems, 8);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @param {flatbuffers.Offset} buffersOffset
                     */
                    RecordBatch.addBuffers = function (builder, buffersOffset) {
                        builder.addFieldOffset(2, buffersOffset, 0);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @param {number} numElems
                     */
                    RecordBatch.startBuffersVector = function (builder, numElems) {
                        builder.startVector(16, numElems, 8);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @returns {flatbuffers.Offset}
                     */
                    RecordBatch.endRecordBatch = function (builder) {
                        var offset = builder.endObject();
                        return offset;
                    };
                    return RecordBatch;
                }();
                flatbuf.RecordBatch = RecordBatch;
            })(flatbuf = arrow.flatbuf || (arrow.flatbuf = {}));
        })(arrow = apache.arrow || (apache.arrow = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (exports.org = org = {}));
/**
 * For sending dictionary encoding information. Any Field can be
 * dictionary-encoded, but in this case none of its children may be
 * dictionary-encoded.
 * There is one vector / column per dictionary, but that vector / column
 * may be spread across multiple dictionary batches by using the isDelta
 * flag
 *
 * @constructor
 */
(function (org) {
    var apache;
    (function (apache) {
        var arrow;
        (function (arrow) {
            var flatbuf;
            (function (flatbuf) {
                var DictionaryBatch = /** @class */function () {
                    function DictionaryBatch() {
                        /**
                         * @type {number}
                         */
                        this.bb_pos = 0;
                    }
                    /**
                     * @param {number} i
                     * @param {flatbuffers.ByteBuffer} bb
                     * @returns {DictionaryBatch}
                     */
                    DictionaryBatch.prototype.__init = function (i, bb) {
                        this.bb_pos = i;
                        this.bb = bb;
                        return this;
                    };
                    /**
                     * @param {flatbuffers.ByteBuffer} bb
                     * @param {DictionaryBatch=} obj
                     * @returns {DictionaryBatch}
                     */
                    DictionaryBatch.getRootAsDictionaryBatch = function (bb, obj) {
                        return (obj || new DictionaryBatch()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
                    };
                    /**
                     * @returns {flatbuffers.Long}
                     */
                    DictionaryBatch.prototype.id = function () {
                        var offset = this.bb.__offset(this.bb_pos, 4);
                        return offset ? this.bb.readInt64(this.bb_pos + offset) : this.bb.createLong(0, 0);
                    };
                    /**
                     * @param {org.apache.arrow.flatbuf.RecordBatch=} obj
                     * @returns {org.apache.arrow.flatbuf.RecordBatch|null}
                     */
                    DictionaryBatch.prototype.data = function (obj) {
                        var offset = this.bb.__offset(this.bb_pos, 6);
                        return offset ? (obj || new org.apache.arrow.flatbuf.RecordBatch()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
                    };
                    /**
                     * If isDelta is true the values in the dictionary are to be appended to a
                     * dictionary with the indicated id
                     *
                     * @returns {boolean}
                     */
                    DictionaryBatch.prototype.isDelta = function () {
                        var offset = this.bb.__offset(this.bb_pos, 8);
                        return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     */
                    DictionaryBatch.startDictionaryBatch = function (builder) {
                        builder.startObject(3);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @param {flatbuffers.Long} id
                     */
                    DictionaryBatch.addId = function (builder, id) {
                        builder.addFieldInt64(0, id, builder.createLong(0, 0));
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @param {flatbuffers.Offset} dataOffset
                     */
                    DictionaryBatch.addData = function (builder, dataOffset) {
                        builder.addFieldOffset(1, dataOffset, 0);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @param {boolean} isDelta
                     */
                    DictionaryBatch.addIsDelta = function (builder, isDelta) {
                        builder.addFieldInt8(2, +isDelta, +false);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @returns {flatbuffers.Offset}
                     */
                    DictionaryBatch.endDictionaryBatch = function (builder) {
                        var offset = builder.endObject();
                        return offset;
                    };
                    return DictionaryBatch;
                }();
                flatbuf.DictionaryBatch = DictionaryBatch;
            })(flatbuf = arrow.flatbuf || (arrow.flatbuf = {}));
        })(arrow = apache.arrow || (apache.arrow = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (exports.org = org = {}));
/**
 * @constructor
 */
(function (org) {
    var apache;
    (function (apache) {
        var arrow;
        (function (arrow) {
            var flatbuf;
            (function (flatbuf) {
                var Message = /** @class */function () {
                    function Message() {
                        /**
                         * @type {number}
                         */
                        this.bb_pos = 0;
                    }
                    /**
                     * @param {number} i
                     * @param {flatbuffers.ByteBuffer} bb
                     * @returns {Message}
                     */
                    Message.prototype.__init = function (i, bb) {
                        this.bb_pos = i;
                        this.bb = bb;
                        return this;
                    };
                    /**
                     * @param {flatbuffers.ByteBuffer} bb
                     * @param {Message=} obj
                     * @returns {Message}
                     */
                    Message.getRootAsMessage = function (bb, obj) {
                        return (obj || new Message()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
                    };
                    /**
                     * @returns {org.apache.arrow.flatbuf.MetadataVersion}
                     */
                    Message.prototype.version = function () {
                        var offset = this.bb.__offset(this.bb_pos, 4);
                        return offset ? /** @type {org.apache.arrow.flatbuf.MetadataVersion} */this.bb.readInt16(this.bb_pos + offset) : NS16187549871986683199.org.apache.arrow.flatbuf.MetadataVersion.V1;
                    };
                    /**
                     * @returns {org.apache.arrow.flatbuf.MessageHeader}
                     */
                    Message.prototype.headerType = function () {
                        var offset = this.bb.__offset(this.bb_pos, 6);
                        return offset ? /** @type {org.apache.arrow.flatbuf.MessageHeader} */this.bb.readUint8(this.bb_pos + offset) : org.apache.arrow.flatbuf.MessageHeader.NONE;
                    };
                    /**
                     * @param {flatbuffers.Table} obj
                     * @returns {?flatbuffers.Table}
                     */
                    Message.prototype.header = function (obj) {
                        var offset = this.bb.__offset(this.bb_pos, 8);
                        return offset ? this.bb.__union(obj, this.bb_pos + offset) : null;
                    };
                    /**
                     * @returns {flatbuffers.Long}
                     */
                    Message.prototype.bodyLength = function () {
                        var offset = this.bb.__offset(this.bb_pos, 10);
                        return offset ? this.bb.readInt64(this.bb_pos + offset) : this.bb.createLong(0, 0);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     */
                    Message.startMessage = function (builder) {
                        builder.startObject(4);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @param {org.apache.arrow.flatbuf.MetadataVersion} version
                     */
                    Message.addVersion = function (builder, version) {
                        builder.addFieldInt16(0, version, NS16187549871986683199.org.apache.arrow.flatbuf.MetadataVersion.V1);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @param {org.apache.arrow.flatbuf.MessageHeader} headerType
                     */
                    Message.addHeaderType = function (builder, headerType) {
                        builder.addFieldInt8(1, headerType, org.apache.arrow.flatbuf.MessageHeader.NONE);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @param {flatbuffers.Offset} headerOffset
                     */
                    Message.addHeader = function (builder, headerOffset) {
                        builder.addFieldOffset(2, headerOffset, 0);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @param {flatbuffers.Long} bodyLength
                     */
                    Message.addBodyLength = function (builder, bodyLength) {
                        builder.addFieldInt64(3, bodyLength, builder.createLong(0, 0));
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @returns {flatbuffers.Offset}
                     */
                    Message.endMessage = function (builder) {
                        var offset = builder.endObject();
                        return offset;
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @param {flatbuffers.Offset} offset
                     */
                    Message.finishMessageBuffer = function (builder, offset) {
                        builder.finish(offset);
                    };
                    return Message;
                }();
                flatbuf.Message = Message;
            })(flatbuf = arrow.flatbuf || (arrow.flatbuf = {}));
        })(arrow = apache.arrow || (apache.arrow = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (exports.org = org = {}));

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ChunkedView = undefined;

var _iterator = __webpack_require__(2);

var _iterator2 = _interopRequireDefault(_iterator);

var _tslib = __webpack_require__(0);

var tslib_1 = _interopRequireWildcard(_tslib);

var _vector = __webpack_require__(4);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.
var ChunkedView = /** @class */function () {
    function ChunkedView(data) {
        this.chunkVectors = data.chunkVectors;
        this.chunkOffsets = data.chunkOffsets;
    }
    ChunkedView.prototype.clone = function (data) {
        return new ChunkedView(data);
    };
    ChunkedView.prototype[_iterator2.default] = function () {
        var _a, _b, vector, e_1_1, e_1, _c;
        return tslib_1.__generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _d.trys.push([0, 5, 6, 7]);
                    _a = tslib_1.__values(this.chunkVectors), _b = _a.next();
                    _d.label = 1;
                case 1:
                    if (!!_b.done) return [3 /*break*/, 4];
                    vector = _b.value;
                    return [5 /*yield**/, tslib_1.__values(vector)];
                case 2:
                    _d.sent();
                    _d.label = 3;
                case 3:
                    _b = _a.next();
                    return [3 /*break*/, 1];
                case 4:
                    return [3 /*break*/, 7];
                case 5:
                    e_1_1 = _d.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 7];
                case 6:
                    try {
                        if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                    } finally {
                        if (e_1) throw e_1.error;
                    }
                    return [7 /*endfinally*/];
                case 7:
                    return [2 /*return*/];
            }
        });
    };
    ChunkedView.prototype.getChildAt = function (index) {
        return index < 0 ? null : (this._children || (this._children = []))[index] || (this._children[index] = _vector.Vector.concat.apply(_vector.Vector, tslib_1.__spread(this.chunkVectors.map(function (chunk) {
            return chunk.getChildAt(index);
        }))));
    };
    ChunkedView.prototype.isValid = function (index) {
        // binary search to find the child vector and value index offset (inlined for speed)
        var offsets = this.chunkOffsets,
            pos = 0;
        var lhs = 0,
            mid = 0,
            rhs = offsets.length - 1;
        while (index < offsets[rhs] && index >= (pos = offsets[lhs])) {
            if (lhs + 1 === rhs) {
                return this.chunkVectors[lhs].isValid(index - pos);
            }
            mid = lhs + (rhs - lhs) / 2 | 0;
            index >= offsets[mid] ? lhs = mid : rhs = mid;
        }
        return false;
    };
    ChunkedView.prototype.get = function (index) {
        // binary search to find the child vector and value index offset (inlined for speed)
        var offsets = this.chunkOffsets,
            pos = 0;
        var lhs = 0,
            mid = 0,
            rhs = offsets.length - 1;
        while (index < offsets[rhs] && index >= (pos = offsets[lhs])) {
            if (lhs + 1 === rhs) {
                return this.chunkVectors[lhs].get(index - pos);
            }
            mid = lhs + (rhs - lhs) / 2 | 0;
            index >= offsets[mid] ? lhs = mid : rhs = mid;
        }
        return null;
    };
    ChunkedView.prototype.set = function (index, value) {
        // binary search to find the child vector and value index offset (inlined for speed)
        var offsets = this.chunkOffsets,
            pos = 0;
        var lhs = 0,
            mid = 0,
            rhs = offsets.length - 1;
        while (index < offsets[rhs] && index >= (pos = offsets[lhs])) {
            if (lhs + 1 === rhs) {
                return this.chunkVectors[lhs].set(index - pos, value);
            }
            mid = lhs + (rhs - lhs) / 2 | 0;
            index >= offsets[mid] ? lhs = mid : rhs = mid;
        }
    };
    ChunkedView.prototype.toArray = function () {
        var chunks = this.chunkVectors;
        var numChunks = chunks.length;
        if (numChunks === 1) {
            return chunks[0].toArray();
        }
        var sources = new Array(numChunks);
        var sourcesLen = 0,
            ArrayType = Array;
        for (var index = -1; ++index < numChunks;) {
            var source = chunks[index].toArray();
            sourcesLen += (sources[index] = source).length;
            if (ArrayType !== source.constructor) {
                ArrayType = source.constructor;
            }
        }
        var target = new ArrayType(sourcesLen);
        var setValues = ArrayType === Array ? arraySet : typedArraySet;
        for (var index = -1, offset = 0; ++index < numChunks;) {
            offset = setValues(sources[index], target, offset);
        }
        return target;
    };
    ChunkedView.prototype.indexOf = function (search) {
        var offset = 0,
            result;
        try {
            for (var _a = tslib_1.__values(this.chunkVectors), _b = _a.next(); !_b.done; _b = _a.next()) {
                var vector = _b.value;
                result = vector.indexOf(search);
                if (result !== -1) {
                    return result + offset;
                }
                offset += vector.length;
            }
        } catch (e_2_1) {
            e_2 = { error: e_2_1 };
        } finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            } finally {
                if (e_2) throw e_2.error;
            }
        }
        return -1;
        var e_2, _c;
    };
    return ChunkedView;
}();
exports.ChunkedView = ChunkedView;

function typedArraySet(source, target, index) {
    return target.set(source, index) || index + source.length;
}
function arraySet(source, target, index) {
    var dstIdx = index - 1,
        srcIdx = -1,
        srcLen = source.length;
    while (++srcIdx < srcLen) {
        target[++dstIdx] = source[srcIdx];
    }
    return dstIdx;
}

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_30__;

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_31__;

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_32__;

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_33__;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _stringify = __webpack_require__(10);

var _stringify2 = _interopRequireDefault(_stringify);

var _getPrototypeOf = __webpack_require__(18);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(11);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(12);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(19);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(20);

var _inherits3 = _interopRequireDefault(_inherits2);

var _regenerator = __webpack_require__(21);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _toConsumableArray2 = __webpack_require__(35);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _getIterator2 = __webpack_require__(3);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _asyncToGenerator2 = __webpack_require__(22);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _promise = __webpack_require__(23);

var _promise2 = _interopRequireDefault(_promise);

var _pspSync = __webpack_require__(36);

var _pspSync2 = _interopRequireDefault(_pspSync);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var perspective = __webpack_require__(38); /******************************************************************************
                                                *
                                                * Copyright (c) 2017, the Perspective Authors.
                                                *
                                                * This file is part of the Perspective library, distributed under the terms of
                                                * the Apache License 2.0.  The full license can be found in the LICENSE file.
                                                *
                                                */

var fs = __webpack_require__(32);
var http = __webpack_require__(64);
var WebSocket = __webpack_require__(65);
var process = __webpack_require__(66);

var path = __webpack_require__(33);

var load_perspective = __webpack_require__(67).load_perspective;

// eslint-disable-next-line no-undef
var RESOLVER =  true ? require.resolve : module.require.resolve;

var LOCAL_PATH = path.join(process.cwd(), "node_modules");

var Module = load_perspective({
    wasmBinary: _pspSync2.default,
    wasmJSMethod: "native-wasm",
    ENVIRONMENT: "NODE"
});

module.exports = perspective(Module);
delete module.exports["worker"];

var CLIENT_ID_GEN = 0;

var DEFAULT_ASSETS = ["@jpmorganchase/perspective/build", "@jpmorganchase/perspective-viewer/build", "@jpmorganchase/perspective-viewer-highcharts/build", "@jpmorganchase/perspective-viewer-hypergrid/build"];

var CONTENT_TYPES = {
    ".js": "text/javascript",
    ".css": "text/css",
    ".json": "application/json",
    ".arrow": "arraybuffer",
    ".wasm": "application/wasm"
};

function read_promise(filePath) {
    return new _promise2.default(function (resolve, reject) {
        fs.readFile(filePath, function (error, content) {
            if (error && error.code !== "ENOENT") {
                reject(error);
            } else {
                resolve(content);
            }
        });
    });
}

function create_http_server(assets, host_psp) {
    return function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(request, response) {
            var url, extname, contentType, _iterator, _isArray, _i, _ref2, _rootDir, _filePath, _content, _iterator2, _isArray2, _i2, _ref3, rootDir, paths, filePath, content;

            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            response.setHeader("Access-Control-Allow-Origin", "*");
                            response.setHeader("Access-Control-Request-Method", "*");
                            response.setHeader("Access-Control-Allow-Methods", "OPTIONS,GET");
                            response.setHeader("Access-Control-Allow-Headers", "*");
                            url = request.url;

                            if (url === "/") {
                                url = "/index.html";
                            }
                            extname = path.extname(url);
                            contentType = CONTENT_TYPES[extname] || "text/html";
                            _context.prev = 8;
                            _iterator = assets, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);

                        case 10:
                            if (!_isArray) {
                                _context.next = 16;
                                break;
                            }

                            if (!(_i >= _iterator.length)) {
                                _context.next = 13;
                                break;
                            }

                            return _context.abrupt("break", 32);

                        case 13:
                            _ref2 = _iterator[_i++];
                            _context.next = 20;
                            break;

                        case 16:
                            _i = _iterator.next();

                            if (!_i.done) {
                                _context.next = 19;
                                break;
                            }

                            return _context.abrupt("break", 32);

                        case 19:
                            _ref2 = _i.value;

                        case 20:
                            _rootDir = _ref2;
                            _filePath = _rootDir + url;
                            _context.next = 24;
                            return read_promise(_filePath);

                        case 24:
                            _content = _context.sent;

                            if (!(typeof _content !== "undefined")) {
                                _context.next = 30;
                                break;
                            }

                            console.log("200 " + url);
                            response.writeHead(200, { "Content-Type": contentType });
                            response.end(_content, extname === ".arrow" ? "user-defined" : "utf-8");
                            return _context.abrupt("return");

                        case 30:
                            _context.next = 10;
                            break;

                        case 32:
                            if (!(host_psp || typeof host_psp === "undefined")) {
                                _context.next = 63;
                                break;
                            }

                            _iterator2 = DEFAULT_ASSETS, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);

                        case 34:
                            if (!_isArray2) {
                                _context.next = 40;
                                break;
                            }

                            if (!(_i2 >= _iterator2.length)) {
                                _context.next = 37;
                                break;
                            }

                            return _context.abrupt("break", 63);

                        case 37:
                            _ref3 = _iterator2[_i2++];
                            _context.next = 44;
                            break;

                        case 40:
                            _i2 = _iterator2.next();

                            if (!_i2.done) {
                                _context.next = 43;
                                break;
                            }

                            return _context.abrupt("break", 63);

                        case 43:
                            _ref3 = _i2.value;

                        case 44:
                            rootDir = _ref3;
                            _context.prev = 45;
                            paths = RESOLVER.paths(rootDir + url);

                            paths = [].concat((0, _toConsumableArray3.default)(paths), (0, _toConsumableArray3.default)(assets.map(function (x) {
                                return path.join(x, "node_modules");
                            })), [LOCAL_PATH]);
                            filePath = RESOLVER(rootDir + url, { paths: paths });
                            _context.next = 51;
                            return read_promise(filePath);

                        case 51:
                            content = _context.sent;

                            if (!(typeof content !== "undefined")) {
                                _context.next = 57;
                                break;
                            }

                            console.log("200 " + url);
                            response.writeHead(200, { "Content-Type": contentType });
                            response.end(content, extname === ".arrow" ? "user-defined" : "utf-8");
                            return _context.abrupt("return");

                        case 57:
                            _context.next = 61;
                            break;

                        case 59:
                            _context.prev = 59;
                            _context.t0 = _context["catch"](45);

                        case 61:
                            _context.next = 34;
                            break;

                        case 63:
                            console.error("404 " + url);
                            response.writeHead(404);
                            response.end("", "utf-8");
                            _context.next = 71;
                            break;

                        case 68:
                            _context.prev = 68;
                            _context.t1 = _context["catch"](8);

                            if (_context.t1.code !== "ENOENT") {
                                console.error("500 " + url);
                                response.writeHead(500);
                                response.end("", "utf-8");
                            }

                        case 71:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, this, [[8, 68], [45, 59]]);
        }));

        return function (_x, _x2) {
            return _ref.apply(this, arguments);
        };
    }();
}

/**
 * A WebSocket server instance for a remote perspective, and convenience HTTP
 * file server for easy hosting.
 */

var WebSocketHost = function (_module$exports$Host) {
    (0, _inherits3.default)(WebSocketHost, _module$exports$Host);

    function WebSocketHost(_ref4) {
        var port = _ref4.port,
            assets = _ref4.assets,
            host_psp = _ref4.host_psp;
        (0, _classCallCheck3.default)(this, WebSocketHost);

        var _this = (0, _possibleConstructorReturn3.default)(this, (WebSocketHost.__proto__ || (0, _getPrototypeOf2.default)(WebSocketHost)).call(this));

        port = port || 8080;
        assets = assets || ["./"];

        var server = http.createServer(create_http_server(assets, host_psp));

        _this.REQS = {};
        _this._wss = new WebSocket.Server({ noServer: true, perMessageDeflate: true });
        _this._wss.on("connection", function (ws) {
            ws.id = CLIENT_ID_GEN++;
            ws.on("message", function (msg) {
                msg = JSON.parse(msg);
                _this.REQS[msg.id] = ws;
                try {
                    _this.process(msg, ws.id);
                } catch (e) {
                    console.error(e);
                }
            });
            ws.on("close", function () {
                _this.clear_views(ws.id);
            });
            ws.on("error", console.error);
        });

        server.on("upgrade", function upgrade(request, socket, head) {
            console.log("200    *** websocket upgrade ***");
            this._wss.handleUpgrade(request, socket, head, function done(sock) {
                this._wss.emit("connection", sock, request);
            }.bind(this));
        }.bind(_this));

        server.listen(port);
        console.log("Listening on port " + port);
        return _this;
    }

    (0, _createClass3.default)(WebSocketHost, [{
        key: "post",
        value: function post(msg) {
            this.REQS[msg.id].send((0, _stringify2.default)(msg));
            delete this.REQS[msg.id];
        }
    }, {
        key: "open",
        value: function open(name, data, options) {
            this._tables[name] = module.exports.table(data, options);
        }
    }]);
    return WebSocketHost;
}(module.exports.Host);

module.exports.WebSocketHost = WebSocketHost;

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_35__;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (base64Data) {
  var isBrowser = typeof window !== 'undefined' && typeof window.atob === 'function'
  var binary = isBrowser ? window.atob(base64Data) : Buffer.from(base64Data, 'base64').toString('binary')
  var bytes = new Uint8Array(binary.length)

  for (var i = 0; i < binary.length; ++i) {
    bytes[i] = binary.charCodeAt(i)
  }

  return bytes.buffer
}


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _getOwnPropertyNames = __webpack_require__(24);

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

var _defineProperty2 = __webpack_require__(40);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _typeof2 = __webpack_require__(25);

var _typeof3 = _interopRequireDefault(_typeof2);

var _extends2 = __webpack_require__(41);

var _extends3 = _interopRequireDefault(_extends2);

var _parseInt = __webpack_require__(42);

var _parseInt2 = _interopRequireDefault(_parseInt);

var _promise = __webpack_require__(23);

var _promise2 = _interopRequireDefault(_promise);

var _getIterator2 = __webpack_require__(3);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _regenerator = __webpack_require__(21);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(22);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(18);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(11);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(12);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(19);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(20);

var _inherits3 = _interopRequireDefault(_inherits2);

var _keys = __webpack_require__(43);

var _keys2 = _interopRequireDefault(_keys);

var _defaults = __webpack_require__(44);

var _date_parser = __webpack_require__(45);

var _utils = __webpack_require__(47);

var _type = __webpack_require__(1);

var _table3 = __webpack_require__(48);

var _visitor = __webpack_require__(8);

var _view_formatters = __webpack_require__(62);

var _view_formatters2 = _interopRequireDefault(_view_formatters);

var _papaparse = __webpack_require__(31);

var _papaparse2 = _interopRequireDefault(_papaparse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// IE fix - chrono::steady_clock depends on performance.now() which does not exist in IE workers
/******************************************************************************
 *
 * Copyright (c) 2017, the Perspective Authors.
 *
 * This file is part of the Perspective library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */

if (global.performance === undefined) {
    global.performance = { now: Date.now };
}

if (typeof self !== "undefined" && self.performance === undefined) {
    self.performance = { now: Date.now };
}

var CHUNKED_THRESHOLD = 100000;

module.exports = function (Module) {
    var __MODULE__ = Module;

    /******************************************************************************
     *
     * Private
     *
     */

    /**
     * Infer the t_dtype of a value.
     * @private
     * @returns A t_dtype.
     */
    function infer_type(x) {
        var t = __MODULE__.t_dtype.DTYPE_FLOAT64;
        if (x === null) {
            t = null;
        } else if (typeof x === "number" && x % 1 === 0 && x < 10000 && x !== 0) {
            t = __MODULE__.t_dtype.DTYPE_INT32;
        } else if (typeof x === "number") {
            t = __MODULE__.t_dtype.DTYPE_FLOAT64;
        } else if (typeof x === "boolean") {
            t = __MODULE__.t_dtype.DTYPE_BOOL;
        } else if (x instanceof Date) {
            t = __MODULE__.t_dtype.DTYPE_TIME;
        } else if (!isNaN(Number(x)) && x !== "") {
            t = __MODULE__.t_dtype.DTYPE_FLOAT64;
        } else if (typeof x === "string" && (0, _date_parser.is_valid_date)(x)) {
            t = __MODULE__.t_dtype.DTYPE_TIME;
        } else if (typeof x === "string") {
            var lower = x.toLowerCase();
            if (lower === "true" || lower === "false") {
                t = __MODULE__.t_dtype.DTYPE_BOOL;
            } else {
                t = __MODULE__.t_dtype.DTYPE_STR;
            }
        }
        return t;
    }

    /**
     * Gets human-readable types for a column
     * @private
     * @returns {string}
     */
    function get_column_type(val) {
        if (val === 1 || val === 2) {
            return "integer";
        } else if (val === 19) {
            return "string";
        } else if (val === 10 || val === 9) {
            return "float";
        } else if (val === 11) {
            return "boolean";
        } else if (val === 12) {
            return "date";
        }
    }

    /**
     * Do any necessary data transforms on columns. Currently it does the following
     * transforms
     * 1. Date objects are converted into float millis since epoch
     * 2. Null strings are converted into null values
     *
     * @private
     * @param {string} type type of column
     * @param {array} data array of columnar data
     *
     * @returns transformed array of columnar data
     */
    function transform_data(type, data) {
        var rv = [];
        for (var x = 0; x < data.length; x++) {
            var tmp = clean_data(data[x]);

            if (type == __MODULE__.t_dtype.DTYPE_TIME && tmp !== null) {
                tmp = +data[x];
            }

            rv.push(tmp);
        }
        return rv;
    }

    /**
     * Coerce string null into value null
     * @private
     * @param {*} value
     */
    function clean_data(value) {
        if (value === null || value === "null") {
            return null;
        } else {
            return value;
        }
    }

    /**
     * Converts any supported input type into a canonical representation for
     * interfacing with perspective.
     *
     * @private
     * @param {object} data See docs
     * @returns An object with 3 properties:
     *    names - the column names.
     *    types - the column t_dtypes.
     *    cdata - an array of columnar data.
     */
    function parse_data(data, names, types) {
        // todo: refactor, treat columnar/row data as the same to marshal values + fix null handling
        var preloaded = types ? true : false;
        if (types === undefined) {
            types = [];
        } else {
            var _types = [];
            for (var t = 0; t < types.size() - 1; t++) {
                _types.push(types.get(t));
            }
            types = _types;
        }
        var cdata = [];

        var row_count = 0;

        if (Array.isArray(data)) {
            // Row oriented
            if (data.length === 0) {
                throw "Not yet implemented: instantiate empty grid without column type";
            }
            var max_check = 50;
            if (names === undefined) {
                names = (0, _keys2.default)(data[0]);
                for (var ix = 0; ix < Math.min(max_check, data.length); ix++) {
                    var next = (0, _keys2.default)(data[ix]);
                    if (names.length !== next.length) {
                        if (next.length > names.length) {
                            if (max_check === 50) console.warn("Array data has inconsistent rows");
                            console.warn("Extending from " + names.length + " to " + next.length);
                            names = next;
                            max_check *= 2;
                        }
                    }
                }
            }
            for (var n in names) {
                var name = names[n];
                var i = 0,
                    inferredType = undefined;
                if (!preloaded) {
                    while (!inferredType && i < 100 && i < data.length) {
                        if (data[i].hasOwnProperty(name)) {
                            inferredType = infer_type(data[i][name]);
                        }
                        i++;
                    }
                    inferredType = inferredType || __MODULE__.t_dtype.DTYPE_STR;
                    types.push(inferredType);
                } else {
                    inferredType = types[parseInt(n)];
                }
                if (inferredType === undefined) {
                    console.warn("Could not infer type for column " + name);
                    inferredType = __MODULE__.t_dtype.DTYPE_STR;
                }
                var col = [];
                var parser = new _date_parser.DateParser();
                for (var x = 0; x < data.length; x++) {
                    if (!(name in data[x]) || clean_data(data[x][name]) === undefined) {
                        col.push(undefined);
                        continue;
                    }
                    if (inferredType.value === __MODULE__.t_dtype.DTYPE_FLOAT64.value) {
                        var val = clean_data(data[x][name]);
                        if (val !== null) {
                            val = Number(val);
                        }
                        col.push(val);
                    } else if (inferredType.value === __MODULE__.t_dtype.DTYPE_INT32.value) {
                        var _val = clean_data(data[x][name]);
                        if (_val !== null) _val = Number(_val);
                        col.push(_val);
                        if (_val > 2147483647 || _val < -2147483648) {
                            types[n] = __MODULE__.t_dtype.DTYPE_FLOAT64;
                        }
                    } else if (inferredType.value === __MODULE__.t_dtype.DTYPE_BOOL.value) {
                        var cell = clean_data(data[x][name]);
                        if (cell === null) {
                            col.push(null);
                            continue;
                        }

                        if (typeof cell === "string") {
                            if (cell.toLowerCase() === "true") {
                                col.push(true);
                            } else {
                                col.push(false);
                            }
                        } else {
                            col.push(!!cell);
                        }
                    } else if (inferredType.value === __MODULE__.t_dtype.DTYPE_TIME.value) {
                        var _val2 = clean_data(data[x][name]);
                        if (_val2 !== null) {
                            col.push(parser.parse(_val2));
                        } else {
                            col.push(null);
                        }
                    } else {
                        var _val3 = clean_data(data[x][name]);
                        // types[types.length - 1].value === 19 ? "" : 0
                        col.push(_val3 === null ? null : "" + _val3); // TODO this is not right - might not be a string.  Need a data cleaner
                    }
                }
                cdata.push(col);
                row_count = col.length;
            }
        } else if (Array.isArray(data[(0, _keys2.default)(data)[0]])) {
            // Column oriented update. Extending schema not supported here.

            var names_in_update = (0, _keys2.default)(data);
            row_count = data[names_in_update[0]].length;
            names = names || names_in_update;

            for (var col_num = 0; col_num < names.length; col_num++) {
                var _name = names[col_num];

                // Infer column type if necessary
                if (!preloaded) {
                    var _i = 0;
                    var _inferredType = null;
                    while (_inferredType === null && _i < 100 && _i < data[_name].length) {
                        _inferredType = infer_type(data[_name][_i]);
                        _i++;
                    }
                    _inferredType = _inferredType || __MODULE__.t_dtype.DTYPE_STR;
                    types.push(_inferredType);
                }

                // Extract the data or fill with undefined if column doesn't exist (nothing in column changed)
                var transformed = void 0;
                if (data.hasOwnProperty(_name)) {
                    transformed = transform_data(types[col_num], data[_name]);
                } else {
                    transformed = new Array(row_count);
                }
                cdata.push(transformed);
            }
        } else if (typeof data[(0, _keys2.default)(data)[0]] === "string" || typeof data[(0, _keys2.default)(data)[0]] === "function") {
            //if (this.initialized) {
            //  throw "Cannot update already initialized table with schema.";
            // }
            names = [];

            // Empty type dict
            for (var _name2 in data) {
                names.push(_name2);
                if (data[_name2] === "integer") {
                    types.push(__MODULE__.t_dtype.DTYPE_INT32);
                } else if (data[_name2] === "float") {
                    types.push(__MODULE__.t_dtype.DTYPE_FLOAT64);
                } else if (data[_name2] === "string") {
                    types.push(__MODULE__.t_dtype.DTYPE_STR);
                } else if (data[_name2] === "boolean") {
                    types.push(__MODULE__.t_dtype.DTYPE_BOOL);
                } else if (data[_name2] === "date") {
                    types.push(__MODULE__.t_dtype.DTYPE_TIME);
                } else {
                    throw "Unknown type " + data[_name2];
                }
                cdata.push([]);
            }
        } else {
            throw "Unknown data type";
        }

        return {
            row_count: row_count,
            is_arrow: false,
            names: names,
            types: types,
            cdata: cdata
        };
    }

    /**
     * Converts arrow data into a canonical representation for
     * interfacing with perspective.
     *
     * @private
     * @param {object} data Array buffer
     * @returns An object with 3 properties:
     */
    function load_arrow_buffer(data) {
        // TODO Need to validate that the names/types passed in match those in the buffer
        var arrow = _table3.Table.from([new Uint8Array(data)]);
        var loader = arrow.schema.fields.reduce(function (loader, field, colIdx) {
            return loader.loadColumn(field, arrow.getColumnAt(colIdx));
        }, new ArrowColumnLoader());
        if (typeof loader.cdata[0].values === "undefined") {
            var nchunks = loader.cdata[0].data.chunkVectors.length;
            var chunks = [];

            var _loop = function _loop(x) {
                chunks.push({
                    row_count: loader.cdata[0].data.chunkVectors[x].length,
                    is_arrow: true,
                    names: loader.names,
                    types: loader.types,
                    cdata: loader.cdata.map(function (y) {
                        return y.data.chunkVectors[x];
                    })
                });
            };

            for (var x = 0; x < nchunks; x++) {
                _loop(x);
            }
            return chunks;
        } else {
            return [{
                row_count: arrow.length,
                is_arrow: true,
                names: loader.names,
                types: loader.types,
                cdata: loader.cdata
            }];
        }
    }

    /**
     *
     * @private
     */

    var ArrowColumnLoader = function (_TypeVisitor) {
        (0, _inherits3.default)(ArrowColumnLoader, _TypeVisitor);

        function ArrowColumnLoader(cdata, names, types) {
            (0, _classCallCheck3.default)(this, ArrowColumnLoader);

            var _this = (0, _possibleConstructorReturn3.default)(this, (ArrowColumnLoader.__proto__ || (0, _getPrototypeOf2.default)(ArrowColumnLoader)).call(this));

            _this.cdata = cdata || [];
            _this.names = names || [];
            _this.types = types || [];
            return _this;
        }

        (0, _createClass3.default)(ArrowColumnLoader, [{
            key: "loadColumn",
            value: function loadColumn(field /*: Arrow.type.Field*/, column /*: Arrow.Vector*/) {
                if (this.visit(field.type)) {
                    this.cdata.push(column);
                    this.names.push(field.name);
                }
                return this;
            }
            // visitNull(type/*: Arrow.type.Null*/) {}

        }, {
            key: "visitBool",
            value: function visitBool() /* type: Arrow.type.Bool */{
                this.types.push(__MODULE__.t_dtype.DTYPE_BOOL);
                return true;
            }
        }, {
            key: "visitInt",
            value: function visitInt(type /* : Arrow.type.Int */) {
                var bitWidth = type.bitWidth;
                if (bitWidth === 64) {
                    this.types.push(__MODULE__.t_dtype.DTYPE_INT64);
                } else if (bitWidth === 32) {
                    this.types.push(__MODULE__.t_dtype.DTYPE_INT32);
                } else if (bitWidth === 16) {
                    this.types.push(__MODULE__.t_dtype.DTYPE_INT16);
                } else if (bitWidth === 8) {
                    this.types.push(__MODULE__.t_dtype.DTYPE_INT8);
                }
                return true;
            }
        }, {
            key: "visitFloat",
            value: function visitFloat(type /* : Arrow.type.Float */) {
                var precision = type.precision;
                if (precision === _type.Precision.DOUBLE) {
                    this.types.push(__MODULE__.t_dtype.DTYPE_FLOAT64);
                } else if (precision === _type.Precision.SINGLE) {
                    this.types.push(__MODULE__.t_dtype.DTYPE_FLOAT32);
                }
                // todo?
                // else if (type.precision === Arrow.enum_.Precision.HALF) {
                //     this.types.push(__MODULE__.t_dtype.DTYPE_FLOAT16);
                // }
                return true;
            }
        }, {
            key: "visitUtf8",
            value: function visitUtf8() /* type: Arrow.type.Utf8 */{
                this.types.push(__MODULE__.t_dtype.DTYPE_STR);
                return true;
            }
        }, {
            key: "visitBinary",
            value: function visitBinary() /* type: Arrow.type.Binary */{
                this.types.push(__MODULE__.t_dtype.DTYPE_STR);
                return true;
            }
            // visitFixedSizeBinary(type/*: Arrow.type.FixedSizeBinary*/) {}
            // visitDate(type/*: Arrow.type.Date_*/) {}

        }, {
            key: "visitTimestamp",
            value: function visitTimestamp() /* type: Arrow.type.Timestamp */{
                this.types.push(__MODULE__.t_dtype.DTYPE_TIME);
                return true;
            }
            // visitTime(type/*: Arrow.type.Time*/) {}
            // visitDecimal(type/*: Arrow.type.Decimal*/) {}
            // visitList(type/*: Arrow.type.List*/) {}
            // visitStruct(type/*: Arrow.type.Struct*/) {}
            // visitUnion(type/*: Arrow.type.Union<any>*/) {}

        }, {
            key: "visitDictionary",
            value: function visitDictionary(type /*: Arrow.type.Dictionary */) {
                return this.visit(type.dictionary);
            }
            // visitInterval(type/*: Arrow.type.Interval*/) {}
            // visitFixedSizeList(type/*: Arrow.type.FixedSizeList*/) {}
            // visitMap(type/*: Arrow.type.Map_*/) {}

        }]);
        return ArrowColumnLoader;
    }(_visitor.TypeVisitor);

    /******************************************************************************
     *
     * View
     *
     */

    /**
     * A View object represents a specific transform (configuration or pivot,
     * filter, sort, etc) configuration on an underlying {@link table}. A View
     * receives all updates from the {@link table} from which it is derived, and
     * can be serialized to JSON or trigger a callback when it is updated.  View
     * objects are immutable, and will remain in memory and actively process
     * updates until its {@link view#delete} method is called.
     *
     * <strong>Note</strong> This constructor is not public - Views are created
     * by invoking the {@link table#view} method.
     *
     * @example
     * // Returns a new View, pivoted in the row space by the "name" column.
     * table.view({row_pivots: ["name"]});
     *
     * @class
     * @hideconstructor
     */


    function view(pool, ctx, sides, gnode, config, name, callbacks, table) {
        this.ctx = ctx;
        this.nsides = sides;
        this.gnode = gnode;
        this.config = config || {};
        this.pool = pool;
        this.callbacks = callbacks;
        this.name = name;
        this.table = table;
        (0, _utils.bindall)(this);
    }

    /**
     * Delete this {@link view} and clean up all resources associated with it.
     * View objects do not stop consuming resources or processing updates when
     * they are garbage collected - you must call this method to reclaim these.
     */
    view.prototype.delete = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var i, j, val;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        this.pool.unregister_context(this.gnode.get_id(), this.name);
                        this.ctx.delete();
                        this.table.views.splice(this.table.views.indexOf(this), 1);
                        this.table = undefined;
                        i = 0, j = 0;

                        while (i < this.callbacks.length) {
                            val = this.callbacks[i];

                            if (val.view !== this) this.callbacks[j++] = val;
                            i++;
                        }
                        this.callbacks.length = j;
                        if (this._delete_callback) {
                            this._delete_callback();
                        }

                    case 8:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    /**
     * How many pivoted sides does this view have?
     *
     * @private
     *
     * @returns {number} sides The number of sides of this `View`.
     */
    view.prototype.sides = function () {
        return this.nsides;
    };

    view.prototype._column_names = function () {
        var col_names = [];
        var aggs = this.ctx.get_column_names();
        for (var key = 0; key < this.ctx.unity_get_column_count(); key++) {
            var col_name = void 0;
            if (this.sides() === 0) {
                col_name = aggs.get(key);
                if (col_name === "psp_okey") {
                    continue;
                }
            } else {
                var name = aggs.get(key % aggs.size()).name();
                if (name === "psp_okey") {
                    continue;
                }
                var col_path = this.ctx.unity_get_column_path(key + 1);
                col_name = [];
                for (var cnix = 0; cnix < col_path.size(); cnix++) {
                    col_name.push(__MODULE__.scalar_vec_to_val(col_path, cnix));
                }
                col_name = col_name.reverse();
                col_name.push(name);
                col_name = col_name.join(_defaults.COLUMN_SEPARATOR_STRING);
                col_path.delete();
            }
            col_names.push(col_name);
        }
        aggs.delete();
        return col_names;
    };

    /**
     * The schema of this {@link view}.  A schema is an Object, the keys of which
     * are the columns of this {@link view}, and the values are their string type names.
     * If this {@link view} is aggregated, theses will be the aggregated types;
     * otherwise these types will be the same as the columns in the underlying
     * {@link table}
     *
     * @async
     *
     * @returns {Promise<Object>} A Promise of this {@link view}'s schema.
     */
    view.prototype.schema = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var schema, _types, names, types, i, new_schema, col_names, _iterator, _isArray, _i2, _ref3, col_name;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        // get type mapping
                        schema = this.gnode.get_tblschema();
                        _types = schema.types();
                        names = schema.columns();

                        schema.delete();

                        types = {};

                        for (i = 0; i < names.size(); i++) {
                            types[names.get(i)] = _types.get(i).value;
                        }
                        new_schema = {};
                        col_names = this._column_names();
                        _iterator = col_names, _isArray = Array.isArray(_iterator), _i2 = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);

                    case 9:
                        if (!_isArray) {
                            _context2.next = 15;
                            break;
                        }

                        if (!(_i2 >= _iterator.length)) {
                            _context2.next = 12;
                            break;
                        }

                        return _context2.abrupt("break", 26);

                    case 12:
                        _ref3 = _iterator[_i2++];
                        _context2.next = 19;
                        break;

                    case 15:
                        _i2 = _iterator.next();

                        if (!_i2.done) {
                            _context2.next = 18;
                            break;
                        }

                        return _context2.abrupt("break", 26);

                    case 18:
                        _ref3 = _i2.value;

                    case 19:
                        col_name = _ref3;

                        col_name = col_name.split(_defaults.COLUMN_SEPARATOR_STRING);
                        col_name = col_name[col_name.length - 1];
                        if (types[col_name] === 1 || types[col_name] === 2) {
                            new_schema[col_name] = "integer";
                        } else if (types[col_name] === 19) {
                            new_schema[col_name] = "string";
                        } else if (types[col_name] === 9 || types[col_name] === 10) {
                            new_schema[col_name] = "float";
                        } else if (types[col_name] === 11) {
                            new_schema[col_name] = "boolean";
                        } else if (types[col_name] === 12) {
                            new_schema[col_name] = "date";
                        }
                        if (this.sides() > 0 && this.config.row_pivot.length > 0) {
                            new_schema[col_name] = map_aggregate_types(col_name, new_schema[col_name], this.config.aggregate);
                        }

                    case 24:
                        _context2.next = 9;
                        break;

                    case 26:

                        _types.delete();
                        names.delete();

                        return _context2.abrupt("return", new_schema);

                    case 29:
                    case "end":
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    var map_aggregate_types = function map_aggregate_types(col_name, orig_type, aggregate) {
        var INTEGER_AGGS = ["distinct count", "distinctcount", "distinct", "count"];
        var FLOAT_AGGS = ["avg", "mean", "mean by count", "weighted_mean", "pct sum parent", "pct sum grand total"];

        for (var agg in aggregate) {
            var found_agg = aggregate[agg];
            if (found_agg.column.join(_defaults.COLUMN_SEPARATOR_STRING) === col_name) {
                if (INTEGER_AGGS.includes(found_agg.op)) {
                    return "integer";
                } else if (FLOAT_AGGS.includes(found_agg.op)) {
                    return "float";
                }
            }
        }
        return orig_type;
    };

    var to_format = function () {
        var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(options, formatter) {
            var viewport, start_row, end_row, start_col, end_col, slice, data, col_names, row, ridx, idx, cidx, col_name, _col_name, row_path, i, value, _col_name2;

            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            options = options || {};
                            viewport = this.config.viewport ? this.config.viewport : {};
                            start_row = options.start_row || (viewport.top ? viewport.top : 0);
                            end_row = options.end_row || (viewport.height ? start_row + viewport.height : this.ctx.get_row_count());
                            start_col = options.start_col || (viewport.left ? viewport.left : 0);
                            end_col = options.end_col || (viewport.width ? start_row + viewport.width : this.ctx.unity_get_column_count() + (this.sides() === 0 ? 0 : 1));
                            slice = void 0;

                            if (this.config.row_pivot[0] === "psp_okey") {
                                end_row += this.config.column_pivot.length;
                            }
                            if (this.sides() === 0) {
                                slice = __MODULE__.get_data_zero(this.ctx, start_row, end_row, start_col, end_col);
                            } else if (this.sides() === 1) {
                                slice = __MODULE__.get_data_one(this.ctx, start_row, end_row, start_col, end_col);
                            } else {
                                slice = __MODULE__.get_data_two(this.ctx, start_row, end_row, start_col, end_col);
                            }

                            data = formatter.initDataValue();
                            col_names = [[]].concat(this._column_names());
                            row = void 0;
                            ridx = -1;

                            for (idx = 0; idx < slice.length; idx++) {
                                cidx = idx % (end_col - start_col);

                                if (cidx === 0) {
                                    if (row) {
                                        formatter.addRow(data, row);
                                    }
                                    row = formatter.initRowValue();
                                    ridx++;
                                }
                                if (this.sides() === 0) {
                                    col_name = col_names[start_col + cidx + 1];

                                    formatter.setColumnValue(data, row, col_name, slice[idx]);
                                } else {
                                    if (cidx === 0) {
                                        if (this.config.row_pivot[0] !== "psp_okey") {
                                            _col_name = "__ROW_PATH__";
                                            row_path = this.ctx.unity_get_row_path(start_row + ridx);

                                            formatter.initColumnValue(data, row, _col_name);
                                            for (i = 0; i < row_path.size(); i++) {
                                                value = __MODULE__.scalar_vec_to_val(row_path, i);

                                                formatter.addColumnValue(data, row, _col_name, value);
                                            }
                                            row_path.delete();
                                        }
                                    } else {
                                        _col_name2 = col_names[start_col + cidx];

                                        formatter.setColumnValue(data, row, _col_name2, slice[idx]);
                                    }
                                }
                            }

                            if (row) {
                                formatter.addRow(data, row);
                            }
                            if (this.config.row_pivot[0] === "psp_okey") {
                                data = formatter.slice(data, this.config.column_pivot.length);
                            }

                            return _context3.abrupt("return", formatter.formatData(data, options.config));

                        case 17:
                        case "end":
                            return _context3.stop();
                    }
                }
            }, _callee3, this);
        }));

        return function to_format(_x, _x2) {
            return _ref4.apply(this, arguments);
        };
    }();

    /**
     * Serializes this view to JSON data in a column-oriented format.
     *
     * @async
     *
     * @param {Object} [options] An optional configuration object.
     * @param {number} options.start_row The starting row index from which
     * to serialize.
     * @param {number} options.end_row The ending row index from which
     * to serialize.
     * @param {number} options.start_col The starting column index from which
     * to serialize.
     * @param {number} options.end_col The ending column index from which
     * to serialize.
     *
     * @returns {Promise<Array>} A Promise resolving to An array of Objects
     * representing the rows of this {@link view}.  If this {@link view} had a
     * "row_pivots" config parameter supplied when constructed, each row Object
     * will have a "__ROW_PATH__" key, whose value specifies this row's
     * aggregated path.  If this {@link view} had a "column_pivots" config
     * parameter supplied, the keys of this object will be comma-prepended with
     * their comma-separated column paths.
     */
    view.prototype.to_columns = function () {
        var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(options) {
            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            return _context4.abrupt("return", to_format.call(this, options, _view_formatters2.default.jsonTableFormatter));

                        case 1:
                        case "end":
                            return _context4.stop();
                    }
                }
            }, _callee4, this);
        }));

        return function (_x3) {
            return _ref5.apply(this, arguments);
        };
    }();

    /**
     * Serializes this view to JSON data in a row-oriented format.
     *
     * @async
     *
     * @param {Object} [options] An optional configuration object.
     * @param {number} options.start_row The starting row index from which
     * to serialize.
     * @param {number} options.end_row The ending row index from which
     * to serialize.
     * @param {number} options.start_col The starting column index from which
     * to serialize.
     * @param {number} options.end_col The ending column index from which
     * to serialize.
     *
     * @returns {Promise<Array>} A Promise resolving to An array of Objects
     * representing the rows of this {@link view}.  If this {@link view} had a
     * "row_pivots" config parameter supplied when constructed, each row Object
     * will have a "__ROW_PATH__" key, whose value specifies this row's
     * aggregated path.  If this {@link view} had a "column_pivots" config
     * parameter supplied, the keys of this object will be comma-prepended with
     * their comma-separated column paths.
     */
    view.prototype.to_json = function () {
        var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(options) {
            return _regenerator2.default.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            return _context5.abrupt("return", to_format.call(this, options, _view_formatters2.default.jsonFormatter));

                        case 1:
                        case "end":
                            return _context5.stop();
                    }
                }
            }, _callee5, this);
        }));

        return function (_x4) {
            return _ref6.apply(this, arguments);
        };
    }();

    /**
     * Serializes this view to CSV data in a standard format.
     *
     * @async
     *
     * @param {Object} [options] An optional configuration object.
     * @param {number} options.start_row The starting row index from which
     * to serialize.
     * @param {number} options.end_row The ending row index from which
     * to serialize.
     * @param {number} options.start_col The starting column index from which
     * to serialize.
     * @param {number} options.end_col The ending column index from which
     * to serialize.
     * @param {Object} options.config A config object for the Papaparse {@link https://www.papaparse.com/docs#json-to-csv}
     * config object.
     *
     * @returns {Promise<string>} A Promise resolving to a string in CSV format
     * representing the rows of this {@link view}.  If this {@link view} had a
     * "row_pivots" config parameter supplied when constructed, each row
     * will have prepended those values specified by this row's
     * aggregated path.  If this {@link view} had a "column_pivots" config
     * parameter supplied, the keys of this object will be comma-prepended with
     * their comma-separated column paths.
     */
    view.prototype.to_csv = function () {
        var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(options) {
            return _regenerator2.default.wrap(function _callee6$(_context6) {
                while (1) {
                    switch (_context6.prev = _context6.next) {
                        case 0:
                            return _context6.abrupt("return", to_format.call(this, options, _view_formatters2.default.csvFormatter));

                        case 1:
                        case "end":
                            return _context6.stop();
                    }
                }
            }, _callee6, this);
        }));

        return function (_x5) {
            return _ref7.apply(this, arguments);
        };
    }();

    /**
     * The number of aggregated rows in this {@link view}.  This is affected by
     * the "row_pivots" configuration parameter supplied to this {@link view}'s
     * contructor.
     *
     * @async
     *
     * @returns {Promise<number>} The number of aggregated rows.
     */
    view.prototype.num_rows = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7() {
        return _regenerator2.default.wrap(function _callee7$(_context7) {
            while (1) {
                switch (_context7.prev = _context7.next) {
                    case 0:
                        return _context7.abrupt("return", this.ctx.get_row_count());

                    case 1:
                    case "end":
                        return _context7.stop();
                }
            }
        }, _callee7, this);
    }));

    /**
     * The number of aggregated columns in this {@link view}.  This is affected by
     * the "column_pivots" configuration parameter supplied to this {@link view}'s
     * contructor.
     *
     * @async
     *
     * @returns {Promise<number>} The number of aggregated columns.
     */
    view.prototype.num_columns = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8() {
        return _regenerator2.default.wrap(function _callee8$(_context8) {
            while (1) {
                switch (_context8.prev = _context8.next) {
                    case 0:
                        return _context8.abrupt("return", this.ctx.unity_get_column_count());

                    case 1:
                    case "end":
                        return _context8.stop();
                }
            }
        }, _callee8, this);
    }));

    /**
     * Whether this row at index `idx` is in an expanded or collapsed state.
     *
     * @async
     *
     * @returns {Promise<bool>} Whether this row is expanded.
     */
    view.prototype.get_row_expanded = function () {
        var _ref10 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee9(idx) {
            return _regenerator2.default.wrap(function _callee9$(_context9) {
                while (1) {
                    switch (_context9.prev = _context9.next) {
                        case 0:
                            return _context9.abrupt("return", this.ctx.unity_get_row_expanded(idx));

                        case 1:
                        case "end":
                            return _context9.stop();
                    }
                }
            }, _callee9, this);
        }));

        return function (_x6) {
            return _ref10.apply(this, arguments);
        };
    }();

    /**
     * Expands the row at index `idx`.
     *
     * @async
     *
     * @returns {Promise<void>}
     */
    view.prototype.expand = function () {
        var _ref11 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee10(idx) {
            return _regenerator2.default.wrap(function _callee10$(_context10) {
                while (1) {
                    switch (_context10.prev = _context10.next) {
                        case 0:
                            if (!(this.nsides === 2 && this.ctx.unity_get_row_depth(idx) < this.config.row_pivot.length)) {
                                _context10.next = 4;
                                break;
                            }

                            return _context10.abrupt("return", this.ctx.open(__MODULE__.t_header.HEADER_ROW, idx));

                        case 4:
                            if (!(this.nsides < 2)) {
                                _context10.next = 6;
                                break;
                            }

                            return _context10.abrupt("return", this.ctx.open(idx));

                        case 6:
                        case "end":
                            return _context10.stop();
                    }
                }
            }, _callee10, this);
        }));

        return function (_x7) {
            return _ref11.apply(this, arguments);
        };
    }();

    /**
     * Collapses the row at index `idx`.
     *
     * @async
     *
     * @returns {Promise<void>}
     */
    view.prototype.collapse = function () {
        var _ref12 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee11(idx) {
            return _regenerator2.default.wrap(function _callee11$(_context11) {
                while (1) {
                    switch (_context11.prev = _context11.next) {
                        case 0:
                            if (!(this.nsides === 2)) {
                                _context11.next = 4;
                                break;
                            }

                            return _context11.abrupt("return", this.ctx.close(__MODULE__.t_header.HEADER_ROW, idx));

                        case 4:
                            return _context11.abrupt("return", this.ctx.close(idx));

                        case 5:
                        case "end":
                            return _context11.stop();
                    }
                }
            }, _callee11, this);
        }));

        return function (_x8) {
            return _ref12.apply(this, arguments);
        };
    }();

    /**
     * Expand the tree down to `depth`.
     *
     */
    view.prototype.expand_to_depth = function () {
        var _ref13 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee12(depth) {
            return _regenerator2.default.wrap(function _callee12$(_context12) {
                while (1) {
                    switch (_context12.prev = _context12.next) {
                        case 0:
                            if (!(this.config.row_pivot.length >= depth)) {
                                _context12.next = 8;
                                break;
                            }

                            if (!(this.nsides === 2)) {
                                _context12.next = 5;
                                break;
                            }

                            return _context12.abrupt("return", this.ctx.expand_to_depth(__MODULE__.t_header.HEADER_ROW, depth));

                        case 5:
                            return _context12.abrupt("return", this.ctx.expand_to_depth(depth));

                        case 6:
                            _context12.next = 9;
                            break;

                        case 8:
                            console.warn("Cannot expand past " + this.config.row_pivot.length);

                        case 9:
                        case "end":
                            return _context12.stop();
                    }
                }
            }, _callee12, this);
        }));

        return function (_x9) {
            return _ref13.apply(this, arguments);
        };
    }();

    /**
     * Collapse the tree down to `depth`.
     *
     */
    view.prototype.collapse_to_depth = function () {
        var _ref14 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee13(depth) {
            return _regenerator2.default.wrap(function _callee13$(_context13) {
                while (1) {
                    switch (_context13.prev = _context13.next) {
                        case 0:
                            if (!(this.config.row_pivot.length >= depth)) {
                                _context13.next = 8;
                                break;
                            }

                            if (!(this.nsides === 2)) {
                                _context13.next = 5;
                                break;
                            }

                            return _context13.abrupt("return", this.ctx.collapse_to_depth(__MODULE__.t_header.HEADER_ROW, depth));

                        case 5:
                            return _context13.abrupt("return", this.ctx.collapse_to_depth(depth));

                        case 6:
                            _context13.next = 9;
                            break;

                        case 8:
                            console.warn("Cannot collapse past " + this.config.row_pivot.length);

                        case 9:
                        case "end":
                            return _context13.stop();
                    }
                }
            }, _callee13, this);
        }));

        return function (_x10) {
            return _ref14.apply(this, arguments);
        };
    }();

    /**
     * Register a callback with this {@link view}.  Whenever the {@link view}'s
     * underlying table emits an update, this callback will be invoked with the
     * aggregated row deltas.
     *
     * @param {function} callback A callback function invoked on update.  The
     * parameter to this callback shares a structure with the return type of
     * {@link view#to_json}.
     */
    view.prototype.on_update = function (_callback) {
        var _this2 = this;

        this.callbacks.push({
            view: this,
            callback: function callback() {
                if (_this2.ctx.get_step_delta) {
                    var delta = _this2.ctx.get_step_delta(0, 2147483647);
                    if (delta.cells.size() === 0) {
                        _this2.to_json().then(_callback);
                    } else {
                        var rows = {};
                        for (var x = 0; x < delta.cells.size(); x++) {
                            rows[delta.cells.get(x).row] = true;
                        }
                        rows = (0, _keys2.default)(rows);
                        _promise2.default.all(rows.map(function (row) {
                            return _this2.to_json({
                                start_row: (0, _parseInt2.default)(row),
                                end_row: (0, _parseInt2.default)(row) + 1
                            });
                        })).then(function (results) {
                            return _callback([].concat.apply([], results));
                        });
                    }
                } else {
                    _callback();
                }
            }
        });
    };

    /**
     * Register a callback with this {@link view}.  Whenever the {@link view}
     * is deleted, this callback will be invoked.
     *
     * @param {function} callback A callback function invoked on update.  The
     *     parameter to this callback shares a structure with the return type of
     *     {@link view#to_json}.
     */
    view.prototype.on_delete = function (callback) {
        this._delete_callback = callback;
    };

    /******************************************************************************
     *
     * Table
     *
     */

    /**
     * A Table object is the basic data container in Perspective.  Tables are
     * typed - they have an immutable set of column names, and a known type for
     * each.
     *
     * <strong>Note</strong> This constructor is not public - Tables are created
     * by invoking the {@link table} factory method, either on the perspective
     * module object, or an a {@link worker} instance.
     *
     * @class
     * @hideconstructor
     */
    function _table2(gnode, pool, index, computed, limit, limit_index) {
        this.gnode = gnode;
        this.pool = pool;
        this.name = Math.random() + "";
        this.initialized = false;
        this.index = index;
        this.pool.set_update_delegate(this);
        this.computed = computed || [];
        this.callbacks = [];
        this.views = [];
        this.limit = limit;
        this.limit_index = limit_index;
        (0, _utils.bindall)(this);
    }

    _table2.prototype._update_callback = function () {
        for (var e in this.callbacks) {
            this.callbacks[e].callback();
        }
    };

    _table2.prototype._calculate_computed = function (tbl, computed_defs) {
        // tbl is the pointer to the C++ t_table

        for (var i = 0; i < computed_defs.length; ++i) {
            var coldef = computed_defs[i];
            var name = coldef["column"];
            var func = coldef["func"];
            var inputs = coldef["inputs"];
            var type = coldef["type"] || "string";

            var dtype = void 0;
            switch (type) {
                case "integer":
                    dtype = __MODULE__.t_dtype.DTYPE_INT32;
                    break;
                case "float":
                    dtype = __MODULE__.t_dtype.DTYPE_FLOAT64;
                    break;
                case "boolean":
                    dtype = __MODULE__.t_dtype.DTYPE_BOOL;
                    break;
                case "date":
                    dtype = __MODULE__.t_dtype.DTYPE_TIME;
                    break;
                case "string":
                default:
                    dtype = __MODULE__.t_dtype.DTYPE_STR;
                    break;
            }

            __MODULE__.table_add_computed_column(tbl, name, dtype, func, inputs);
        }
    };

    /**
     * Delete this {@link table} and clean up all resources associated with it.
     * Table objects do not stop consuming resources or processing updates when
     * they are garbage collected - you must call this method to reclaim these.
     */
    _table2.prototype.delete = function () {
        if (this.views.length > 0) {
            throw "Table still has contexts - refusing to delete.";
        }
        this.pool.unregister_gnode(this.gnode.get_id());
        this.gnode.delete();
        this.pool.delete();
        if (this._delete_callback) {
            this._delete_callback();
        }
    };

    /**
     * Register a callback with this {@link table}.  Whenever the {@link view}
     * is deleted, this callback will be invoked.
     *
     * @param {function} callback A callback function invoked on update.  The
     *     parameter to this callback shares a structure with the return type of
     *     {@link table#to_json}.
     */
    _table2.prototype.on_delete = function (callback) {
        this._delete_callback = callback;
    };

    /**
     * The number of accumulated rows in this {@link table}.  This is affected by
     * the "index" configuration parameter supplied to this {@link view}'s
     * contructor - as rows will be overwritten when they share an idnex column.
     *
     * @async
     *
     * @returns {Promise<number>} The number of accumulated rows.
     */
    _table2.prototype.size = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee14() {
        return _regenerator2.default.wrap(function _callee14$(_context14) {
            while (1) {
                switch (_context14.prev = _context14.next) {
                    case 0:
                        return _context14.abrupt("return", this.gnode.get_table().size());

                    case 1:
                    case "end":
                        return _context14.stop();
                }
            }
        }, _callee14, this);
    }));

    _table2.prototype._schema = function () {
        var schema = this.gnode.get_tblschema();
        var columns = schema.columns();
        var types = schema.types();
        var new_schema = {};
        for (var key = 0; key < columns.size(); key++) {
            if (columns.get(key) === "psp_okey") {
                continue;
            }
            new_schema[columns.get(key)] = get_column_type(types.get(key).value);
        }
        schema.delete();
        columns.delete();
        types.delete();
        return new_schema;
    };

    /**
     * The schema of this {@link table}.  A schema is an Object whose keys are the
     * columns of this {@link table}, and whose values are their string type names.
     *
     * @async
     *
     * @returns {Promise<Object>} A Promise of this {@link table}'s schema.
     */
    _table2.prototype.schema = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee15() {
        return _regenerator2.default.wrap(function _callee15$(_context15) {
            while (1) {
                switch (_context15.prev = _context15.next) {
                    case 0:
                        return _context15.abrupt("return", this._schema());

                    case 1:
                    case "end":
                        return _context15.stop();
                }
            }
        }, _callee15, this);
    }));

    _table2.prototype._computed_schema = function () {
        var computed = this.computed;

        if (computed.length < 0) return {};

        var schema = this.gnode.get_tblschema();
        var columns = schema.columns();
        var types = schema.types();

        var computed_schema = {};

        for (var i = 0; i < computed.length; i++) {
            var column_name = computed[i].column;
            var column_type = computed[i].type;

            var column = {};

            column.type = column_type;
            column.input_columns = computed[i].inputs;
            column.input_type = computed[i].input_type;
            column.computation = computed[i].computation;

            computed_schema[column_name] = column;
        }

        schema.delete();
        columns.delete();
        types.delete();
        return computed_schema;
    };

    /**
     * The computed schema of this {@link table}. Returns a schema of only computed
     * columns added by the user, the keys of which are computed columns and the values an
     * Object containing the associated column_name, column_type, and computation.
     *
     * @async
     *
     * @returns {Promise<Object>} A Promise of this {@link table}'s computed schema.
     */
    _table2.prototype.computed_schema = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee16() {
        return _regenerator2.default.wrap(function _callee16$(_context16) {
            while (1) {
                switch (_context16.prev = _context16.next) {
                    case 0:
                        return _context16.abrupt("return", this._computed_schema());

                    case 1:
                    case "end":
                        return _context16.stop();
                }
            }
        }, _callee16, this);
    }));

    /**
     * Create a new {@link view} from this table with a specified
     * configuration.
     *
     * @param {Object} [config] The configuration object for this {@link view}.
     * @param {Array<string>} [config.row_pivot] An array of column names
     * to use as {@link https://en.wikipedia.org/wiki/Pivot_table#Row_labels Row Pivots}.
     * @param {Array<string>} [config.column_pivot] An array of column names
     * to use as {@link https://en.wikipedia.org/wiki/Pivot_table#Column_labels Column Pivots}.
     * @param {Array<Object>} [config.aggregate] An Array of Aggregate configuration objects,
     * each of which should provide an "name" and "op" property, repsresnting the string
     * aggregation type and associated column name, respectively.  Aggregates not provided
     * will use their type defaults
     * @param {Array<Array<string>>} [config.filter] An Array of Filter configurations to
     * apply.  A filter configuration is an array of 3 elements:  A column name,
     * a supported filter comparison string (e.g. '===', '>'), and a value to compare.
     * @param {Array<string>} [config.sort] An Array of column names by which to sort.
     *
     * @example
     * var view = table.view({
     *      row_pivot: ['region'],
     *      aggregate: [{op: 'dominant', column:'region'}],
     *      filter: [['client', 'contains', 'fred']],
     *      sort: ['value']
     * });
     *
     * @returns {view} A new {@link view} object for the supplied configuration,
     * bound to this table
     */
    _table2.prototype.view = function (config) {
        config = (0, _extends3.default)({}, config);

        var _string_to_filter_op = {
            "&": __MODULE__.t_filter_op.FILTER_OP_AND,
            "|": __MODULE__.t_filter_op.FILTER_OP_OR,
            "<": __MODULE__.t_filter_op.FILTER_OP_LT,
            ">": __MODULE__.t_filter_op.FILTER_OP_GT,
            "==": __MODULE__.t_filter_op.FILTER_OP_EQ,
            contains: __MODULE__.t_filter_op.FILTER_OP_CONTAINS,
            "<=": __MODULE__.t_filter_op.FILTER_OP_LTEQ,
            ">=": __MODULE__.t_filter_op.FILTER_OP_GTEQ,
            "!=": __MODULE__.t_filter_op.FILTER_OP_NE,
            "begins with": __MODULE__.t_filter_op.FILTER_OP_BEGINS_WITH,
            "ends with": __MODULE__.t_filter_op.FILTER_OP_ENDS_WITH,
            or: __MODULE__.t_filter_op.FILTER_OP_OR,
            in: __MODULE__.t_filter_op.FILTER_OP_IN,
            "not in": __MODULE__.t_filter_op.FILTER_OP_NOT_IN,
            and: __MODULE__.t_filter_op.FILTER_OP_AND,
            "is nan": __MODULE__.t_filter_op.FILTER_OP_IS_NAN,
            "is not nan": __MODULE__.t_filter_op.FILTER_OP_IS_NOT_NAN
        };

        var _string_to_aggtype = {
            "distinct count": __MODULE__.t_aggtype.AGGTYPE_DISTINCT_COUNT,
            distinctcount: __MODULE__.t_aggtype.AGGTYPE_DISTINCT_COUNT,
            distinct: __MODULE__.t_aggtype.AGGTYPE_DISTINCT_COUNT,
            sum: __MODULE__.t_aggtype.AGGTYPE_SUM,
            mul: __MODULE__.t_aggtype.AGGTYPE_MUL,
            avg: __MODULE__.t_aggtype.AGGTYPE_MEAN,
            mean: __MODULE__.t_aggtype.AGGTYPE_MEAN,
            count: __MODULE__.t_aggtype.AGGTYPE_COUNT,
            "weighted mean": __MODULE__.t_aggtype.AGGTYPE_WEIGHTED_MEAN,
            unique: __MODULE__.t_aggtype.AGGTYPE_UNIQUE,
            any: __MODULE__.t_aggtype.AGGTYPE_ANY,
            median: __MODULE__.t_aggtype.AGGTYPE_MEDIAN,
            join: __MODULE__.t_aggtype.AGGTYPE_JOIN,
            div: __MODULE__.t_aggtype.AGGTYPE_SCALED_DIV,
            add: __MODULE__.t_aggtype.AGGTYPE_SCALED_ADD,
            dominant: __MODULE__.t_aggtype.AGGTYPE_DOMINANT,
            "first by index": __MODULE__.t_aggtype.AGGTYPE_FIRST,
            "last by index": __MODULE__.t_aggtype.AGGTYPE_LAST,
            and: __MODULE__.t_aggtype.AGGTYPE_AND,
            or: __MODULE__.t_aggtype.AGGTYPE_OR,
            last: __MODULE__.t_aggtype.AGGTYPE_LAST_VALUE,
            high: __MODULE__.t_aggtype.AGGTYPE_HIGH_WATER_MARK,
            low: __MODULE__.t_aggtype.AGGTYPE_LOW_WATER_MARK,
            "sum abs": __MODULE__.t_aggtype.AGGTYPE_SUM_ABS,
            "sum not null": __MODULE__.t_aggtype.AGGTYPE_SUM_NOT_NULL,
            "mean by count": __MODULE__.t_aggtype.AGGTYPE_MEAN_BY_COUNT,
            identity: __MODULE__.t_aggtype.AGGTYPE_IDENTITY,
            "distinct leaf": __MODULE__.t_aggtype.AGGTYPE_DISTINCT_LEAF,
            "pct sum parent": __MODULE__.t_aggtype.AGGTYPE_PCT_SUM_PARENT,
            "pct sum grand total": __MODULE__.t_aggtype.AGGTYPE_PCT_SUM_GRAND_TOTAL
        };

        var name = Math.random() + "";

        config.row_pivot = config.row_pivot || [];
        config.column_pivot = config.column_pivot || [];

        // Column only mode
        if (config.row_pivot.length === 0 && config.column_pivot.length > 0) {
            config.row_pivot = ["psp_okey"];
            config.column_only = true;
        }

        // Filters
        var filters = [];
        var filter_op = __MODULE__.t_filter_op.FILTER_OP_AND;

        if (config.filter) {
            var schema = this._schema();
            filters = config.filter.map(function (filter) {
                if (schema[filter[0]] === "date") {
                    return [filter[0], _string_to_filter_op[filter[1]], +new _date_parser.DateParser().parse(filter[2])];
                } else {
                    return [filter[0], _string_to_filter_op[filter[1]], filter[2]];
                }
            });
            if (config.filter_op) {
                filter_op = _string_to_filter_op[config.filter_op];
            }
        }

        // Sort
        var sort = [];
        if (config.sort) {
            sort = config.sort.map(function (x) {
                if (!Array.isArray(x)) {
                    return [config.aggregate.map(function (agg) {
                        return agg.column;
                    }).indexOf(x), 1];
                } else {
                    return [config.aggregate.map(function (agg) {
                        return agg.column;
                    }).indexOf(x[0]), _defaults.SORT_ORDERS.indexOf(x[1])];
                }
            });
            if (config.column_pivot.length > 0 && config.row_pivot.length > 0) {
                config.sort = config.sort.filter(function (x) {
                    return config.row_pivot.indexOf(x[0]) === -1;
                });
            }
        }

        // Row Pivots
        var aggregates = [];
        if ((0, _typeof3.default)(config.aggregate) === "object") {
            for (var aidx = 0; aidx < config.aggregate.length; aidx++) {
                var agg = config.aggregate[aidx];
                var agg_op = _string_to_aggtype[agg.op];
                if (config.column_only) {
                    agg_op = __MODULE__.t_aggtype.AGGTYPE_ANY;
                    config.aggregate[aidx].op = "any";
                }
                if (typeof agg.column === "string") {
                    agg.column = [agg.column];
                } else {
                    var dep_length = agg.column.length;
                    if (agg.op === "weighted mean" && dep_length != 2 || agg.op !== "weighted mean" && dep_length != 1) {
                        throw "'" + agg.op + "' has incorrect arity ('" + dep_length + "') for column dependencies.";
                    }
                }
                aggregates.push([agg.name || agg.column.join(_defaults.COLUMN_SEPARATOR_STRING), agg_op, agg.column]);
            }
        } else {
            var _agg_op = __MODULE__.t_aggtype.AGGTYPE_DISTINCT_COUNT;
            if (config.column_only) {
                _agg_op = __MODULE__.t_aggtype.AGGTYPE_ANY;
            }
            var _schema = this.gnode.get_tblschema();
            var t_aggs = _schema.columns();
            for (var _aidx = 0; _aidx < t_aggs.size(); _aidx++) {
                var column = t_aggs.get(_aidx);
                if (column !== "psp_okey") {
                    aggregates.push([column, _agg_op, [column]]);
                }
            }
            _schema.delete();
            t_aggs.delete();
        }

        var context = void 0;
        var sides = 0;
        if (config.row_pivot.length > 0 || config.column_pivot.length > 0) {
            if (config.column_pivot && config.column_pivot.length > 0) {
                config.row_pivot = config.row_pivot || [];
                context = __MODULE__.make_context_two(this.gnode, config.row_pivot, config.column_pivot, filter_op, filters, aggregates, []);
                sides = 2;
                this.pool.register_context(this.gnode.get_id(), name, __MODULE__.t_ctx_type.TWO_SIDED_CONTEXT, context.$$.ptr);

                if (config.row_pivot_depth !== undefined) {
                    context.expand_to_depth(__MODULE__.t_header.HEADER_ROW, config.row_pivot_depth - 1);
                } else {
                    context.expand_to_depth(__MODULE__.t_header.HEADER_ROW, config.row_pivot.length);
                }

                if (config.column_pivot_depth !== undefined) {
                    context.expand_to_depth(__MODULE__.t_header.HEADER_COLUMN, config.column_pivot_depth - 1);
                } else {
                    context.expand_to_depth(__MODULE__.t_header.HEADER_COLUMN, config.column_pivot.length);
                }

                var groups = context.unity_get_column_count() / aggregates.length;
                var new_sort = [];

                for (var z = 0; z < groups; z++) {
                    for (var _iterator2 = sort, _isArray2 = Array.isArray(_iterator2), _i3 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);;) {
                        var _ref18;

                        if (_isArray2) {
                            if (_i3 >= _iterator2.length) break;
                            _ref18 = _iterator2[_i3++];
                        } else {
                            _i3 = _iterator2.next();
                            if (_i3.done) break;
                            _ref18 = _i3.value;
                        }

                        var s = _ref18;

                        new_sort.push([s[0] + z * aggregates.length, s[1]]);
                    }
                }

                if (sort.length > 0) {
                    __MODULE__.sort(context, new_sort);
                }
            } else {
                context = __MODULE__.make_context_one(this.gnode, config.row_pivot, filter_op, filters, aggregates, sort);
                sides = 1;
                this.pool.register_context(this.gnode.get_id(), name, __MODULE__.t_ctx_type.ONE_SIDED_CONTEXT, context.$$.ptr);

                if (config.row_pivot_depth !== undefined) {
                    context.expand_to_depth(config.row_pivot_depth - 1);
                } else {
                    context.expand_to_depth(config.row_pivot.length);
                }
            }
        } else {
            context = __MODULE__.make_context_zero(this.gnode, filter_op, filters, aggregates.map(function (x) {
                return x[0];
            }), sort);
            this.pool.register_context(this.gnode.get_id(), name, __MODULE__.t_ctx_type.ZERO_SIDED_CONTEXT, context.$$.ptr);
        }

        var v = new view(this.pool, context, sides, this.gnode, config, name, this.callbacks, this);
        this.views.push(v);
        return v;
    };

    /**
     * Updates the rows of a {@link table}.  Updated rows are pushed down to any
     * derived {@link view} objects.
     *
     * @param {Object<string, Array>|Array<Object>|string} data The input data
     * for this table.  The supported input types mirror the constructor options, minus
     * the ability to pass a schema (Object<string, string>) as this table has.
     * already been constructed, thus its types are set in stone.
     *
     * @see {@link table}
     */
    _table2.prototype.update = function (data) {
        var pdata = void 0;
        var cols = this._columns();
        var schema = this.gnode.get_tblschema();
        var names = schema.columns();
        var types = schema.types();

        if (data instanceof ArrayBuffer) {
            pdata = load_arrow_buffer(data, cols, types);
        } else {
            pdata = [parse_data(data, cols, types)];
        }

        for (var i = names.size() - 1; i >= 0; i--) {
            if (cols.indexOf(names.get(i)) === -1) {
                for (var _iterator3 = pdata, _isArray3 = Array.isArray(_iterator3), _i4 = 0, _iterator3 = _isArray3 ? _iterator3 : (0, _getIterator3.default)(_iterator3);;) {
                    var _ref19;

                    if (_isArray3) {
                        if (_i4 >= _iterator3.length) break;
                        _ref19 = _iterator3[_i4++];
                    } else {
                        _i4 = _iterator3.next();
                        if (_i4.done) break;
                        _ref19 = _i4.value;
                    }

                    var chunk = _ref19;

                    chunk.types.splice(i, 1);
                }
            }
        }

        var tbl = void 0;
        try {
            for (var _iterator4 = pdata, _isArray4 = Array.isArray(_iterator4), _i5 = 0, _iterator4 = _isArray4 ? _iterator4 : (0, _getIterator3.default)(_iterator4);;) {
                var _ref20;

                if (_isArray4) {
                    if (_i5 >= _iterator4.length) break;
                    _ref20 = _iterator4[_i5++];
                } else {
                    _i5 = _iterator4.next();
                    if (_i5.done) break;
                    _ref20 = _i5.value;
                }

                var _chunk = _ref20;

                tbl = __MODULE__.make_table(_chunk.row_count || 0, _chunk.names, _chunk.types, _chunk.cdata, this.limit_index, this.limit || 4294967295, this.index || "", _chunk.is_arrow, false);

                this.limit_index += _chunk.cdata[0].length;
                if (this.limit) {
                    this.limit_index = this.limit_index % this.limit;
                }

                // Add any computed columns
                this._calculate_computed(tbl, this.computed);

                __MODULE__.fill(this.pool, this.gnode, tbl);
                this.initialized = true;
            }
        } catch (e) {
            console.error(e);
        } finally {
            if (tbl) {
                tbl.delete();
            }
            schema.delete();
            names.delete();
            types.delete();
        }
    };

    /**
     * Removes the rows of a {@link table}.  Removed rows are pushed down to any
     * derived {@link view} objects.
     *
     * @param {Array<Object>} data An array of primary keys to remove.
     *
     * @see {@link table}
     */
    _table2.prototype.remove = function (data) {
        var _this3 = this;

        var pdata = void 0;
        var schema = this.gnode.get_tblschema();
        var types = schema.types();
        schema.delete();

        data = data.map(function (idx) {
            return (0, _defineProperty3.default)({}, _this3.index, idx);
        });

        if (data instanceof ArrayBuffer) {
            pdata = load_arrow_buffer(data, [this.index], types);
        } else {
            pdata = [parse_data(data, [this.index], types)];
        }

        var tbl = void 0;
        try {
            for (var _iterator5 = pdata, _isArray5 = Array.isArray(_iterator5), _i6 = 0, _iterator5 = _isArray5 ? _iterator5 : (0, _getIterator3.default)(_iterator5);;) {
                var _ref22;

                if (_isArray5) {
                    if (_i6 >= _iterator5.length) break;
                    _ref22 = _iterator5[_i6++];
                } else {
                    _i6 = _iterator5.next();
                    if (_i6.done) break;
                    _ref22 = _i6.value;
                }

                var chunk = _ref22;

                tbl = __MODULE__.make_table(chunk.row_count || 0, chunk.names, chunk.types, chunk.cdata, this.limit_index, this.limit || 4294967295, this.index || "", chunk.is_arrow, true);

                this.limit_index += chunk.cdata[0].length;
                if (this.limit) {
                    this.limit_index = this.limit_index % this.limit;
                }

                __MODULE__.fill(this.pool, this.gnode, tbl);
                this.initialized = true;
            }
        } catch (e) {
            console.error(e);
        } finally {
            if (tbl) {
                tbl.delete();
            }
            types.delete();
        }
    };

    /**
     * Create a new table with the addition of new computed columns (defined as javascript functions)
     */
    _table2.prototype.add_computed = function (computed) {
        var pool = void 0,
            gnode = void 0,
            tbl = void 0;

        try {
            // Create perspective pool
            pool = new __MODULE__.t_pool({ _update_callback: function _update_callback() {} });

            // Pull out the t_table from the current gnode
            tbl = __MODULE__.clone_gnode_table(this.gnode);

            // Add new computed columns in place to tbl
            this._calculate_computed(tbl, computed);

            gnode = __MODULE__.make_gnode(tbl);
            pool.register_gnode(gnode);
            __MODULE__.fill(pool, gnode, tbl);

            // Merge in definition of previous computed columns
            if (this.computed.length > 0) {
                computed = this.computed.concat(computed);
            }

            return new _table2(gnode, pool, this.index, computed, this.limit, this.limit_index);
        } catch (e) {
            if (pool) {
                pool.delete();
            }
            if (gnode) {
                gnode.delete();
            }
            throw e;
        } finally {
            if (tbl) {
                tbl.delete();
            }
        }
    };

    _table2.prototype._columns = function () {
        var schema = this.gnode.get_tblschema();
        var computed_schema = this._computed_schema();
        var cols = schema.columns();
        var names = [];
        for (var cidx = 0; cidx < cols.size(); cidx++) {
            var name = cols.get(cidx);
            if (name !== "psp_okey" && typeof computed_schema[name] === "undefined") {
                names.push(name);
            }
        }
        schema.delete();
        cols.delete();
        return names;
    };

    /**
     * The column names of this table.
     *
     * @async
     *
     * @returns {Array<string>} An array of column names for this table.
     */
    _table2.prototype.columns = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee17() {
        return _regenerator2.default.wrap(function _callee17$(_context17) {
            while (1) {
                switch (_context17.prev = _context17.next) {
                    case 0:
                        return _context17.abrupt("return", this._columns());

                    case 1:
                    case "end":
                        return _context17.stop();
                }
            }
        }, _callee17, this);
    }));

    _table2.prototype._column_metadata = function () {
        var schema = this.gnode.get_tblschema();
        var computed_schema = this._computed_schema();
        var cols = schema.columns();
        var types = schema.types();

        var metadata = [];
        for (var cidx = 0; cidx < cols.size(); cidx++) {
            var name = cols.get(cidx);
            var meta = {};

            if (name === "psp_okey") {
                continue;
            }

            meta.name = name;
            meta.type = get_column_type(types.get(cidx).value);

            var computed_col = computed_schema[name];

            if (computed_col !== undefined) {
                meta.computed = {
                    input_columns: computed_col.input_columns,
                    input_type: computed_col.input_type,
                    computation: computed_col.computation
                };
            } else {
                meta.computed = undefined;
            }

            metadata.push(meta);
        }

        types.delete();
        cols.delete();
        schema.delete();

        return metadata;
    };

    /**
     * Column metadata for this table.
     *
     * If the column is computed, the `computed` property is an Object containing:
     *  - Array `input_columns`
     *  - String `input_type`
     *  - Object `computation`.
     *
     *  Otherwise, `computed` is `undefined`.
     *
     * @async
     *
     * @returns {Array<object>} An array of Objects containing metadata for each column.
     */
    _table2.prototype.column_metadata = function () {
        return this._column_metadata();
    };

    _table2.prototype.execute = function (f) {
        f(this);
    };

    /******************************************************************************
     *
     * Worker API
     *
     */

    function error_to_json(error) {
        var obj = {};
        if (typeof error !== "string") {
            (0, _getOwnPropertyNames2.default)(error).forEach(function (key) {
                obj[key] = error[key];
            }, error);
        } else {
            obj["message"] = error;
        }
        return obj;
    }

    var Host = function () {
        function Host() {
            (0, _classCallCheck3.default)(this, Host);

            this._tables = {};
            this._views = {};
        }

        (0, _createClass3.default)(Host, [{
            key: "init",
            value: function init(msg) {
                this.post(msg);
            }
        }, {
            key: "post",
            value: function post() {
                throw new Error("post() not implemented!");
            }
        }, {
            key: "clear_views",
            value: function clear_views(client_id) {
                for (var _iterator6 = (0, _keys2.default)(this._views), _isArray6 = Array.isArray(_iterator6), _i7 = 0, _iterator6 = _isArray6 ? _iterator6 : (0, _getIterator3.default)(_iterator6);;) {
                    var _ref24;

                    if (_isArray6) {
                        if (_i7 >= _iterator6.length) break;
                        _ref24 = _iterator6[_i7++];
                    } else {
                        _i7 = _iterator6.next();
                        if (_i7.done) break;
                        _ref24 = _i7.value;
                    }

                    var key = _ref24;

                    if (this._views[key].client_id === client_id) {
                        try {
                            this._views[key].delete();
                        } catch (e) {
                            console.error(e);
                        }
                        delete this._views[key];
                    }
                }
                console.debug("GC " + (0, _keys2.default)(this._views).length + " views in memory");
            }
        }, {
            key: "process",
            value: function process(msg, client_id) {
                var _this4 = this;

                switch (msg.cmd) {
                    case "init":
                        this.init(msg);
                        break;
                    case "table":
                        this._tables[msg.name] = perspective.table(msg.args[0], msg.options);
                        break;
                    case "add_computed":
                        var _table = this._tables[msg.original];
                        var computed = msg.computed;
                        // rehydrate computed column functions
                        for (var i = 0; i < computed.length; ++i) {
                            var column = computed[i];
                            eval("column.func = " + column.func);
                        }
                        this._tables[msg.name] = _table.add_computed(computed);
                        break;
                    case "table_generate":
                        var g = void 0;
                        eval("g = " + msg.args);
                        g(function (tbl) {
                            this._tables[msg.name] = tbl;
                            this.post({
                                id: msg.id,
                                data: "created!"
                            });
                        });
                        break;
                    case "table_execute":
                        var f = void 0;
                        eval("f = " + msg.f);
                        f(this._tables[msg.name]);
                        break;
                    case "view":
                        this._views[msg.view_name] = this._tables[msg.table_name].view(msg.config);
                        this._views[msg.view_name].client_id = client_id;
                        break;
                    case "table_method":
                        {
                            var obj = this._tables[msg.name];
                            var result = void 0;

                            try {
                                if (msg.subscribe) {
                                    obj[msg.method](function (e) {
                                        _this4.post({
                                            id: msg.id,
                                            data: e
                                        });
                                    });
                                } else {
                                    result = obj[msg.method].apply(obj, msg.args);
                                    if (result && result.then) {
                                        result.then(function (data) {
                                            if (data) {
                                                _this4.post({
                                                    id: msg.id,
                                                    data: data
                                                });
                                            }
                                        }).catch(function (error) {
                                            _this4.post({
                                                id: msg.id,
                                                error: error_to_json(error)
                                            });
                                        });
                                    } else {
                                        this.post({
                                            id: msg.id,
                                            data: result
                                        });
                                    }
                                }
                            } catch (e) {
                                this.post({
                                    id: msg.id,
                                    error: error_to_json(e)
                                });
                                return;
                            }

                            break;
                        }
                    case "view_method":
                        {
                            var _obj = this._views[msg.name];
                            if (!_obj) {
                                this.post({
                                    id: msg.id,
                                    error: { message: "View is not initialized" }
                                });
                                return;
                            }
                            if (msg.subscribe) {
                                try {
                                    _obj[msg.method](function (e) {
                                        _this4.post({
                                            id: msg.id,
                                            data: e
                                        });
                                    });
                                } catch (error) {
                                    this.post({
                                        id: msg.id,
                                        error: error_to_json(error)
                                    });
                                }
                            } else {
                                _obj[msg.method].apply(_obj, msg.args).then(function (result) {
                                    if (msg.method === "delete") {
                                        delete _this4._views[msg.name];
                                    }
                                    _this4.post({
                                        id: msg.id,
                                        data: result
                                    });
                                }).catch(function (error) {
                                    _this4.post({
                                        id: msg.id,
                                        error: error_to_json(error)
                                    });
                                });
                            }
                            break;
                        }
                }
            }
        }]);
        return Host;
    }();

    var WorkerHost = function (_Host) {
        (0, _inherits3.default)(WorkerHost, _Host);

        function WorkerHost() {
            (0, _classCallCheck3.default)(this, WorkerHost);

            var _this5 = (0, _possibleConstructorReturn3.default)(this, (WorkerHost.__proto__ || (0, _getPrototypeOf2.default)(WorkerHost)).call(this));

            self.addEventListener("message", function (e) {
                return _this5.process(e.data);
            }, false);
            return _this5;
        }

        (0, _createClass3.default)(WorkerHost, [{
            key: "post",
            value: function post(msg) {
                self.postMessage(msg);
            }
        }, {
            key: "init",
            value: function init(msg) {
                if (typeof WebAssembly === "undefined") {
                    console.log("Loading asm.js");
                } else {
                    console.log("Loading wasm");
                    if (msg.data) {
                        module = {};
                        module.wasmBinary = msg.data;
                        module.wasmJSMethod = "native-wasm";
                        __MODULE__ = __MODULE__(module);
                    } else {
                        var wasmXHR = new XMLHttpRequest();
                        wasmXHR.open("GET", msg.path + "psp.async.wasm", true);
                        wasmXHR.responseType = "arraybuffer";
                        wasmXHR.onload = function () {
                            module = {};
                            module.wasmBinary = wasmXHR.response;
                            module.wasmJSMethod = "native-wasm";
                            __MODULE__ = __MODULE__(module);
                        };
                        wasmXHR.send(null);
                    }
                }
            }
        }]);
        return WorkerHost;
    }(Host);

    if (typeof self !== "undefined" && self.addEventListener) {
        new WorkerHost();
    }

    /******************************************************************************
     *
     * Perspective
     *
     */

    var perspective = {
        __module__: __MODULE__,

        Host: Host,

        TYPE_AGGREGATES: _defaults.TYPE_AGGREGATES,

        TYPE_FILTERS: _defaults.TYPE_FILTERS,

        AGGREGATE_DEFAULTS: _defaults.AGGREGATE_DEFAULTS,

        FILTER_DEFAULTS: _defaults.FILTER_DEFAULTS,

        SORT_ORDERS: _defaults.SORT_ORDERS,

        worker: function worker() {},

        /**
         * A factory method for constructing {@link table}s.
         *
         * @example
         * // Creating a table directly from node
         * var table = perspective.table([{x: 1}, {x: 2}]);
         *
         * @example
         * // Creating a table from a Web Worker (instantiated via the worker() method).
         * var table = worker.table([{x: 1}, {x: 2}]);
         *
         * @param {Object<string, Array>|Object<string, string>|Array<Object>|string} data The input data
         *     for this table.  When supplied an Object with string values, an empty
         *     table is returned using this Object as a schema.  When an Object with
         *     Array values is supplied, a table is returned using this object's
         *     key/value pairs as name/columns respectively.  When an Array is supplied,
         *     a table is constructed using this Array's objects as rows.  When
         *     a string is supplied, the parameter as parsed as a CSV.
         * @param {Object} [options] An optional options dictionary.
         * @param {string} options.index The name of the column in the resulting
         *     table to treat as an index.  When updating this table, rows sharing an
         *     index of a new row will be overwritten. `index` is mutually exclusive
         *     to `limit`
         * @param {integer} options.limit The maximum number of rows that can be
         *     added to this table.  When exceeded, old rows will be overwritten in
         *     the order they were inserted.  `limit` is mutually exclusive to
         *     `index`.
         *
         * @returns {table} A new {@link table} object.
         */
        table: function table(data, options) {
            options = options || {};
            options.index = options.index || "";
            var pdata = void 0;

            if (data instanceof ArrayBuffer || Buffer && data instanceof Buffer) {
                pdata = load_arrow_buffer(data);
            } else {
                if (typeof data === "string") {
                    if (data[0] === ",") {
                        data = "_" + data;
                    }
                    data = _papaparse2.default.parse(data.trim(), { dynamicTyping: true, header: true }).data;
                }
                pdata = parse_data(data);
                if (pdata.row_count > CHUNKED_THRESHOLD) {
                    var new_pdata = [];
                    while (pdata.cdata[0].length > 0) {
                        var chunk = pdata.cdata.map(function (x) {
                            return x.splice(0, CHUNKED_THRESHOLD);
                        });
                        new_pdata.push(Object.assugn({}, pdata, chunk));
                    }
                    pdata = new_pdata;
                } else {
                    pdata = [pdata];
                }
            }

            if (options.index && options.limit) {
                throw "Cannot specify both index '" + options.index + "' and limit '" + options.limit + "'.";
            }

            if (options.index && pdata[0].names.indexOf(options.index) === -1) {
                throw "Specified index '" + options.index + "' does not exist in data.";
            }

            var tbl = void 0,
                gnode = void 0,
                pool = void 0,
                limit_index = 0;

            try {
                pool = new __MODULE__.t_pool({ _update_callback: function _update_callback() {} });
                for (var _iterator7 = pdata, _isArray7 = Array.isArray(_iterator7), _i8 = 0, _iterator7 = _isArray7 ? _iterator7 : (0, _getIterator3.default)(_iterator7);;) {
                    var _ref25;

                    if (_isArray7) {
                        if (_i8 >= _iterator7.length) break;
                        _ref25 = _iterator7[_i8++];
                    } else {
                        _i8 = _iterator7.next();
                        if (_i8.done) break;
                        _ref25 = _i8.value;
                    }

                    var _chunk2 = _ref25;

                    tbl = __MODULE__.make_table(_chunk2.cdata[0].length || 0, _chunk2.names, _chunk2.types, _chunk2.cdata, limit_index, options.limit || 4294967295, options.index, _chunk2.is_arrow, false);
                    limit_index += _chunk2.cdata[0].length;
                    if (options.limit) {
                        limit_index = limit_index % options.limit;
                    }
                    if (!gnode) {
                        gnode = __MODULE__.make_gnode(tbl);
                        pool.register_gnode(gnode);
                    }
                    __MODULE__.fill(pool, gnode, tbl);
                }

                return new _table2(gnode, pool, options.index, undefined, options.limit, limit_index);
            } catch (e) {
                if (pool) {
                    pool.delete();
                }
                if (gnode) {
                    gnode.delete();
                }
                throw e;
            } finally {
                if (tbl) {
                    tbl.delete();
                }
            }
        }
    };
    return perspective;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(39)(module)))

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_40__;

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_41__;

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_42__;

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_43__;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/******************************************************************************
 *
 * Copyright (c) 2017, the Perspective Authors.
 *
 * This file is part of the Perspective library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */

var NUMBER_AGGREGATES = ["any", "avg", "count", "distinct count", "dominant", "first by index", "last by index", "last", "high", "low", "mean", "mean by count", "median", "pct sum parent", "pct sum grand total", "sum", "sum abs", "sum not null", "unique"];

var STRING_AGGREGATES = ["any", "count", "distinct count", "distinct leaf", "dominant", "first by index", "last by index", "last", "mean by count", "unique"];

var BOOLEAN_AGGREGATES = ["any", "count", "distinct count", "distinct leaf", "dominant", "first by index", "last by index", "last", "mean by count", "unique", "and", "or"];

var SORT_ORDERS = exports.SORT_ORDERS = ["asc", "desc", "none", "asc abs", "desc abs"];

var TYPE_AGGREGATES = exports.TYPE_AGGREGATES = {
    string: STRING_AGGREGATES,
    float: NUMBER_AGGREGATES,
    integer: NUMBER_AGGREGATES,
    boolean: BOOLEAN_AGGREGATES,
    date: STRING_AGGREGATES
};

var AGGREGATE_DEFAULTS = exports.AGGREGATE_DEFAULTS = {
    string: "distinct count",
    float: "sum",
    integer: "sum",
    boolean: "distinct count",
    date: "distinct count"
};

var BOOLEAN_FILTERS = ["&", "|", "==", "!=", "or", "and"];

var NUMBER_FILTERS = ["<", ">", "==", "<=", ">=", "!=", "is nan", "is not nan"];

var STRING_FILTERS = ["==", "contains", "!=", "in", "begins with", "ends with"];

var DATE_FILTERS = ["<", ">", "==", "<=", ">=", "!="];

var COLUMN_SEPARATOR_STRING = exports.COLUMN_SEPARATOR_STRING = "|";

var TYPE_FILTERS = exports.TYPE_FILTERS = {
    string: STRING_FILTERS,
    float: NUMBER_FILTERS,
    integer: NUMBER_FILTERS,
    boolean: BOOLEAN_FILTERS,
    date: DATE_FILTERS
};

var FILTER_DEFAULTS = exports.FILTER_DEFAULTS = {
    string: "==",
    float: "==",
    integer: "==",
    boolean: "==",
    date: "=="
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DateParser = undefined;

var _getIterator2 = __webpack_require__(3);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _classCallCheck2 = __webpack_require__(11);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(12);

var _createClass3 = _interopRequireDefault(_createClass2);

exports.is_valid_date = is_valid_date;

var _moment = __webpack_require__(46);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DATE_PARSE_CANDIDATES = [_moment2.default.ISO_8601, _moment2.default.RFC_2822, "YYYY-MM-DD\\DHH:mm:ss.SSSS", "MM-DD-YYYY", "MM/DD/YYYY", "M/D/YYYY", "M/D/YY", "DD MMM YYYY", "HH:mm:ss.SSS"];

/**
 *
 *
 * @export
 * @param {string} x
 * @returns
 */
/******************************************************************************
 *
 * Copyright (c) 2017, the Perspective Authors.
 *
 * This file is part of the Perspective library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */

function is_valid_date(x) {
    return (0, _moment2.default)(x, DATE_PARSE_CANDIDATES, true).isValid();
}

/**
 *
 *
 * @export
 * @class DateParser
 */

var DateParser = exports.DateParser = function () {
    function DateParser() {
        (0, _classCallCheck3.default)(this, DateParser);

        this.date_types = [];
        this.date_candidates = DATE_PARSE_CANDIDATES.slice();
        this.date_exclusions = [];
    }

    (0, _createClass3.default)(DateParser, [{
        key: "parse",
        value: function parse(input) {
            if (this.date_exclusions.indexOf(input) > -1) {
                return -1;
            } else {
                var val = input;
                if (typeof val === "string") {
                    val = (0, _moment2.default)(input, this.date_types, true);
                    if (!val.isValid() || this.date_types.length === 0) {
                        for (var _iterator = this.date_candidates, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
                            var _ref;

                            if (_isArray) {
                                if (_i >= _iterator.length) break;
                                _ref = _iterator[_i++];
                            } else {
                                _i = _iterator.next();
                                if (_i.done) break;
                                _ref = _i.value;
                            }

                            var candidate = _ref;

                            val = (0, _moment2.default)(input, candidate, true);
                            if (val.isValid()) {
                                this.date_types.push(candidate);
                                this.date_candidates.splice(this.date_candidates.indexOf(candidate), 1);
                                return +val;
                            }
                        }
                        this.date_exclusions.push(input);
                        return -1;
                    }
                }
                return +val;
            }
        }
    }]);
    return DateParser;
}();

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_46__;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getIterator2 = __webpack_require__(3);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _getOwnPropertyNames = __webpack_require__(24);

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

exports.bindall = bindall;
exports.detectIE = detectIE;
exports.detectChrome = detectChrome;
exports.ScriptPath = ScriptPath;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/******************************************************************************
 *
 * Copyright (c) 2017, the Perspective Authors.
 *
 * This file is part of the Perspective library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */

/**
 * Bind all methods in a class to the class instance.  It is sad that this is
 * necessary.
 *
 * @export
 * @param {*} self
 */
function bindall(self) {
    for (var _iterator = (0, _getOwnPropertyNames2.default)(self.constructor.prototype), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
        var _ref;

        if (_isArray) {
            if (_i >= _iterator.length) break;
            _ref = _iterator[_i++];
        } else {
            _i = _iterator.next();
            if (_i.done) break;
            _ref = _i.value;
        }

        var key = _ref;

        var value = self[key];
        if (key !== "constructor" && typeof value === "function") {
            self[key] = value.bind(self);
        }
    }
}

/**
 * Detect Internet Explorer.
 *
 * Returns
 * -------
 * True if the current script is running in Internet Explorer.
 */
function detectIE() {
    if (typeof window === "undefined") return false;
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");
    if (msie > 0) {
        return parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)), 10);
    }
    var trident = ua.indexOf("Trident/");
    if (trident > 0) {
        var rv = ua.indexOf("rv:");
        return parseInt(ua.substring(rv + 3, ua.indexOf(".", rv)), 10);
    }
    var edge = ua.indexOf("Edge/");
    if (edge > 0) {
        return parseInt(ua.substring(edge + 5, ua.indexOf(".", edge)), 10);
    }
    return false;
}

/**
 * Detect Chrome.
 *
 * Returns
 * -------
 * Detect if the current script is running in Chrome.
 */
function detectChrome() {
    var isChromium = window.chrome,
        winNav = window.navigator,
        vendorName = winNav.vendor,
        isOpera = winNav.userAgent.indexOf("OPR") > -1,
        isIEedge = winNav.userAgent.indexOf("Edge") > -1,
        isIOSChrome = winNav.userAgent.match("CriOS");

    if (isIOSChrome) {
        return true;
    } else if (isChromium !== null && typeof isChromium !== "undefined" && vendorName === "Google Inc." && isOpera === false && isIEedge === false) {
        return true;
    } else {
        return false;
    }
}

/**
 * An Object for capturing details of the invoking script's origin.
 *
 * Returns
 * -------
 * An instance of a ScriptPath object.  Interesting methods on this object
 * include:
 *     fullPath : The complete path of this script.
 *     path : The path (no host).
 *     host : The host (no path).
 *     file : The file name itself.
 */
function ScriptPath() {
    var pathParts;
    try {
        throw new Error();
    } catch (e) {
        var stackLines = e.stack.split("\n");
        var callerIndex = 0;
        for (var i in stackLines) {
            if (!stackLines[i].match(/http[s]?:\/\//)) continue;
            callerIndex = Number(i);
            break;
        }
        pathParts = stackLines[callerIndex].match(/((http[s]?:\/\/.+\/)([^\/]+\.(js|html))).*?:/);
    }

    this.fullPath = function () {
        return pathParts ? pathParts[1] : window.location.origin + window.location.pathname;
    };
    this.path = function () {
        return pathParts ? pathParts[2] : window.location.pathname;
    };
    this.host = function () {
        var x = this.path().match(/.+?\/\/.+?\//);
        return x ? x[0] : window.location.hostname;
    };
    this.file = function () {
        return pathParts ? pathParts[3] : "";
    };
}

if (!String.prototype.includes) {
    String.prototype.includes = function (search, start) {
        if (typeof start !== "number") {
            start = 0;
        }

        if (start + search.length > this.length) {
            return false;
        } else {
            return this.indexOf(search, start) !== -1;
        }
    };
}

// from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
if (!Array.prototype.includes) {
    Object.defineProperty(Array.prototype, "includes", {
        value: function value(searchElement, fromIndex) {
            if (this == null) {
                throw new TypeError('"this" is null or not defined');
            }

            // 1. Let O be ? ToObject(this value).
            var o = Object(this);

            // 2. Let len be ? ToLength(? Get(O, "length")).
            var len = o.length >>> 0;

            // 3. If len is 0, return false.
            if (len === 0) {
                return false;
            }

            // 4. Let n be ? ToInteger(fromIndex).
            //    (If fromIndex is undefined, this step produces the value 0.)
            var n = fromIndex | 0;

            // 5. If n ≥ 0, then
            //  a. Let k be n.
            // 6. Else n < 0,
            //  a. Let k be len + n.
            //  b. If k < 0, let k be 0.
            var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

            function sameValueZero(x, y) {
                return x === y || typeof x === "number" && typeof y === "number" && isNaN(x) && isNaN(y);
            }

            // 7. Repeat, while k < len
            while (k < len) {
                // a. Let elementK be the result of ? Get(O, ! ToString(k)).
                // b. If SameValueZero(searchElement, elementK) is true, return true.
                if (sameValueZero(o[k], searchElement)) {
                    return true;
                }
                // c. Increase k by 1.
                k++;
            }

            // 8. Return false
            return false;
        }
    });
}

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TableToStringIterator = exports.CountByResult = exports.Table = undefined;

var _stringify = __webpack_require__(10);

var _stringify2 = _interopRequireDefault(_stringify);

var _getIterator2 = __webpack_require__(3);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _iterator = __webpack_require__(2);

var _iterator2 = _interopRequireDefault(_iterator);

var _tslib = __webpack_require__(0);

var tslib_1 = _interopRequireWildcard(_tslib);

var _recordbatch = __webpack_require__(16);

var _predicate = __webpack_require__(53);

var _type = __webpack_require__(1);

var _arrow = __webpack_require__(54);

var _compat = __webpack_require__(60);

var _vector = __webpack_require__(4);

var _chunked = __webpack_require__(29);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.
var Table = /** @class */function () {
    function Table() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // List of inner Vectors, possibly spanning batches
        this._columns = [];
        var schema;
        var batches;
        if (args[0] instanceof _type.Schema) {
            schema = args[0];
            batches = Array.isArray(args[1][0]) ? args[1][0] : args[1];
        } else if (args[0] instanceof _recordbatch.RecordBatch) {
            schema = (batches = args)[0].schema;
        } else {
            schema = (batches = args[0])[0].schema;
        }
        this.schema = schema;
        this.batches = batches;
        this.batchesUnion = batches.length == 0 ? new _recordbatch.RecordBatch(schema, 0, []) : batches.reduce(function (union, batch) {
            return union.concat(batch);
        });
        this.length = this.batchesUnion.length;
        this.numCols = this.batchesUnion.numCols;
    }
    Table.empty = function () {
        return new Table(new _type.Schema([]), []);
    };
    Table.from = function (sources) {
        if (sources) {
            var schema = void 0;
            var recordBatches = [];
            try {
                for (var _a = tslib_1.__values((0, _arrow.read)(sources)), _b = _a.next(); !_b.done; _b = _a.next()) {
                    var recordBatch = _b.value;
                    schema = schema || recordBatch.schema;
                    recordBatches.push(recordBatch);
                }
            } catch (e_1_1) {
                e_1 = { error: e_1_1 };
            } finally {
                try {
                    if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                } finally {
                    if (e_1) throw e_1.error;
                }
            }
            return new Table(schema || new _type.Schema([]), recordBatches);
        }
        return Table.empty();
        var e_1, _c;
    };
    Table.fromAsync = function (sources) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var schema, recordBatches, _a, _b, recordBatch, e_2_1, _c, _d, e_2, _e;
            return tslib_1.__generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        if (!(0, _compat.isAsyncIterable)(sources)) return [3 /*break*/, 14];
                        schema = void 0;
                        recordBatches = [];
                        _f.label = 1;
                    case 1:
                        _f.trys.push([1, 7, 8, 13]);
                        _a = tslib_1.__asyncValues((0, _arrow.readAsync)(sources));
                        _f.label = 2;
                    case 2:
                        return [4 /*yield*/, _a.next()];
                    case 3:
                        if (!(_b = _f.sent(), !_b.done)) return [3 /*break*/, 6];
                        return [4 /*yield*/, _b.value];
                    case 4:
                        recordBatch = _f.sent();
                        schema = schema || recordBatch.schema;
                        recordBatches.push(recordBatch);
                        _f.label = 5;
                    case 5:
                        return [3 /*break*/, 2];
                    case 6:
                        return [3 /*break*/, 13];
                    case 7:
                        e_2_1 = _f.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 13];
                    case 8:
                        _f.trys.push([8,, 11, 12]);
                        if (!(_b && !_b.done && (_e = _a.return))) return [3 /*break*/, 10];
                        return [4 /*yield*/, _e.call(_a)];
                    case 9:
                        _f.sent();
                        _f.label = 10;
                    case 10:
                        return [3 /*break*/, 12];
                    case 11:
                        if (e_2) throw e_2.error;
                        return [7 /*endfinally*/];
                    case 12:
                        return [7 /*endfinally*/];
                    case 13:
                        return [2 /*return*/, new Table(schema || new _type.Schema([]), recordBatches)];
                    case 14:
                        if (!(0, _compat.isPromise)(sources)) return [3 /*break*/, 16];
                        _d = (_c = Table).from;
                        return [4 /*yield*/, sources];
                    case 15:
                        return [2 /*return*/, _d.apply(_c, [_f.sent()])];
                    case 16:
                        if (sources) {
                            return [2 /*return*/, Table.from(sources)];
                        }
                        _f.label = 17;
                    case 17:
                        return [2 /*return*/, Table.empty()];
                }
            });
        });
    };
    Table.fromStruct = function (struct) {
        var schema = new _type.Schema(struct.type.children);
        var chunks = struct.view instanceof _chunked.ChunkedView ? struct.view.chunkVectors : [struct];
        return new Table(chunks.map(function (chunk) {
            return new _recordbatch.RecordBatch(schema, chunk.length, chunk.view.childData);
        }));
    };
    Table.prototype.get = function (index) {
        return this.batchesUnion.get(index);
    };
    Table.prototype.getColumn = function (name) {
        return this.getColumnAt(this.getColumnIndex(name));
    };
    Table.prototype.getColumnAt = function (index) {
        return index < 0 || index >= this.numCols ? null : this._columns[index] || (this._columns[index] = this.batchesUnion.getChildAt(index));
    };
    Table.prototype.getColumnIndex = function (name) {
        return this.schema.fields.findIndex(function (f) {
            return f.name === name;
        });
    };
    Table.prototype[_iterator2.default] = function () {
        return (0, _getIterator3.default)(this.batchesUnion);
    };
    Table.prototype.filter = function (predicate) {
        return new FilteredDataFrame(this.batches, predicate);
    };
    Table.prototype.scan = function (next, bind) {
        var batches = this.batches,
            numBatches = batches.length;
        for (var batchIndex = -1; ++batchIndex < numBatches;) {
            // load batches
            var batch = batches[batchIndex];
            if (bind) {
                bind(batch);
            }
            // yield all indices
            for (var index = -1, numRows = batch.length; ++index < numRows;) {
                next(index, batch);
            }
        }
    };
    Table.prototype.count = function () {
        return this.length;
    };
    Table.prototype.countBy = function (name) {
        var batches = this.batches,
            numBatches = batches.length;
        var count_by = typeof name === 'string' ? new _predicate.Col(name) : name;
        // Assume that all dictionary batches are deltas, which means that the
        // last record batch has the most complete dictionary
        count_by.bind(batches[numBatches - 1]);
        var vector = count_by.vector;
        if (!(vector instanceof _vector.DictionaryVector)) {
            throw new Error('countBy currently only supports dictionary-encoded columns');
        }
        // TODO: Adjust array byte width based on overall length
        // (e.g. if this.length <= 255 use Uint8Array, etc...)
        var counts = new Uint32Array(vector.dictionary.length);
        for (var batchIndex = -1; ++batchIndex < numBatches;) {
            // load batches
            var batch = batches[batchIndex];
            // rebind the countBy Col
            count_by.bind(batch);
            var keys = count_by.vector.indices;
            // yield all indices
            for (var index = -1, numRows = batch.length; ++index < numRows;) {
                var key = keys.get(index);
                if (key !== null) {
                    counts[key]++;
                }
            }
        }
        return new CountByResult(vector.dictionary, _vector.IntVector.from(counts));
    };
    Table.prototype.select = function () {
        var columnNames = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            columnNames[_i] = arguments[_i];
        }
        return new Table(this.batches.map(function (batch) {
            return batch.select.apply(batch, tslib_1.__spread(columnNames));
        }));
    };
    Table.prototype.toString = function (separator) {
        var str = '';
        try {
            for (var _a = tslib_1.__values(this.rowsToString(separator)), _b = _a.next(); !_b.done; _b = _a.next()) {
                var row = _b.value;
                str += row + '\n';
            }
        } catch (e_3_1) {
            e_3 = { error: e_3_1 };
        } finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            } finally {
                if (e_3) throw e_3.error;
            }
        }
        return str;
        var e_3, _c;
    };
    Table.prototype.rowsToString = function (separator) {
        if (separator === void 0) {
            separator = ' | ';
        }
        return new TableToStringIterator(tableRowsToString(this, separator));
    };
    return Table;
}();
exports.Table = Table;

var FilteredDataFrame = /** @class */function () {
    function FilteredDataFrame(batches, predicate) {
        this.batches = batches;
        this.predicate = predicate;
    }
    FilteredDataFrame.prototype.scan = function (next, bind) {
        // inlined version of this:
        // this.parent.scan((idx, columns) => {
        //     if (this.predicate(idx, columns)) next(idx, columns);
        // });
        var batches = this.batches;
        var numBatches = batches.length;
        for (var batchIndex = -1; ++batchIndex < numBatches;) {
            // load batches
            var batch = batches[batchIndex];
            // TODO: bind batches lazily
            // If predicate doesn't match anything in the batch we don't need
            // to bind the callback
            if (bind) {
                bind(batch);
            }
            var predicate = this.predicate.bind(batch);
            // yield all indices
            for (var index = -1, numRows = batch.length; ++index < numRows;) {
                if (predicate(index, batch)) {
                    next(index, batch);
                }
            }
        }
    };
    FilteredDataFrame.prototype.count = function () {
        // inlined version of this:
        // let sum = 0;
        // this.parent.scan((idx, columns) => {
        //     if (this.predicate(idx, columns)) ++sum;
        // });
        // return sum;
        var sum = 0;
        var batches = this.batches;
        var numBatches = batches.length;
        for (var batchIndex = -1; ++batchIndex < numBatches;) {
            // load batches
            var batch = batches[batchIndex];
            var predicate = this.predicate.bind(batch);
            // yield all indices
            for (var index = -1, numRows = batch.length; ++index < numRows;) {
                if (predicate(index, batch)) {
                    ++sum;
                }
            }
        }
        return sum;
    };
    FilteredDataFrame.prototype.filter = function (predicate) {
        return new FilteredDataFrame(this.batches, this.predicate.and(predicate));
    };
    FilteredDataFrame.prototype.countBy = function (name) {
        var batches = this.batches,
            numBatches = batches.length;
        var count_by = typeof name === 'string' ? new _predicate.Col(name) : name;
        // Assume that all dictionary batches are deltas, which means that the
        // last record batch has the most complete dictionary
        count_by.bind(batches[numBatches - 1]);
        var vector = count_by.vector;
        if (!(vector instanceof _vector.DictionaryVector)) {
            throw new Error('countBy currently only supports dictionary-encoded columns');
        }
        // TODO: Adjust array byte width based on overall length
        // (e.g. if this.length <= 255 use Uint8Array, etc...)
        var counts = new Uint32Array(vector.dictionary.length);
        for (var batchIndex = -1; ++batchIndex < numBatches;) {
            // load batches
            var batch = batches[batchIndex];
            var predicate = this.predicate.bind(batch);
            // rebind the countBy Col
            count_by.bind(batch);
            var keys = count_by.vector.indices;
            // yield all indices
            for (var index = -1, numRows = batch.length; ++index < numRows;) {
                var key = keys.get(index);
                if (key !== null && predicate(index, batch)) {
                    counts[key]++;
                }
            }
        }
        return new CountByResult(vector.dictionary, _vector.IntVector.from(counts));
    };
    return FilteredDataFrame;
}();
var CountByResult = /** @class */function (_super) {
    tslib_1.__extends(CountByResult, _super);
    function CountByResult(values, counts) {
        return _super.call(this, new _recordbatch.RecordBatch(new _type.Schema([new _type.Field('values', values.type), new _type.Field('counts', counts.type)]), counts.length, [values, counts])) || this;
    }
    CountByResult.prototype.toJSON = function () {
        var values = this.getColumnAt(0);
        var counts = this.getColumnAt(1);
        var result = {};
        for (var i = -1; ++i < this.length;) {
            result[values.get(i)] = counts.get(i);
        }
        return result;
    };
    return CountByResult;
}(Table);
exports.CountByResult = CountByResult;

var TableToStringIterator = /** @class */function () {
    function TableToStringIterator(iterator) {
        this.iterator = iterator;
    }
    TableToStringIterator.prototype[_iterator2.default] = function () {
        return this.iterator;
    };
    TableToStringIterator.prototype.next = function (value) {
        return this.iterator.next(value);
    };
    TableToStringIterator.prototype.throw = function (error) {
        return this.iterator.throw && this.iterator.throw(error) || { done: true, value: '' };
    };
    TableToStringIterator.prototype.return = function (value) {
        return this.iterator.return && this.iterator.return(value) || { done: true, value: '' };
    };
    TableToStringIterator.prototype.pipe = function (stream) {
        var _this = this;
        var res;
        var write = function write() {
            if (stream['writable']) {
                do {
                    if ((res = _this.next()).done) {
                        break;
                    }
                } while (stream['write'](res.value + '\n', 'utf8'));
            }
            if (!res || !res.done) {
                stream['once']('drain', write);
            } else if (!stream['isTTY']) {
                stream['end']('\n');
            }
        };
        write();
    };
    return TableToStringIterator;
}();
exports.TableToStringIterator = TableToStringIterator;

function tableRowsToString(table, separator) {
    if (separator === void 0) {
        separator = ' | ';
    }
    var fields, header, maxColumnWidths, i, n, val, row, j, k, i;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                fields = table.schema.fields;
                header = tslib_1.__spread(['row_id'], fields.map(function (f) {
                    return "" + f;
                })).map(stringify);
                maxColumnWidths = header.map(function (x) {
                    return x.length;
                });
                // Pass one to convert to strings and count max column widths
                for (i = -1, n = table.length - 1; ++i < n;) {
                    val = void 0, row = tslib_1.__spread([i], table.get(i));
                    for (j = -1, k = row.length; ++j < k;) {
                        val = stringify(row[j]);
                        maxColumnWidths[j] = Math.max(maxColumnWidths[j], val.length);
                    }
                }
                return [4 /*yield*/, header.map(function (x, j) {
                    return leftPad(x, ' ', maxColumnWidths[j]);
                }).join(separator)];
            case 1:
                _a.sent();
                i = -1;
                _a.label = 2;
            case 2:
                if (!(++i < table.length)) return [3 /*break*/, 5];
                return [4 /*yield*/, tslib_1.__spread([i], table.get(i)).map(function (x) {
                    return stringify(x);
                }).map(function (x, j) {
                    return leftPad(x, ' ', maxColumnWidths[j]);
                }).join(separator)];
            case 3:
                _a.sent();
                _a.label = 4;
            case 4:
                return [3 /*break*/, 2];
            case 5:
                return [2 /*return*/];
        }
    });
}
function leftPad(str, fill, n) {
    return (new Array(n + 1).join(fill) + str).slice(-1 * n);
}
function stringify(x) {
    return typeof x === 'string' ? "\"" + x + "\"" : ArrayBuffer.isView(x) ? "[" + x + "]" : (0, _stringify2.default)(x);
}

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DictionaryView = undefined;

var _iterator = __webpack_require__(2);

var _iterator2 = _interopRequireDefault(_iterator);

var _tslib = __webpack_require__(0);

var tslib_1 = _interopRequireWildcard(_tslib);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DictionaryView = /** @class */function () {
    function DictionaryView(dictionary, indices) {
        this.indices = indices;
        this.dictionary = dictionary;
    }
    DictionaryView.prototype.clone = function (data) {
        return new DictionaryView(data.dictionary, this.indices.clone(data.indices));
    };
    DictionaryView.prototype.isValid = function (index) {
        return this.indices.isValid(index);
    };
    DictionaryView.prototype.get = function (index) {
        return this.dictionary.get(this.indices.get(index));
    };
    DictionaryView.prototype.set = function (index, value) {
        this.dictionary.set(this.indices.get(index), value);
    };
    DictionaryView.prototype.toArray = function () {
        return tslib_1.__spread(this);
    };
    DictionaryView.prototype[_iterator2.default] = function () {
        var values, indices, index, n;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    values = this.dictionary, indices = this.indices;
                    index = -1, n = indices.length;
                    _a.label = 1;
                case 1:
                    if (!(++index < n)) return [3 /*break*/, 4];
                    return [4 /*yield*/, values.get(indices.get(index))];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    return [3 /*break*/, 1];
                case 4:
                    return [2 /*return*/];
            }
        });
    };
    DictionaryView.prototype.indexOf = function (search) {
        // First find the dictionary key for the desired value...
        var key = this.dictionary.indexOf(search);
        if (key === -1) {
            return key;
        }
        // ... then find the first occurence of that key in indices
        return this.indices.indexOf(key);
    };
    return DictionaryView;
}(); // Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.
exports.DictionaryView = DictionaryView;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Utf8View = exports.BinaryView = exports.FixedSizeListView = exports.ListView = exports.VariableListViewBase = exports.ListViewBase = exports.decodeUtf8 = exports.encodeUtf8 = undefined;

var _iterator = __webpack_require__(2);

var _iterator2 = _interopRequireDefault(_iterator);

var _tslib = __webpack_require__(0);

var tslib_1 = _interopRequireWildcard(_tslib);

var _vector = __webpack_require__(4);

var _textEncodingUtf = __webpack_require__(30);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var encodeUtf8 = exports.encodeUtf8 = function (encoder) {
    return encoder.encode.bind(encoder);
}(new _textEncodingUtf.TextEncoder('utf-8')); // Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.
var decodeUtf8 = exports.decodeUtf8 = function (decoder) {
    return decoder.decode.bind(decoder);
}(new _textEncodingUtf.TextDecoder('utf-8'));
var ListViewBase = /** @class */function () {
    function ListViewBase(data) {
        this.length = data.length;
        this.values = data.values;
    }
    ListViewBase.prototype.clone = function (data) {
        return new this.constructor(data);
    };
    ListViewBase.prototype.isValid = function () {
        return true;
    };
    ListViewBase.prototype.toArray = function () {
        return tslib_1.__spread(this);
    };
    ListViewBase.prototype.get = function (index) {
        return this.getList(this.values, index, this.valueOffsets);
    };
    ListViewBase.prototype.set = function (index, value) {
        return this.setList(this.values, index, value, this.valueOffsets);
    };
    ListViewBase.prototype[_iterator2.default] = function () {
        var get, length, values, valueOffsets, index;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    get = this.getList, length = this.length;
                    values = this.values, valueOffsets = this.valueOffsets;
                    index = -1;
                    _a.label = 1;
                case 1:
                    if (!(++index < length)) return [3 /*break*/, 4];
                    return [4 /*yield*/, get(values, index, valueOffsets)];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    return [3 /*break*/, 1];
                case 4:
                    return [2 /*return*/];
            }
        });
    };
    ListViewBase.prototype.indexOf = function (search) {
        var index = 0;
        try {
            for (var _a = tslib_1.__values(this), _b = _a.next(); !_b.done; _b = _a.next()) {
                var value = _b.value;
                if (value === search) {
                    return index;
                }
                ++index;
            }
        } catch (e_1_1) {
            e_1 = { error: e_1_1 };
        } finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            } finally {
                if (e_1) throw e_1.error;
            }
        }
        return -1;
        var e_1, _c;
    };
    return ListViewBase;
}();
exports.ListViewBase = ListViewBase;

var VariableListViewBase = /** @class */function (_super) {
    tslib_1.__extends(VariableListViewBase, _super);
    function VariableListViewBase(data) {
        var _this = _super.call(this, data) || this;
        _this.length = data.length;
        _this.valueOffsets = data.valueOffsets;
        return _this;
    }
    return VariableListViewBase;
}(ListViewBase);
exports.VariableListViewBase = VariableListViewBase;

var ListView = /** @class */function (_super) {
    tslib_1.__extends(ListView, _super);
    function ListView(data) {
        var _this = _super.call(this, data) || this;
        _this.values = (0, _vector.createVector)(data.values);
        return _this;
    }
    ListView.prototype.getList = function (values, index, valueOffsets) {
        return values.slice(valueOffsets[index], valueOffsets[index + 1]);
    };
    ListView.prototype.setList = function (values, index, value, valueOffsets) {
        var idx = -1;
        var offset = valueOffsets[index];
        var end = Math.min(value.length, valueOffsets[index + 1] - offset);
        while (offset < end) {
            values.set(offset++, value.get(++idx));
        }
    };
    return ListView;
}(VariableListViewBase);
exports.ListView = ListView;

var FixedSizeListView = /** @class */function (_super) {
    tslib_1.__extends(FixedSizeListView, _super);
    function FixedSizeListView(data) {
        var _this = _super.call(this, data) || this;
        _this.size = data.type.listSize;
        _this.values = (0, _vector.createVector)(data.values);
        return _this;
    }
    FixedSizeListView.prototype.getList = function (values, index) {
        var size = this.size;
        return values.slice(index *= size, index + size);
    };
    FixedSizeListView.prototype.setList = function (values, index, value) {
        var size = this.size;
        for (var idx = -1, offset = index * size; ++idx < size;) {
            values.set(offset + idx, value.get(++idx));
        }
    };
    return FixedSizeListView;
}(ListViewBase);
exports.FixedSizeListView = FixedSizeListView;

var BinaryView = /** @class */function (_super) {
    tslib_1.__extends(BinaryView, _super);
    function BinaryView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BinaryView.prototype.getList = function (values, index, valueOffsets) {
        return values.subarray(valueOffsets[index], valueOffsets[index + 1]);
    };
    BinaryView.prototype.setList = function (values, index, value, valueOffsets) {
        var offset = valueOffsets[index];
        values.set(value.subarray(0, valueOffsets[index + 1] - offset), offset);
    };
    return BinaryView;
}(VariableListViewBase);
exports.BinaryView = BinaryView;

var Utf8View = /** @class */function (_super) {
    tslib_1.__extends(Utf8View, _super);
    function Utf8View() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Utf8View.prototype.getList = function (values, index, valueOffsets) {
        return decodeUtf8(values.subarray(valueOffsets[index], valueOffsets[index + 1]));
    };
    Utf8View.prototype.setList = function (values, index, value, valueOffsets) {
        var offset = valueOffsets[index];
        values.set(encodeUtf8(value).subarray(0, valueOffsets[index + 1] - offset), offset);
    };
    return Utf8View;
}(VariableListViewBase);
exports.Utf8View = Utf8View;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MapRowView = exports.RowView = exports.MapView = exports.StructView = exports.DenseUnionView = exports.UnionView = exports.NestedView = undefined;

var _stringify = __webpack_require__(10);

var _stringify2 = _interopRequireDefault(_stringify);

var _create = __webpack_require__(13);

var _create2 = _interopRequireDefault(_create);

var _iterator = __webpack_require__(2);

var _iterator2 = _interopRequireDefault(_iterator);

var _tslib = __webpack_require__(0);

var tslib_1 = _interopRequireWildcard(_tslib);

var _vector = __webpack_require__(4);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.
var NestedView = /** @class */function () {
    function NestedView(data, children) {
        this.length = data.length;
        this.childData = data.childData;
        this.numChildren = data.childData.length;
        this._children = children || new Array(this.numChildren);
    }
    NestedView.prototype.clone = function (data) {
        return new this.constructor(data, this._children);
    };
    NestedView.prototype.isValid = function () {
        return true;
    };
    NestedView.prototype.toArray = function () {
        return tslib_1.__spread(this);
    };
    NestedView.prototype.indexOf = function (_) {
        throw new Error("Not implemented yet");
    };
    NestedView.prototype.toJSON = function () {
        return this.toArray();
    };
    NestedView.prototype.toString = function () {
        return tslib_1.__spread(this).map(function (x) {
            return stringify(x);
        }).join(', ');
    };
    NestedView.prototype.get = function (index) {
        return this.getNested(this, index);
    };
    NestedView.prototype.set = function (index, value) {
        return this.setNested(this, index, value);
    };
    NestedView.prototype.getChildAt = function (index) {
        return index < 0 || index >= this.numChildren ? null : this._children[index] || (this._children[index] = _vector.Vector.create(this.childData[index]));
    };
    NestedView.prototype[_iterator2.default] = function () {
        var get, length, index;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    get = this.getNested;
                    length = this.length;
                    index = -1;
                    _a.label = 1;
                case 1:
                    if (!(++index < length)) return [3 /*break*/, 4];
                    return [4 /*yield*/, get(this, index)];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    return [3 /*break*/, 1];
                case 4:
                    return [2 /*return*/];
            }
        });
    };
    return NestedView;
}();
exports.NestedView = NestedView;

var UnionView = /** @class */function (_super) {
    tslib_1.__extends(UnionView, _super);
    function UnionView(data, children) {
        var _this = _super.call(this, data, children) || this;
        _this.length = data.length;
        _this.typeIds = data.typeIds;
        return _this;
    }
    UnionView.prototype.getNested = function (self, index) {
        return self.getChildValue(self, index, self.typeIds, self.valueOffsets);
    };
    UnionView.prototype.setNested = function (self, index, value) {
        return self.setChildValue(self, index, value, self.typeIds, self.valueOffsets);
    };
    UnionView.prototype.getChildValue = function (self, index, typeIds, _valueOffsets) {
        var child = self.getChildAt(typeIds[index]);
        return child ? child.get(index) : null;
    };
    UnionView.prototype.setChildValue = function (self, index, value, typeIds, _valueOffsets) {
        var child = self.getChildAt(typeIds[index]);
        return child ? child.set(index, value) : null;
    };
    UnionView.prototype[_iterator2.default] = function () {
        var length, get, _a, typeIds, valueOffsets, index;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    length = this.length;
                    get = this.getChildValue;
                    _a = this, typeIds = _a.typeIds, valueOffsets = _a.valueOffsets;
                    index = -1;
                    _b.label = 1;
                case 1:
                    if (!(++index < length)) return [3 /*break*/, 4];
                    return [4 /*yield*/, get(this, index, typeIds, valueOffsets)];
                case 2:
                    _b.sent();
                    _b.label = 3;
                case 3:
                    return [3 /*break*/, 1];
                case 4:
                    return [2 /*return*/];
            }
        });
    };
    return UnionView;
}(NestedView);
exports.UnionView = UnionView;

var DenseUnionView = /** @class */function (_super) {
    tslib_1.__extends(DenseUnionView, _super);
    function DenseUnionView(data, children) {
        var _this = _super.call(this, data, children) || this;
        _this.valueOffsets = data.valueOffsets;
        return _this;
    }
    DenseUnionView.prototype.getNested = function (self, index) {
        return self.getChildValue(self, index, self.typeIds, self.valueOffsets);
    };
    DenseUnionView.prototype.getChildValue = function (self, index, typeIds, valueOffsets) {
        var child = self.getChildAt(typeIds[index]);
        return child ? child.get(valueOffsets[index]) : null;
    };
    DenseUnionView.prototype.setChildValue = function (self, index, value, typeIds, valueOffsets) {
        var child = self.getChildAt(typeIds[index]);
        return child ? child.set(valueOffsets[index], value) : null;
    };
    return DenseUnionView;
}(UnionView);
exports.DenseUnionView = DenseUnionView;

var StructView = /** @class */function (_super) {
    tslib_1.__extends(StructView, _super);
    function StructView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StructView.prototype.getNested = function (self, index) {
        return new RowView(self, self._children, index);
    };
    StructView.prototype.setNested = function (self, index, value) {
        var idx = -1,
            len = self.numChildren,
            child;
        if (!(value instanceof NestedView || value instanceof _vector.Vector)) {
            while (++idx < len) {
                if (child = self.getChildAt(idx)) {
                    child.set(index, value[idx]);
                }
            }
        } else {
            while (++idx < len) {
                if (child = self.getChildAt(idx)) {
                    child.set(index, value.get(idx));
                }
            }
        }
    };
    return StructView;
}(NestedView);
exports.StructView = StructView;

var MapView = /** @class */function (_super) {
    tslib_1.__extends(MapView, _super);
    function MapView(data, children) {
        var _this = _super.call(this, data, children) || this;
        _this.typeIds = data.type.children.reduce(function (xs, x, i) {
            return (xs[x.name] = i) && xs || xs;
        }, (0, _create2.default)(null));
        return _this;
    }
    MapView.prototype.getNested = function (self, index) {
        return new MapRowView(self, self._children, index);
    };
    MapView.prototype.setNested = function (self, index, value) {
        var typeIds = self.typeIds,
            child;
        if (!(value instanceof NestedView || value instanceof _vector.Vector)) {
            for (var key in typeIds) {
                if (child = self.getChildAt(typeIds[key])) {
                    child.set(index, value[key]);
                }
            }
        } else {
            for (var key in typeIds) {
                if (child = self.getChildAt(typeIds[key])) {
                    child.set(index, value.get(key));
                }
            }
        }
    };
    return MapView;
}(NestedView);
exports.MapView = MapView;

var RowView = /** @class */function (_super) {
    tslib_1.__extends(RowView, _super);
    function RowView(data, children, rowIndex) {
        var _this = _super.call(this, data, children) || this;
        _this.rowIndex = rowIndex || 0;
        _this.length = data.numChildren;
        return _this;
    }
    RowView.prototype.clone = function (data) {
        return new this.constructor(data, this._children, this.rowIndex);
    };
    RowView.prototype.getChildValue = function (self, index, _typeIds, _valueOffsets) {
        var child = self.getChildAt(index);
        return child ? child.get(self.rowIndex) : null;
    };
    RowView.prototype.setChildValue = function (self, index, value, _typeIds, _valueOffsets) {
        var child = self.getChildAt(index);
        return child ? child.set(self.rowIndex, value) : null;
    };
    return RowView;
}(UnionView);
exports.RowView = RowView;

var MapRowView = /** @class */function (_super) {
    tslib_1.__extends(MapRowView, _super);
    function MapRowView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MapRowView.prototype.toJSON = function () {
        var get = this.getChildValue;
        var result = {};
        var typeIds = this.typeIds;
        for (var name_1 in typeIds) {
            result[name_1] = get(this, name_1, typeIds, null);
        }
        return result;
    };
    MapRowView.prototype.getChildValue = function (self, key, typeIds, _valueOffsets) {
        var child = self.getChildAt(typeIds[key]);
        return child ? child.get(self.rowIndex) : null;
    };
    MapRowView.prototype.setChildValue = function (self, key, value, typeIds, _valueOffsets) {
        var child = self.getChildAt(typeIds[key]);
        return child ? child.set(self.rowIndex, value) : null;
    };
    return MapRowView;
}(RowView);
exports.MapRowView = MapRowView;

function stringify(x) {
    return typeof x === 'string' ? "\"" + x + "\"" : Array.isArray(x) ? (0, _stringify2.default)(x) : ArrayBuffer.isView(x) ? "[" + x + "]" : "" + x;
}

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IntervalMonthView = exports.IntervalYearView = exports.IntervalYearMonthView = exports.TimestampNanosecondView = exports.TimestampMicrosecondView = exports.TimestampMillisecondView = exports.TimestampSecondView = exports.TimestampDayView = exports.DateMillisecondView = exports.DateDayView = exports.Float16View = exports.FixedSizeView = exports.PrimitiveView = exports.ValidityView = exports.BoolView = exports.NullView = exports.FlatView = undefined;

var _getIterator2 = __webpack_require__(3);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _iterator = __webpack_require__(2);

var _iterator2 = _interopRequireDefault(_iterator);

exports.epochSecondsToMs = epochSecondsToMs;
exports.epochDaysToMs = epochDaysToMs;
exports.epochMillisecondsLongToMs = epochMillisecondsLongToMs;
exports.epochMicrosecondsLongToMs = epochMicrosecondsLongToMs;
exports.epochNanosecondsLongToMs = epochNanosecondsLongToMs;
exports.epochMillisecondsToDate = epochMillisecondsToDate;
exports.epochDaysToDate = epochDaysToDate;
exports.epochSecondsToDate = epochSecondsToDate;
exports.epochNanosecondsLongToDate = epochNanosecondsLongToDate;
exports.epochMillisecondsLongToDate = epochMillisecondsLongToDate;

var _tslib = __webpack_require__(0);

var tslib_1 = _interopRequireWildcard(_tslib);

var _bit = __webpack_require__(6);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.
var FlatView = /** @class */function () {
    function FlatView(data) {
        this.length = data.length;
        this.values = data.values;
    }
    FlatView.prototype.clone = function (data) {
        return new this.constructor(data);
    };
    FlatView.prototype.isValid = function () {
        return true;
    };
    FlatView.prototype.get = function (index) {
        return this.values[index];
    };
    FlatView.prototype.set = function (index, value) {
        return this.values[index] = value;
    };
    FlatView.prototype.toArray = function () {
        return this.values.subarray(0, this.length);
    };
    FlatView.prototype.indexOf = function (search) {
        var index = 0;
        try {
            for (var _a = tslib_1.__values(this), _b = _a.next(); !_b.done; _b = _a.next()) {
                var value = _b.value;
                if (value === search) {
                    return index;
                }
                ++index;
            }
        } catch (e_1_1) {
            e_1 = { error: e_1_1 };
        } finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            } finally {
                if (e_1) throw e_1.error;
            }
        }
        return -1;
        var e_1, _c;
    };
    FlatView.prototype[_iterator2.default] = function () {
        return (0, _getIterator3.default)(this.values.subarray(0, this.length));
    };
    return FlatView;
}();
exports.FlatView = FlatView;

var NullView = /** @class */function () {
    function NullView(data) {
        this.length = data.length;
    }
    NullView.prototype.clone = function (data) {
        return new this.constructor(data);
    };
    NullView.prototype.isValid = function () {
        return true;
    };
    NullView.prototype.set = function () {};
    NullView.prototype.get = function () {
        return null;
    };
    NullView.prototype.toArray = function () {
        return tslib_1.__spread(this);
    };
    NullView.prototype.indexOf = function (search) {
        // if you're looking for nulls and the view isn't empty, we've got 'em!
        return search === null && this.length > 0 ? 0 : -1;
    };
    NullView.prototype[_iterator2.default] = function () {
        var index, length_1;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    index = -1, length_1 = this.length;
                    _a.label = 1;
                case 1:
                    if (!(++index < length_1)) return [3 /*break*/, 4];
                    return [4 /*yield*/, null];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    return [3 /*break*/, 1];
                case 4:
                    return [2 /*return*/];
            }
        });
    };
    return NullView;
}();
exports.NullView = NullView;

var BoolView = /** @class */function (_super) {
    tslib_1.__extends(BoolView, _super);
    function BoolView(data) {
        var _this = _super.call(this, data) || this;
        _this.offset = data.offset;
        return _this;
    }
    BoolView.prototype.toArray = function () {
        return tslib_1.__spread(this);
    };
    BoolView.prototype.get = function (index) {
        var boolBitIndex = this.offset + index;
        return (0, _bit.getBool)(null, index, this.values[boolBitIndex >> 3], boolBitIndex % 8);
    };
    BoolView.prototype.set = function (index, value) {
        (0, _bit.setBool)(this.values, this.offset + index, value);
    };
    BoolView.prototype[_iterator2.default] = function () {
        return (0, _bit.iterateBits)(this.values, this.offset, this.length, this.values, _bit.getBool);
    };
    return BoolView;
}(FlatView);
exports.BoolView = BoolView;

var ValidityView = /** @class */function () {
    function ValidityView(data, view) {
        this.view = view;
        this.length = data.length;
        this.offset = data.offset;
        this.nullBitmap = data.nullBitmap;
    }
    ValidityView.prototype.clone = function (data) {
        return new ValidityView(data, this.view.clone(data));
    };
    ValidityView.prototype.toArray = function () {
        return tslib_1.__spread(this);
    };
    ValidityView.prototype.indexOf = function (search) {
        var index = 0;
        try {
            for (var _a = tslib_1.__values(this), _b = _a.next(); !_b.done; _b = _a.next()) {
                var value = _b.value;
                if (value === search) {
                    return index;
                }
                ++index;
            }
        } catch (e_2_1) {
            e_2 = { error: e_2_1 };
        } finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            } finally {
                if (e_2) throw e_2.error;
            }
        }
        return -1;
        var e_2, _c;
    };
    ValidityView.prototype.isValid = function (index) {
        var nullBitIndex = this.offset + index;
        return (0, _bit.getBool)(null, index, this.nullBitmap[nullBitIndex >> 3], nullBitIndex % 8);
    };
    ValidityView.prototype.get = function (index) {
        var nullBitIndex = this.offset + index;
        return this.getNullable(this.view, index, this.nullBitmap[nullBitIndex >> 3], nullBitIndex % 8);
    };
    ValidityView.prototype.set = function (index, value) {
        if ((0, _bit.setBool)(this.nullBitmap, this.offset + index, value != null)) {
            this.view.set(index, value);
        }
    };
    ValidityView.prototype[_iterator2.default] = function () {
        return (0, _bit.iterateBits)(this.nullBitmap, this.offset, this.length, this.view, this.getNullable);
    };
    ValidityView.prototype.getNullable = function (view, index, byte, bit) {
        return (0, _bit.getBool)(view, index, byte, bit) ? view.get(index) : null;
    };
    return ValidityView;
}();
exports.ValidityView = ValidityView;

var PrimitiveView = /** @class */function (_super) {
    tslib_1.__extends(PrimitiveView, _super);
    function PrimitiveView(data, size) {
        var _this = _super.call(this, data) || this;
        _this.size = size || 1;
        _this.ArrayType = data.type.ArrayType;
        return _this;
    }
    PrimitiveView.prototype.clone = function (data) {
        return new this.constructor(data, this.size);
    };
    PrimitiveView.prototype.getValue = function (values, index, size) {
        return values[index * size];
    };
    PrimitiveView.prototype.setValue = function (values, index, size, value) {
        values[index * size] = value;
    };
    PrimitiveView.prototype.get = function (index) {
        return this.getValue(this.values, index, this.size);
    };
    PrimitiveView.prototype.set = function (index, value) {
        return this.setValue(this.values, index, this.size, value);
    };
    PrimitiveView.prototype.toArray = function () {
        return this.size > 1 ? new this.ArrayType(this) : this.values.subarray(0, this.length);
    };
    PrimitiveView.prototype[_iterator2.default] = function () {
        var get, _a, size, values, length, index;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    get = this.getValue;
                    _a = this, size = _a.size, values = _a.values, length = _a.length;
                    index = -1;
                    _b.label = 1;
                case 1:
                    if (!(++index < length)) return [3 /*break*/, 4];
                    return [4 /*yield*/, get(values, index, size)];
                case 2:
                    _b.sent();
                    _b.label = 3;
                case 3:
                    return [3 /*break*/, 1];
                case 4:
                    return [2 /*return*/];
            }
        });
    };
    return PrimitiveView;
}(FlatView);
exports.PrimitiveView = PrimitiveView;

var FixedSizeView = /** @class */function (_super) {
    tslib_1.__extends(FixedSizeView, _super);
    function FixedSizeView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FixedSizeView.prototype.toArray = function () {
        return this.values;
    };
    FixedSizeView.prototype.indexOf = function (search) {
        var index = 0;
        try {
            for (var _a = tslib_1.__values(this), _b = _a.next(); !_b.done; _b = _a.next()) {
                var value = _b.value;
                if (value.every(function (d, i) {
                    return d === search[i];
                })) {
                    return index;
                }
                ++index;
            }
        } catch (e_3_1) {
            e_3 = { error: e_3_1 };
        } finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            } finally {
                if (e_3) throw e_3.error;
            }
        }
        return -1;
        var e_3, _c;
    };
    FixedSizeView.prototype.getValue = function (values, index, size) {
        return values.subarray(index * size, index * size + size);
    };
    FixedSizeView.prototype.setValue = function (values, index, size, value) {
        values.set(value.subarray(0, size), index * size);
    };
    return FixedSizeView;
}(PrimitiveView);
exports.FixedSizeView = FixedSizeView;

var Float16View = /** @class */function (_super) {
    tslib_1.__extends(Float16View, _super);
    function Float16View() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Float16View.prototype.toArray = function () {
        return new Float32Array(this);
    };
    Float16View.prototype.getValue = function (values, index, size) {
        return (values[index * size] - 32767) / 32767;
    };
    Float16View.prototype.setValue = function (values, index, size, value) {
        values[index * size] = value * 32767 + 32767;
    };
    return Float16View;
}(PrimitiveView);
exports.Float16View = Float16View;

var DateDayView = /** @class */function (_super) {
    tslib_1.__extends(DateDayView, _super);
    function DateDayView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DateDayView.prototype.toArray = function () {
        return tslib_1.__spread(this);
    };
    DateDayView.prototype.getValue = function (values, index, size) {
        return epochDaysToDate(values, index * size);
    };
    DateDayView.prototype.setValue = function (values, index, size, value) {
        values[index * size] = value.valueOf() / 86400000;
    };
    return DateDayView;
}(PrimitiveView);
exports.DateDayView = DateDayView;

var DateMillisecondView = /** @class */function (_super) {
    tslib_1.__extends(DateMillisecondView, _super);
    function DateMillisecondView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DateMillisecondView.prototype.toArray = function () {
        return tslib_1.__spread(this);
    };
    DateMillisecondView.prototype.getValue = function (values, index, size) {
        return epochMillisecondsLongToDate(values, index * size);
    };
    DateMillisecondView.prototype.setValue = function (values, index, size, value) {
        var epochMs = value.valueOf();
        values[index * size] = epochMs % 4294967296 | 0;
        values[index * size + size] = epochMs / 4294967296 | 0;
    };
    return DateMillisecondView;
}(FixedSizeView);
exports.DateMillisecondView = DateMillisecondView;

var TimestampDayView = /** @class */function (_super) {
    tslib_1.__extends(TimestampDayView, _super);
    function TimestampDayView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TimestampDayView.prototype.toArray = function () {
        return tslib_1.__spread(this);
    };
    TimestampDayView.prototype.getValue = function (values, index, size) {
        return epochDaysToMs(values, index * size);
    };
    TimestampDayView.prototype.setValue = function (values, index, size, epochMs) {
        values[index * size] = epochMs / 86400000 | 0;
    };
    return TimestampDayView;
}(PrimitiveView);
exports.TimestampDayView = TimestampDayView;

var TimestampSecondView = /** @class */function (_super) {
    tslib_1.__extends(TimestampSecondView, _super);
    function TimestampSecondView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TimestampSecondView.prototype.toArray = function () {
        return tslib_1.__spread(this);
    };
    TimestampSecondView.prototype.getValue = function (values, index, size) {
        return epochSecondsToMs(values, index * size);
    };
    TimestampSecondView.prototype.setValue = function (values, index, size, epochMs) {
        values[index * size] = epochMs / 1000 | 0;
    };
    return TimestampSecondView;
}(PrimitiveView);
exports.TimestampSecondView = TimestampSecondView;

var TimestampMillisecondView = /** @class */function (_super) {
    tslib_1.__extends(TimestampMillisecondView, _super);
    function TimestampMillisecondView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TimestampMillisecondView.prototype.toArray = function () {
        return tslib_1.__spread(this);
    };
    TimestampMillisecondView.prototype.getValue = function (values, index, size) {
        return epochMillisecondsLongToMs(values, index * size);
    };
    TimestampMillisecondView.prototype.setValue = function (values, index, size, epochMs) {
        values[index * size] = epochMs % 4294967296 | 0;
        values[index * size + size] = epochMs / 4294967296 | 0;
    };
    return TimestampMillisecondView;
}(PrimitiveView);
exports.TimestampMillisecondView = TimestampMillisecondView;

var TimestampMicrosecondView = /** @class */function (_super) {
    tslib_1.__extends(TimestampMicrosecondView, _super);
    function TimestampMicrosecondView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TimestampMicrosecondView.prototype.toArray = function () {
        return tslib_1.__spread(this);
    };
    TimestampMicrosecondView.prototype.getValue = function (values, index, size) {
        return epochMicrosecondsLongToMs(values, index * size);
    };
    TimestampMicrosecondView.prototype.setValue = function (values, index, size, epochMs) {
        values[index * size] = epochMs / 1000 % 4294967296 | 0;
        values[index * size + size] = epochMs / 1000 / 4294967296 | 0;
    };
    return TimestampMicrosecondView;
}(PrimitiveView);
exports.TimestampMicrosecondView = TimestampMicrosecondView;

var TimestampNanosecondView = /** @class */function (_super) {
    tslib_1.__extends(TimestampNanosecondView, _super);
    function TimestampNanosecondView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TimestampNanosecondView.prototype.toArray = function () {
        return tslib_1.__spread(this);
    };
    TimestampNanosecondView.prototype.getValue = function (values, index, size) {
        return epochNanosecondsLongToMs(values, index * size);
    };
    TimestampNanosecondView.prototype.setValue = function (values, index, size, epochMs) {
        values[index * size] = epochMs / 1000000 % 4294967296 | 0;
        values[index * size + size] = epochMs / 1000000 / 4294967296 | 0;
    };
    return TimestampNanosecondView;
}(PrimitiveView);
exports.TimestampNanosecondView = TimestampNanosecondView;

var IntervalYearMonthView = /** @class */function (_super) {
    tslib_1.__extends(IntervalYearMonthView, _super);
    function IntervalYearMonthView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IntervalYearMonthView.prototype.toArray = function () {
        return tslib_1.__spread(this);
    };
    IntervalYearMonthView.prototype.getValue = function (values, index, size) {
        var interval = values[index * size];
        return new Int32Array([interval / 12, /* years */interval % 12 /* months */]);
    };
    IntervalYearMonthView.prototype.setValue = function (values, index, size, value) {
        values[index * size] = value[0] * 12 + value[1] % 12;
    };
    return IntervalYearMonthView;
}(PrimitiveView);
exports.IntervalYearMonthView = IntervalYearMonthView;

var IntervalYearView = /** @class */function (_super) {
    tslib_1.__extends(IntervalYearView, _super);
    function IntervalYearView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IntervalYearView.prototype.toArray = function () {
        return tslib_1.__spread(this);
    };
    IntervalYearView.prototype.getValue = function (values, index, size) {
        return values[index * size] / 12;
    };
    IntervalYearView.prototype.setValue = function (values, index, size, value) {
        values[index * size] = value * 12 + values[index * size] % 12;
    };
    return IntervalYearView;
}(PrimitiveView);
exports.IntervalYearView = IntervalYearView;

var IntervalMonthView = /** @class */function (_super) {
    tslib_1.__extends(IntervalMonthView, _super);
    function IntervalMonthView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IntervalMonthView.prototype.toArray = function () {
        return tslib_1.__spread(this);
    };
    IntervalMonthView.prototype.getValue = function (values, index, size) {
        return values[index * size] % 12;
    };
    IntervalMonthView.prototype.setValue = function (values, index, size, value) {
        values[index * size] = values[index * size] * 12 + value % 12;
    };
    return IntervalMonthView;
}(PrimitiveView);
exports.IntervalMonthView = IntervalMonthView;
function epochSecondsToMs(data, index) {
    return 1000 * data[index];
}
function epochDaysToMs(data, index) {
    return 86400000 * data[index];
}
function epochMillisecondsLongToMs(data, index) {
    return 4294967296 * data[index + 1] + (data[index] >>> 0);
}
function epochMicrosecondsLongToMs(data, index) {
    return 4294967296 * (data[index + 1] / 1000) + (data[index] >>> 0) / 1000;
}
function epochNanosecondsLongToMs(data, index) {
    return 4294967296 * (data[index + 1] / 1000000) + (data[index] >>> 0) / 1000000;
}
function epochMillisecondsToDate(epochMs) {
    return new Date(epochMs);
}
function epochDaysToDate(data, index) {
    return epochMillisecondsToDate(epochDaysToMs(data, index));
}
function epochSecondsToDate(data, index) {
    return epochMillisecondsToDate(epochSecondsToMs(data, index));
}
function epochNanosecondsLongToDate(data, index) {
    return epochMillisecondsToDate(epochNanosecondsLongToMs(data, index));
}
function epochMillisecondsLongToDate(data, index) {
    return epochMillisecondsToDate(epochMillisecondsLongToMs(data, index));
}

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CustomPredicate = exports.Not = exports.GTeq = exports.LTeq = exports.Equals = exports.Or = exports.And = exports.CombinationPredicate = exports.ComparisonPredicate = exports.Predicate = exports.Col = exports.Literal = exports.Value = undefined;
exports.lit = lit;
exports.col = col;
exports.custom = custom;

var _tslib = __webpack_require__(0);

var tslib_1 = _interopRequireWildcard(_tslib);

var _vector = __webpack_require__(4);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.
var Value = /** @class */function () {
    function Value() {}
    Value.prototype.eq = function (other) {
        if (!(other instanceof Value)) {
            other = new Literal(other);
        }
        return new Equals(this, other);
    };
    Value.prototype.le = function (other) {
        if (!(other instanceof Value)) {
            other = new Literal(other);
        }
        return new LTeq(this, other);
    };
    Value.prototype.ge = function (other) {
        if (!(other instanceof Value)) {
            other = new Literal(other);
        }
        return new GTeq(this, other);
    };
    Value.prototype.lt = function (other) {
        return new Not(this.ge(other));
    };
    Value.prototype.gt = function (other) {
        return new Not(this.le(other));
    };
    Value.prototype.ne = function (other) {
        return new Not(this.eq(other));
    };
    return Value;
}();
exports.Value = Value;

var Literal = /** @class */function (_super) {
    tslib_1.__extends(Literal, _super);
    function Literal(v) {
        var _this = _super.call(this) || this;
        _this.v = v;
        return _this;
    }
    return Literal;
}(Value);
exports.Literal = Literal;

var Col = /** @class */function (_super) {
    tslib_1.__extends(Col, _super);
    function Col(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        return _this;
    }
    Col.prototype.bind = function (batch) {
        if (!this.colidx) {
            // Assume column index doesn't change between calls to bind
            //this.colidx = cols.findIndex(v => v.name.indexOf(this.name) != -1);
            this.colidx = -1;
            var fields = batch.schema.fields;
            for (var idx = -1; ++idx < fields.length;) {
                if (fields[idx].name === this.name) {
                    this.colidx = idx;
                    break;
                }
            }
            if (this.colidx < 0) {
                throw new Error("Failed to bind Col \"" + this.name + "\"");
            }
        }
        this.vector = batch.getChildAt(this.colidx);
        return this.vector.get.bind(this.vector);
    };
    return Col;
}(Value);
exports.Col = Col;

var Predicate = /** @class */function () {
    function Predicate() {}
    Predicate.prototype.and = function (expr) {
        return new And(this, expr);
    };
    Predicate.prototype.or = function (expr) {
        return new Or(this, expr);
    };
    Predicate.prototype.not = function () {
        return new Not(this);
    };
    Predicate.prototype.ands = function () {
        return [this];
    };
    return Predicate;
}();
exports.Predicate = Predicate;

var ComparisonPredicate = /** @class */function (_super) {
    tslib_1.__extends(ComparisonPredicate, _super);
    function ComparisonPredicate(left, right) {
        var _this = _super.call(this) || this;
        _this.left = left;
        _this.right = right;
        return _this;
    }
    ComparisonPredicate.prototype.bind = function (batch) {
        if (this.left instanceof Literal) {
            if (this.right instanceof Literal) {
                return this._bindLitLit(batch, this.left, this.right);
            } else {
                return this._bindLitCol(batch, this.left, this.right);
            }
        } else {
            if (this.right instanceof Literal) {
                return this._bindColLit(batch, this.left, this.right);
            } else {
                return this._bindColCol(batch, this.left, this.right);
            }
        }
    };
    return ComparisonPredicate;
}(Predicate);
exports.ComparisonPredicate = ComparisonPredicate;

var CombinationPredicate = /** @class */function (_super) {
    tslib_1.__extends(CombinationPredicate, _super);
    function CombinationPredicate(left, right) {
        var _this = _super.call(this) || this;
        _this.left = left;
        _this.right = right;
        return _this;
    }
    return CombinationPredicate;
}(Predicate);
exports.CombinationPredicate = CombinationPredicate;

var And = /** @class */function (_super) {
    tslib_1.__extends(And, _super);
    function And() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    And.prototype.bind = function (batch) {
        var left = this.left.bind(batch);
        var right = this.right.bind(batch);
        return function (idx, batch) {
            return left(idx, batch) && right(idx, batch);
        };
    };
    And.prototype.ands = function () {
        return this.left.ands().concat(this.right.ands());
    };
    return And;
}(CombinationPredicate);
exports.And = And;

var Or = /** @class */function (_super) {
    tslib_1.__extends(Or, _super);
    function Or() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Or.prototype.bind = function (batch) {
        var left = this.left.bind(batch);
        var right = this.right.bind(batch);
        return function (idx, batch) {
            return left(idx, batch) || right(idx, batch);
        };
    };
    return Or;
}(CombinationPredicate);
exports.Or = Or;

var Equals = /** @class */function (_super) {
    tslib_1.__extends(Equals, _super);
    function Equals() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Equals.prototype._bindLitLit = function (_batch, left, right) {
        var rtrn = left.v == right.v;
        return function () {
            return rtrn;
        };
    };
    Equals.prototype._bindColCol = function (batch, left, right) {
        var left_func = left.bind(batch);
        var right_func = right.bind(batch);
        return function (idx, batch) {
            return left_func(idx, batch) == right_func(idx, batch);
        };
    };
    Equals.prototype._bindColLit = function (batch, col, lit) {
        var col_func = col.bind(batch);
        if (col.vector instanceof _vector.DictionaryVector) {
            var key_1;
            var vector_1 = col.vector;
            if (vector_1.dictionary !== this.lastDictionary) {
                key_1 = vector_1.reverseLookup(lit.v);
                this.lastDictionary = vector_1.dictionary;
                this.lastKey = key_1;
            } else {
                key_1 = this.lastKey;
            }
            if (key_1 === -1) {
                // the value doesn't exist in the dictionary - always return
                // false
                // TODO: special-case of PredicateFunc that encapsulates this
                // "always false" behavior. That way filtering operations don't
                // have to bother checking
                return function () {
                    return false;
                };
            } else {
                return function (idx) {
                    return vector_1.getKey(idx) === key_1;
                };
            }
        } else {
            return function (idx, cols) {
                return col_func(idx, cols) == lit.v;
            };
        }
    };
    Equals.prototype._bindLitCol = function (batch, lit, col) {
        // Equals is comutative
        return this._bindColLit(batch, col, lit);
    };
    return Equals;
}(ComparisonPredicate);
exports.Equals = Equals;

var LTeq = /** @class */function (_super) {
    tslib_1.__extends(LTeq, _super);
    function LTeq() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LTeq.prototype._bindLitLit = function (_batch, left, right) {
        var rtrn = left.v <= right.v;
        return function () {
            return rtrn;
        };
    };
    LTeq.prototype._bindColCol = function (batch, left, right) {
        var left_func = left.bind(batch);
        var right_func = right.bind(batch);
        return function (idx, cols) {
            return left_func(idx, cols) <= right_func(idx, cols);
        };
    };
    LTeq.prototype._bindColLit = function (batch, col, lit) {
        var col_func = col.bind(batch);
        return function (idx, cols) {
            return col_func(idx, cols) <= lit.v;
        };
    };
    LTeq.prototype._bindLitCol = function (batch, lit, col) {
        var col_func = col.bind(batch);
        return function (idx, cols) {
            return lit.v <= col_func(idx, cols);
        };
    };
    return LTeq;
}(ComparisonPredicate);
exports.LTeq = LTeq;

var GTeq = /** @class */function (_super) {
    tslib_1.__extends(GTeq, _super);
    function GTeq() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GTeq.prototype._bindLitLit = function (_batch, left, right) {
        var rtrn = left.v >= right.v;
        return function () {
            return rtrn;
        };
    };
    GTeq.prototype._bindColCol = function (batch, left, right) {
        var left_func = left.bind(batch);
        var right_func = right.bind(batch);
        return function (idx, cols) {
            return left_func(idx, cols) >= right_func(idx, cols);
        };
    };
    GTeq.prototype._bindColLit = function (batch, col, lit) {
        var col_func = col.bind(batch);
        return function (idx, cols) {
            return col_func(idx, cols) >= lit.v;
        };
    };
    GTeq.prototype._bindLitCol = function (batch, lit, col) {
        var col_func = col.bind(batch);
        return function (idx, cols) {
            return lit.v >= col_func(idx, cols);
        };
    };
    return GTeq;
}(ComparisonPredicate);
exports.GTeq = GTeq;

var Not = /** @class */function (_super) {
    tslib_1.__extends(Not, _super);
    function Not(child) {
        var _this = _super.call(this) || this;
        _this.child = child;
        return _this;
    }
    Not.prototype.bind = function (batch) {
        var func = this.child.bind(batch);
        return function (idx, batch) {
            return !func(idx, batch);
        };
    };
    return Not;
}(Predicate);
exports.Not = Not;

var CustomPredicate = /** @class */function (_super) {
    tslib_1.__extends(CustomPredicate, _super);
    function CustomPredicate(next, bind_) {
        var _this = _super.call(this) || this;
        _this.next = next;
        _this.bind_ = bind_;
        return _this;
    }
    CustomPredicate.prototype.bind = function (batch) {
        this.bind_(batch);
        return this.next;
    };
    return CustomPredicate;
}(Predicate);
exports.CustomPredicate = CustomPredicate;
function lit(v) {
    return new Literal(v);
}
function col(n) {
    return new Col(n);
}
function custom(next, bind) {
    return new CustomPredicate(next, bind);
}

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.readRecordBatchesAsync = exports.readRecordBatches = exports.readBuffersAsync = exports.readBuffers = exports.RecordBatch = exports.readJSON = undefined;

var _iterator = __webpack_require__(2);

var _iterator2 = _interopRequireDefault(_iterator);

var _typeof2 = __webpack_require__(25);

var _typeof3 = _interopRequireDefault(_typeof2);

exports.read = read;
exports.readAsync = readAsync;

var _tslib = __webpack_require__(0);

var tslib_1 = _interopRequireWildcard(_tslib);

var _json = __webpack_require__(55);

var _recordbatch = __webpack_require__(16);

var _binary = __webpack_require__(58);

var _vector = __webpack_require__(17);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.readJSON = _json.readJSON;
exports.RecordBatch = _recordbatch.RecordBatch; // Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.

exports.readBuffers = _binary.readBuffers;
exports.readBuffersAsync = _binary.readBuffersAsync;
exports.readRecordBatches = _vector.readRecordBatches;
exports.readRecordBatchesAsync = _vector.readRecordBatchesAsync;
function read(sources) {
    var input, messages;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                input = sources;
                if (typeof input === 'string') {
                    try {
                        input = JSON.parse(input);
                    } catch (e) {
                        input = sources;
                    }
                }
                if (!input || (typeof input === 'undefined' ? 'undefined' : (0, _typeof3.default)(input)) !== 'object') {
                    messages = typeof input === 'string' ? (0, _binary.readBuffers)([input]) : [];
                } else {
                    messages = typeof input[_iterator2.default] === 'function' ? (0, _binary.readBuffers)(input) : (0, _json.readJSON)(input);
                }
                return [5 /*yield**/, tslib_1.__values((0, _vector.readRecordBatches)(messages))];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
function readAsync(sources) {
    return tslib_1.__asyncGenerator(this, arguments, function readAsync_1() {
        var _a, _b, recordBatch, e_1_1, e_1, _c;
        return tslib_1.__generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _d.trys.push([0, 7, 8, 13]);
                    _a = tslib_1.__asyncValues((0, _vector.readRecordBatchesAsync)((0, _binary.readBuffersAsync)(sources)));
                    _d.label = 1;
                case 1:
                    return [4 /*yield*/, tslib_1.__await(_a.next())];
                case 2:
                    if (!(_b = _d.sent(), !_b.done)) return [3 /*break*/, 6];
                    return [4 /*yield*/, tslib_1.__await(_b.value)];
                case 3:
                    recordBatch = _d.sent();
                    return [4 /*yield*/, recordBatch];
                case 4:
                    _d.sent();
                    _d.label = 5;
                case 5:
                    return [3 /*break*/, 1];
                case 6:
                    return [3 /*break*/, 13];
                case 7:
                    e_1_1 = _d.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 13];
                case 8:
                    _d.trys.push([8,, 11, 12]);
                    if (!(_b && !_b.done && (_c = _a.return))) return [3 /*break*/, 10];
                    return [4 /*yield*/, tslib_1.__await(_c.call(_a))];
                case 9:
                    _d.sent();
                    _d.label = 10;
                case 10:
                    return [3 /*break*/, 12];
                case 11:
                    if (e_1) throw e_1.error;
                    return [7 /*endfinally*/];
                case 12:
                    return [7 /*endfinally*/];
                case 13:
                    return [2 /*return*/];
            }
        });
    });
}

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.JSONDataLoader = undefined;

var _entries = __webpack_require__(56);

var _entries2 = _interopRequireDefault(_entries);

var _map = __webpack_require__(14);

var _map2 = _interopRequireDefault(_map);

exports.readJSON = readJSON;

var _tslib = __webpack_require__(0);

var tslib_1 = _interopRequireWildcard(_tslib);

var _flatbuffers = __webpack_require__(15);

var _vector = __webpack_require__(17);

var _bit = __webpack_require__(6);

var _int = __webpack_require__(57);

var IntUtil = _interopRequireWildcard(_int);

var _textEncodingUtf = __webpack_require__(30);

var _metadata = __webpack_require__(7);

var _type2 = __webpack_require__(1);

var _Schema = __webpack_require__(5);

var Schema_ = _interopRequireWildcard(_Schema);

var _data = __webpack_require__(9);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Long = _flatbuffers.flatbuffers.Long; // Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.
function readJSON(json) {
    var schema, dictionaries, _a, _b, batch, message, e_1_1, _c, _d, batch, message, e_2_1, e_1, _e, e_2, _f;
    return tslib_1.__generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                schema = schemaFromJSON(json['schema']);
                dictionaries = new _map2.default();
                _g.label = 1;
            case 1:
                _g.trys.push([1, 6, 7, 8]);
                _a = tslib_1.__values(json['dictionaries'] || []), _b = _a.next();
                _g.label = 2;
            case 2:
                if (!!_b.done) return [3 /*break*/, 5];
                batch = _b.value;
                message = dictionaryBatchFromJSON(batch);
                return [4 /*yield*/, {
                    schema: schema, message: message,
                    loader: new JSONDataLoader(flattenDataSources(batch['data']['columns']), arrayIterator(message.nodes), arrayIterator(message.buffers), dictionaries)
                }];
            case 3:
                _g.sent();
                _g.label = 4;
            case 4:
                _b = _a.next();
                return [3 /*break*/, 2];
            case 5:
                return [3 /*break*/, 8];
            case 6:
                e_1_1 = _g.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 8];
            case 7:
                try {
                    if (_b && !_b.done && (_e = _a.return)) _e.call(_a);
                } finally {
                    if (e_1) throw e_1.error;
                }
                return [7 /*endfinally*/];
            case 8:
                _g.trys.push([8, 13, 14, 15]);
                _c = tslib_1.__values(json['batches'] || []), _d = _c.next();
                _g.label = 9;
            case 9:
                if (!!_d.done) return [3 /*break*/, 12];
                batch = _d.value;
                message = recordBatchFromJSON(batch);
                return [4 /*yield*/, {
                    schema: schema, message: message,
                    loader: new JSONDataLoader(flattenDataSources(batch['columns']), arrayIterator(message.nodes), arrayIterator(message.buffers), dictionaries)
                }];
            case 10:
                _g.sent();
                _g.label = 11;
            case 11:
                _d = _c.next();
                return [3 /*break*/, 9];
            case 12:
                return [3 /*break*/, 15];
            case 13:
                e_2_1 = _g.sent();
                e_2 = { error: e_2_1 };
                return [3 /*break*/, 15];
            case 14:
                try {
                    if (_d && !_d.done && (_f = _c.return)) _f.call(_c);
                } finally {
                    if (e_2) throw e_2.error;
                }
                return [7 /*endfinally*/];
            case 15:
                return [2 /*return*/];
        }
    });
}
function arrayIterator(arr) {
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                return [5 /*yield**/, tslib_1.__values(arr)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
function flattenDataSources(xs) {
    return (xs || []).reduce(function (buffers, column) {
        return tslib_1.__spread(buffers, column['VALIDITY'] && [column['VALIDITY']] || [], column['OFFSET'] && [column['OFFSET']] || [], column['DATA'] && [column['DATA']] || [], flattenDataSources(column['children']));
    }, []);
}
var utf8Encoder = new _textEncodingUtf.TextEncoder('utf-8');
var JSONDataLoader = /** @class */function (_super) {
    tslib_1.__extends(JSONDataLoader, _super);
    function JSONDataLoader(sources, nodes, buffers, dictionaries) {
        var _this = _super.call(this, nodes, buffers, dictionaries) || this;
        _this.sources = sources;
        return _this;
    }
    JSONDataLoader.prototype.readNullBitmap = function (_type, nullCount, _a) {
        var offset = (_a === void 0 ? this.getBufferMetadata() : _a).offset;
        return nullCount <= 0 ? new Uint8Array(0) : (0, _bit.packBools)(this.sources[offset]);
    };
    JSONDataLoader.prototype.readOffsets = function (_type, _a) {
        var offset = (_a === void 0 ? this.getBufferMetadata() : _a).offset;
        return new Int32Array(this.sources[offset]);
    };
    JSONDataLoader.prototype.readTypeIds = function (_type, _a) {
        var offset = (_a === void 0 ? this.getBufferMetadata() : _a).offset;
        return new Int8Array(this.sources[offset]);
    };
    JSONDataLoader.prototype.readData = function (type, _a) {
        var offset = (_a === void 0 ? this.getBufferMetadata() : _a).offset;
        var sources = this.sources;
        if (_type2.DataType.isTimestamp(type) === true) {
            return new Uint8Array(int64DataFromJSON(sources[offset]));
        } else if ((_type2.DataType.isInt(type) || _type2.DataType.isTime(type)) && type.bitWidth === 64) {
            return new Uint8Array(int64DataFromJSON(sources[offset]));
        } else if (_type2.DataType.isDate(type) && type.unit === DateUnit.MILLISECOND) {
            return new Uint8Array(int64DataFromJSON(sources[offset]));
        } else if (_type2.DataType.isDecimal(type) === true) {
            return new Uint8Array(decimalDataFromJSON(sources[offset]));
        } else if (_type2.DataType.isBinary(type) === true) {
            return new Uint8Array(binaryDataFromJSON(sources[offset]));
        } else if (_type2.DataType.isBool(type) === true) {
            return new Uint8Array((0, _bit.packBools)(sources[offset]).buffer);
        } else if (_type2.DataType.isUtf8(type) === true) {
            return utf8Encoder.encode(sources[offset].join(''));
        } else {
            return (0, _data.toTypedArray)(type.ArrayType, sources[offset].map(function (x) {
                return +x;
            }));
        }
    };
    return JSONDataLoader;
}(_vector.TypeDataLoader);
exports.JSONDataLoader = JSONDataLoader;

function int64DataFromJSON(values) {
    var data = new Uint32Array(values.length * 2);
    for (var i = -1, n = values.length; ++i < n;) {
        // Force all values (even numbers) to be parsed as strings since
        // pulling out high and low bits seems to lose precision sometimes
        // For example:
        //     > -4613034156400212000 >>> 0
        //     721782784
        // The correct lower 32-bits are 721782752
        IntUtil.Int64.fromString(values[i].toString(), new Uint32Array(data.buffer, data.byteOffset + 2 * i * 4, 2));
    }
    return data.buffer;
}
function decimalDataFromJSON(values) {
    var data = new Uint32Array(values.length * 4);
    for (var i = -1, n = values.length; ++i < n;) {
        IntUtil.Int128.fromString(values[i], new Uint32Array(data.buffer, data.byteOffset + 4 * 4 * i, 4));
    }
    return data.buffer;
}
function binaryDataFromJSON(values) {
    // "DATA": ["49BC7D5B6C47D2","3F5FB6D9322026"]
    // There are definitely more efficient ways to do this... but it gets the
    // job done.
    var joined = values.join('');
    var data = new Uint8Array(joined.length / 2);
    for (var i = 0; i < joined.length; i += 2) {
        data[i >> 1] = parseInt(joined.substr(i, 2), 16);
    }
    return data.buffer;
}

var Type = Schema_.org.apache.arrow.flatbuf.Type;
var DateUnit = Schema_.org.apache.arrow.flatbuf.DateUnit;
var TimeUnit = Schema_.org.apache.arrow.flatbuf.TimeUnit;
var Precision = Schema_.org.apache.arrow.flatbuf.Precision;
var IntervalUnit = Schema_.org.apache.arrow.flatbuf.IntervalUnit;
var MetadataVersion = Schema_.org.apache.arrow.flatbuf.MetadataVersion;

function schemaFromJSON(s) {
    var dictionaryFields = new _map2.default();
    return new _type2.Schema(fieldsFromJSON(s['fields'], dictionaryFields), customMetadata(s['customMetadata']), MetadataVersion.V4, dictionaryFields);
}
function recordBatchFromJSON(b) {
    return new _metadata.RecordBatchMetadata(MetadataVersion.V4, b['count'], fieldNodesFromJSON(b['columns']), buffersFromJSON(b['columns']));
}
function dictionaryBatchFromJSON(b) {
    return new _metadata.DictionaryBatch(MetadataVersion.V4, recordBatchFromJSON(b['data']), b['id'], b['isDelta']);
}
function fieldsFromJSON(fs, dictionaryFields) {
    return (fs || []).map(function (f) {
        return fieldFromJSON(f, dictionaryFields);
    }).filter(function (f) {
        return f != null;
    });
}
function fieldNodesFromJSON(xs) {
    return (xs || []).reduce(function (fieldNodes, column) {
        return tslib_1.__spread(fieldNodes, [new _metadata.FieldMetadata(new Long(column['count'], 0), new Long(nullCountFromJSON(column['VALIDITY']), 0))], fieldNodesFromJSON(column['children']));
    }, []);
}
function buffersFromJSON(xs, buffers) {
    if (buffers === void 0) {
        buffers = [];
    }
    for (var i = -1, n = (xs || []).length; ++i < n;) {
        var column = xs[i];
        column['VALIDITY'] && buffers.push(new _metadata.BufferMetadata(new Long(buffers.length, 0), new Long(column['VALIDITY'].length, 0)));
        column['OFFSET'] && buffers.push(new _metadata.BufferMetadata(new Long(buffers.length, 0), new Long(column['OFFSET'].length, 0)));
        column['DATA'] && buffers.push(new _metadata.BufferMetadata(new Long(buffers.length, 0), new Long(column['DATA'].length, 0)));
        buffers = buffersFromJSON(column['children'], buffers);
    }
    return buffers;
}
function nullCountFromJSON(validity) {
    return (validity || []).reduce(function (sum, val) {
        return sum + +(val === 0);
    }, 0);
}
function fieldFromJSON(f, dictionaryFields) {
    var name = f['name'];
    var field;
    var nullable = f['nullable'];
    var dataType;
    var id, keysMeta, dictMeta;
    var metadata = customMetadata(f['customMetadata']);
    if (!dictionaryFields || !(dictMeta = f['dictionary'])) {
        if (dataType = typeFromJSON(f['type'], fieldsFromJSON(f['children'], dictionaryFields))) {
            field = new _type2.Field(name, dataType, nullable, metadata);
        }
    } else if (dataType = dictionaryFields.has(id = dictMeta['id']) ? dictionaryFields.get(id).type.dictionary : typeFromJSON(f['type'], fieldsFromJSON(f['children'], null))) {
        dataType = new _type2.Dictionary(dataType,
        // a dictionary index defaults to signed 32 bit int if unspecified
        (keysMeta = dictMeta['indexType']) ? intFromJSON(keysMeta) : new _type2.Int32(), id, dictMeta['isOrdered']);
        field = new _type2.Field(name, dataType, nullable, metadata);
        dictionaryFields.has(id) || dictionaryFields.set(id, field);
    }
    return field || null;
}
function customMetadata(metadata) {
    return new _map2.default((0, _entries2.default)(metadata || {}));
}
var namesToTypeMap = {
    'NONE': Type.NONE,
    'null': Type.Null,
    'int': Type.Int,
    'floatingpoint': Type.FloatingPoint,
    'binary': Type.Binary,
    'bool': Type.Bool,
    'utf8': Type.Utf8,
    'decimal': Type.Decimal,
    'date': Type.Date,
    'time': Type.Time,
    'timestamp': Type.Timestamp,
    'interval': Type.Interval,
    'list': Type.List,
    'struct': Type.Struct_,
    'union': Type.Union,
    'fixedsizebinary': Type.FixedSizeBinary,
    'fixedsizelist': Type.FixedSizeList,
    'map': Type.Map
};
function typeFromJSON(t, children) {
    switch (namesToTypeMap[t['name']]) {
        case Type.NONE:
            return null;
        case Type.Null:
            return nullFromJSON(t);
        case Type.Int:
            return intFromJSON(t);
        case Type.FloatingPoint:
            return floatingPointFromJSON(t);
        case Type.Binary:
            return binaryFromJSON(t);
        case Type.Utf8:
            return utf8FromJSON(t);
        case Type.Bool:
            return boolFromJSON(t);
        case Type.Decimal:
            return decimalFromJSON(t);
        case Type.Date:
            return dateFromJSON(t);
        case Type.Time:
            return timeFromJSON(t);
        case Type.Timestamp:
            return timestampFromJSON(t);
        case Type.Interval:
            return intervalFromJSON(t);
        case Type.List:
            return listFromJSON(t, children || []);
        case Type.Struct_:
            return structFromJSON(t, children || []);
        case Type.Union:
            return unionFromJSON(t, children || []);
        case Type.FixedSizeBinary:
            return fixedSizeBinaryFromJSON(t);
        case Type.FixedSizeList:
            return fixedSizeListFromJSON(t, children || []);
        case Type.Map:
            return mapFromJSON(t, children || []);
    }
    throw new Error("Unrecognized type " + t['name']);
}
function nullFromJSON(_type) {
    return new _type2.Null();
}
function intFromJSON(_type) {
    switch (_type['bitWidth']) {
        case 8:
            return _type['isSigned'] ? new _type2.Int8() : new _type2.Uint8();
        case 16:
            return _type['isSigned'] ? new _type2.Int16() : new _type2.Uint16();
        case 32:
            return _type['isSigned'] ? new _type2.Int32() : new _type2.Uint32();
        case 64:
            return _type['isSigned'] ? new _type2.Int64() : new _type2.Uint64();
    }
    return null;
}
function floatingPointFromJSON(_type) {
    switch (Precision[_type['precision']]) {
        case Precision.HALF:
            return new _type2.Float16();
        case Precision.SINGLE:
            return new _type2.Float32();
        case Precision.DOUBLE:
            return new _type2.Float64();
    }
    return null;
}
function binaryFromJSON(_type) {
    return new _type2.Binary();
}
function utf8FromJSON(_type) {
    return new _type2.Utf8();
}
function boolFromJSON(_type) {
    return new _type2.Bool();
}
function decimalFromJSON(_type) {
    return new _type2.Decimal(_type['scale'], _type['precision']);
}
function dateFromJSON(_type) {
    return new _type2.Date_(DateUnit[_type['unit']]);
}
function timeFromJSON(_type) {
    return new _type2.Time(TimeUnit[_type['unit']], _type['bitWidth']);
}
function timestampFromJSON(_type) {
    return new _type2.Timestamp(TimeUnit[_type['unit']], _type['timezone']);
}
function intervalFromJSON(_type) {
    return new _type2.Interval(IntervalUnit[_type['unit']]);
}
function listFromJSON(_type, children) {
    return new _type2.List(children);
}
function structFromJSON(_type, children) {
    return new _type2.Struct(children);
}
function unionFromJSON(_type, children) {
    return new _type2.Union(_type['mode'], _type['typeIdsArray'] || [], children);
}
function fixedSizeBinaryFromJSON(_type) {
    return new _type2.FixedSizeBinary(_type['byteWidth']);
}
function fixedSizeListFromJSON(_type, children) {
    return new _type2.FixedSizeList(_type['listSize'], children);
}
function mapFromJSON(_type, children) {
    return new _type2.Map_(_type['keysSorted'], children);
}

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_56__;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Int128 = exports.Int64 = exports.Uint64 = exports.BaseInt64 = undefined;

var _tslib = __webpack_require__(0);

var tslib_1 = _interopRequireWildcard(_tslib);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var carryBit16 = 1 << 16; // Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.

function intAsHex(value) {
    if (value < 0) {
        value = 0xFFFFFFFF + value + 1;
    }
    return "0x" + value.toString(16);
}
var kInt32DecimalDigits = 8;
var kPowersOfTen = [1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000];
var BaseInt64 = /** @class */function () {
    function BaseInt64(buffer) {
        this.buffer = buffer;
    }
    BaseInt64.prototype.high = function () {
        return this.buffer[1];
    };
    BaseInt64.prototype.low = function () {
        return this.buffer[0];
    };
    BaseInt64.prototype._times = function (other) {
        // Break the left and right numbers into 16 bit chunks
        // so that we can multiply them without overflow.
        var L = new Uint32Array([this.buffer[1] >>> 16, this.buffer[1] & 0xFFFF, this.buffer[0] >>> 16, this.buffer[0] & 0xFFFF]);
        var R = new Uint32Array([other.buffer[1] >>> 16, other.buffer[1] & 0xFFFF, other.buffer[0] >>> 16, other.buffer[0] & 0xFFFF]);
        var product = L[3] * R[3];
        this.buffer[0] = product & 0xFFFF;
        var sum = product >>> 16;
        product = L[2] * R[3];
        sum += product;
        product = L[3] * R[2] >>> 0;
        sum += product;
        this.buffer[0] += sum << 16;
        this.buffer[1] = sum >>> 0 < product ? carryBit16 : 0;
        this.buffer[1] += sum >>> 16;
        this.buffer[1] += L[1] * R[3] + L[2] * R[2] + L[3] * R[1];
        this.buffer[1] += L[0] * R[3] + L[1] * R[2] + L[2] * R[1] + L[3] * R[0] << 16;
        return this;
    };
    BaseInt64.prototype._plus = function (other) {
        var sum = this.buffer[0] + other.buffer[0] >>> 0;
        this.buffer[1] += other.buffer[1];
        if (sum < this.buffer[0] >>> 0) {
            ++this.buffer[1];
        }
        this.buffer[0] = sum;
    };
    BaseInt64.prototype.lessThan = function (other) {
        return this.buffer[1] < other.buffer[1] || this.buffer[1] === other.buffer[1] && this.buffer[0] < other.buffer[0];
    };
    BaseInt64.prototype.equals = function (other) {
        return this.buffer[1] === other.buffer[1] && this.buffer[0] == other.buffer[0];
    };
    BaseInt64.prototype.greaterThan = function (other) {
        return other.lessThan(this);
    };
    BaseInt64.prototype.hex = function () {
        return intAsHex(this.buffer[1]) + " " + intAsHex(this.buffer[0]);
    };
    return BaseInt64;
}();
exports.BaseInt64 = BaseInt64;

var Uint64 = /** @class */function (_super) {
    tslib_1.__extends(Uint64, _super);
    function Uint64() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Uint64.prototype.times = function (other) {
        this._times(other);
        return this;
    };
    Uint64.prototype.plus = function (other) {
        this._plus(other);
        return this;
    };
    Uint64.multiply = function (left, right) {
        var rtrn = new Uint64(new Uint32Array(left.buffer));
        return rtrn.times(right);
    };
    Uint64.add = function (left, right) {
        var rtrn = new Uint64(new Uint32Array(left.buffer));
        return rtrn.plus(right);
    };
    return Uint64;
}(BaseInt64);
exports.Uint64 = Uint64;

var Int64 = /** @class */function (_super) {
    tslib_1.__extends(Int64, _super);
    function Int64() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Int64.prototype.negate = function () {
        this.buffer[0] = ~this.buffer[0] + 1;
        this.buffer[1] = ~this.buffer[1];
        if (this.buffer[0] == 0) {
            ++this.buffer[1];
        }
        return this;
    };
    Int64.prototype.times = function (other) {
        this._times(other);
        return this;
    };
    Int64.prototype.plus = function (other) {
        this._plus(other);
        return this;
    };
    Int64.prototype.lessThan = function (other) {
        // force high bytes to be signed
        var this_high = this.buffer[1] << 0;
        var other_high = other.buffer[1] << 0;
        return this_high < other_high || this_high === other_high && this.buffer[0] < other.buffer[0];
    };
    Int64.fromString = function (str, out_buffer) {
        if (out_buffer === void 0) {
            out_buffer = new Uint32Array(2);
        }
        // TODO: Assert that out_buffer is 0 and length = 2
        var negate = str.startsWith('-');
        var length = str.length;
        var out = new Int64(out_buffer);
        for (var posn = negate ? 1 : 0; posn < length;) {
            var group = kInt32DecimalDigits < length - posn ? kInt32DecimalDigits : length - posn;
            var chunk = new Int64(new Uint32Array([parseInt(str.substr(posn, group), 10), 0]));
            var multiple = new Int64(new Uint32Array([kPowersOfTen[group], 0]));
            out.times(multiple);
            out.plus(chunk);
            posn += group;
        }
        return negate ? out.negate() : out;
    };
    Int64.multiply = function (left, right) {
        var rtrn = new Int64(new Uint32Array(left.buffer));
        return rtrn.times(right);
    };
    Int64.add = function (left, right) {
        var rtrn = new Int64(new Uint32Array(left.buffer));
        return rtrn.plus(right);
    };
    return Int64;
}(BaseInt64);
exports.Int64 = Int64;

var Int128 = /** @class */function () {
    function Int128(buffer) {
        this.buffer = buffer;
        // buffer[3] MSB (high)
        // buffer[2]
        // buffer[1]
        // buffer[0] LSB (low)
    }
    Int128.prototype.high = function () {
        return new Int64(new Uint32Array(this.buffer.buffer, this.buffer.byteOffset + 8, 2));
    };
    Int128.prototype.low = function () {
        return new Int64(new Uint32Array(this.buffer.buffer, this.buffer.byteOffset, 2));
    };
    Int128.prototype.negate = function () {
        this.buffer[0] = ~this.buffer[0] + 1;
        this.buffer[1] = ~this.buffer[1];
        this.buffer[2] = ~this.buffer[2];
        this.buffer[3] = ~this.buffer[3];
        if (this.buffer[0] == 0) {
            ++this.buffer[1];
        }
        if (this.buffer[1] == 0) {
            ++this.buffer[2];
        }
        if (this.buffer[2] == 0) {
            ++this.buffer[3];
        }
        return this;
    };
    Int128.prototype.times = function (other) {
        // Break the left and right numbers into 32 bit chunks
        // so that we can multiply them without overflow.
        var L0 = new Uint64(new Uint32Array([this.buffer[3], 0]));
        var L1 = new Uint64(new Uint32Array([this.buffer[2], 0]));
        var L2 = new Uint64(new Uint32Array([this.buffer[1], 0]));
        var L3 = new Uint64(new Uint32Array([this.buffer[0], 0]));
        var R0 = new Uint64(new Uint32Array([other.buffer[3], 0]));
        var R1 = new Uint64(new Uint32Array([other.buffer[2], 0]));
        var R2 = new Uint64(new Uint32Array([other.buffer[1], 0]));
        var R3 = new Uint64(new Uint32Array([other.buffer[0], 0]));
        var product = Uint64.multiply(L3, R3);
        this.buffer[0] = product.low();
        var sum = new Uint64(new Uint32Array([product.high(), 0]));
        product = Uint64.multiply(L2, R3);
        sum.plus(product);
        product = Uint64.multiply(L3, R2);
        sum.plus(product);
        this.buffer[1] = sum.low();
        this.buffer[3] = sum.lessThan(product) ? 1 : 0;
        this.buffer[2] = sum.high();
        var high = new Uint64(new Uint32Array(this.buffer.buffer, this.buffer.byteOffset + 8, 2));
        high.plus(Uint64.multiply(L1, R3)).plus(Uint64.multiply(L2, R2)).plus(Uint64.multiply(L3, R1));
        this.buffer[3] += Uint64.multiply(L0, R3).plus(Uint64.multiply(L1, R2)).plus(Uint64.multiply(L2, R1)).plus(Uint64.multiply(L3, R0)).low();
        return this;
    };
    Int128.prototype.plus = function (other) {
        var sums = new Uint32Array(4);
        sums[3] = this.buffer[3] + other.buffer[3] >>> 0;
        sums[2] = this.buffer[2] + other.buffer[2] >>> 0;
        sums[1] = this.buffer[1] + other.buffer[1] >>> 0;
        sums[0] = this.buffer[0] + other.buffer[0] >>> 0;
        if (sums[0] < this.buffer[0] >>> 0) {
            ++sums[1];
        }
        if (sums[1] < this.buffer[1] >>> 0) {
            ++sums[2];
        }
        if (sums[2] < this.buffer[2] >>> 0) {
            ++sums[3];
        }
        this.buffer[3] = sums[3];
        this.buffer[2] = sums[2];
        this.buffer[1] = sums[1];
        this.buffer[0] = sums[0];
        return this;
    };
    Int128.prototype.hex = function () {
        return intAsHex(this.buffer[3]) + " " + intAsHex(this.buffer[2]) + " " + intAsHex(this.buffer[1]) + " " + intAsHex(this.buffer[0]);
    };
    Int128.multiply = function (left, right) {
        var rtrn = new Int128(new Uint32Array(left.buffer));
        return rtrn.times(right);
    };
    Int128.add = function (left, right) {
        var rtrn = new Int128(new Uint32Array(left.buffer));
        return rtrn.plus(right);
    };
    Int128.fromString = function (str, out_buffer) {
        if (out_buffer === void 0) {
            out_buffer = new Uint32Array(4);
        }
        // TODO: Assert that out_buffer is 0 and length = 4
        var negate = str.startsWith('-');
        var length = str.length;
        var out = new Int128(out_buffer);
        for (var posn = negate ? 1 : 0; posn < length;) {
            var group = kInt32DecimalDigits < length - posn ? kInt32DecimalDigits : length - posn;
            var chunk = new Int128(new Uint32Array([parseInt(str.substr(posn, group), 10), 0, 0, 0]));
            var multiple = new Int128(new Uint32Array([kPowersOfTen[group], 0, 0, 0]));
            out.times(multiple);
            out.plus(chunk);
            posn += group;
        }
        return negate ? out.negate() : out;
    };
    return Int128;
}();
exports.Int128 = Int128;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BinaryDataLoader = undefined;

var _map = __webpack_require__(14);

var _map2 = _interopRequireDefault(_map);

exports.readBuffers = readBuffers;
exports.readBuffersAsync = readBuffersAsync;

var _tslib = __webpack_require__(0);

var tslib_1 = _interopRequireWildcard(_tslib);

var _flatbuffers = __webpack_require__(15);

var _vector = __webpack_require__(17);

var _metadata = __webpack_require__(7);

var _type2 = __webpack_require__(1);

var _File = __webpack_require__(59);

var File_ = _interopRequireWildcard(_File);

var _Schema2 = __webpack_require__(5);

var Schema_ = _interopRequireWildcard(_Schema2);

var _Message2 = __webpack_require__(28);

var Message_ = _interopRequireWildcard(_Message2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.
var ByteBuffer = _flatbuffers.flatbuffers.ByteBuffer;
function readBuffers(sources) {
    var schema, dictionaries, readMessages, sources_1, sources_1_1, source, bb, _a, _b, message, e_1_1, e_2_1, e_2, _c, _d, e_1, _e;
    return tslib_1.__generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                schema = null;
                dictionaries = new _map2.default();
                readMessages = null;
                if (ArrayBuffer.isView(sources) || typeof sources === 'string') {
                    sources = [sources];
                }
                _f.label = 1;
            case 1:
                _f.trys.push([1, 12, 13, 14]);
                sources_1 = tslib_1.__values(sources), sources_1_1 = sources_1.next();
                _f.label = 2;
            case 2:
                if (!!sources_1_1.done) return [3 /*break*/, 11];
                source = sources_1_1.value;
                bb = toByteBuffer(source);
                if (!((!schema && (_d = readSchema(bb), schema = _d.schema, readMessages = _d.readMessages, _d) || true) && schema && readMessages)) return [3 /*break*/, 10];
                _f.label = 3;
            case 3:
                _f.trys.push([3, 8, 9, 10]);
                _a = tslib_1.__values(readMessages(bb)), _b = _a.next();
                _f.label = 4;
            case 4:
                if (!!_b.done) return [3 /*break*/, 7];
                message = _b.value;
                return [4 /*yield*/, {
                    schema: schema, message: message,
                    loader: new BinaryDataLoader(bb, arrayIterator(message.nodes), arrayIterator(message.buffers), dictionaries)
                }];
            case 5:
                _f.sent();
                _f.label = 6;
            case 6:
                _b = _a.next();
                return [3 /*break*/, 4];
            case 7:
                return [3 /*break*/, 10];
            case 8:
                e_1_1 = _f.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 10];
            case 9:
                try {
                    if (_b && !_b.done && (_e = _a.return)) _e.call(_a);
                } finally {
                    if (e_1) throw e_1.error;
                }
                return [7 /*endfinally*/];
            case 10:
                sources_1_1 = sources_1.next();
                return [3 /*break*/, 2];
            case 11:
                return [3 /*break*/, 14];
            case 12:
                e_2_1 = _f.sent();
                e_2 = { error: e_2_1 };
                return [3 /*break*/, 14];
            case 13:
                try {
                    if (sources_1_1 && !sources_1_1.done && (_c = sources_1.return)) _c.call(sources_1);
                } finally {
                    if (e_2) throw e_2.error;
                }
                return [7 /*endfinally*/];
            case 14:
                return [2 /*return*/];
        }
    });
}
function readBuffersAsync(sources) {
    return tslib_1.__asyncGenerator(this, arguments, function readBuffersAsync_1() {
        var schema, dictionaries, readMessages, sources_2, sources_2_1, source, bb, _a, _b, message, e_3_1, e_4_1, e_4, _c, _d, e_3, _e;
        return tslib_1.__generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    schema = null;
                    dictionaries = new _map2.default();
                    readMessages = null;
                    _f.label = 1;
                case 1:
                    _f.trys.push([1, 14, 15, 20]);
                    sources_2 = tslib_1.__asyncValues(sources);
                    _f.label = 2;
                case 2:
                    return [4 /*yield*/, tslib_1.__await(sources_2.next())];
                case 3:
                    if (!(sources_2_1 = _f.sent(), !sources_2_1.done)) return [3 /*break*/, 13];
                    return [4 /*yield*/, tslib_1.__await(sources_2_1.value)];
                case 4:
                    source = _f.sent();
                    bb = toByteBuffer(source);
                    if (!((!schema && (_d = readSchema(bb), schema = _d.schema, readMessages = _d.readMessages, _d) || true) && schema && readMessages)) return [3 /*break*/, 12];
                    _f.label = 5;
                case 5:
                    _f.trys.push([5, 10, 11, 12]);
                    _a = tslib_1.__values(readMessages(bb)), _b = _a.next();
                    _f.label = 6;
                case 6:
                    if (!!_b.done) return [3 /*break*/, 9];
                    message = _b.value;
                    return [4 /*yield*/, {
                        schema: schema, message: message,
                        loader: new BinaryDataLoader(bb, arrayIterator(message.nodes), arrayIterator(message.buffers), dictionaries)
                    }];
                case 7:
                    _f.sent();
                    _f.label = 8;
                case 8:
                    _b = _a.next();
                    return [3 /*break*/, 6];
                case 9:
                    return [3 /*break*/, 12];
                case 10:
                    e_3_1 = _f.sent();
                    e_3 = { error: e_3_1 };
                    return [3 /*break*/, 12];
                case 11:
                    try {
                        if (_b && !_b.done && (_e = _a.return)) _e.call(_a);
                    } finally {
                        if (e_3) throw e_3.error;
                    }
                    return [7 /*endfinally*/];
                case 12:
                    return [3 /*break*/, 2];
                case 13:
                    return [3 /*break*/, 20];
                case 14:
                    e_4_1 = _f.sent();
                    e_4 = { error: e_4_1 };
                    return [3 /*break*/, 20];
                case 15:
                    _f.trys.push([15,, 18, 19]);
                    if (!(sources_2_1 && !sources_2_1.done && (_c = sources_2.return))) return [3 /*break*/, 17];
                    return [4 /*yield*/, tslib_1.__await(_c.call(sources_2))];
                case 16:
                    _f.sent();
                    _f.label = 17;
                case 17:
                    return [3 /*break*/, 19];
                case 18:
                    if (e_4) throw e_4.error;
                    return [7 /*endfinally*/];
                case 19:
                    return [7 /*endfinally*/];
                case 20:
                    return [2 /*return*/];
            }
        });
    });
}
var BinaryDataLoader = /** @class */function (_super) {
    tslib_1.__extends(BinaryDataLoader, _super);
    function BinaryDataLoader(bb, nodes, buffers, dictionaries) {
        var _this = _super.call(this, nodes, buffers, dictionaries) || this;
        _this.bytes = bb.bytes();
        _this.messageOffset = bb.position();
        return _this;
    }
    BinaryDataLoader.prototype.readOffsets = function (type, buffer) {
        return this.readData(type, buffer);
    };
    BinaryDataLoader.prototype.readTypeIds = function (type, buffer) {
        return this.readData(type, buffer);
    };
    BinaryDataLoader.prototype.readData = function (_type, _a) {
        var _b = _a === void 0 ? this.getBufferMetadata() : _a,
            length = _b.length,
            offset = _b.offset;
        return new Uint8Array(this.bytes.buffer, this.bytes.byteOffset + this.messageOffset + offset, length);
    };
    return BinaryDataLoader;
}(_vector.TypeDataLoader);
exports.BinaryDataLoader = BinaryDataLoader;

function arrayIterator(arr) {
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                return [5 /*yield**/, tslib_1.__values(arr)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
function toByteBuffer(bytes) {
    var arr = bytes || new Uint8Array(0);
    if (typeof bytes === 'string') {
        arr = new Uint8Array(bytes.length);
        for (var i = -1, n = bytes.length; ++i < n;) {
            arr[i] = bytes.charCodeAt(i);
        }
        return new ByteBuffer(arr);
    }
    return new ByteBuffer(arr);
}
function readSchema(bb) {
    var schema, readMessages, footer;
    if (footer = readFileSchema(bb)) {
        schema = footer.schema;
        readMessages = readFileMessages(footer);
    } else if (schema = readStreamSchema(bb)) {
        readMessages = readStreamMessages;
    } else {
        throw new Error('Invalid Arrow buffer');
    }
    return { schema: schema, readMessages: readMessages };
}
var PADDING = 4;
var MAGIC_STR = 'ARROW1';
var MAGIC = new Uint8Array(MAGIC_STR.length);
for (var i = 0; i < MAGIC_STR.length; i += 1 | 0) {
    MAGIC[i] = MAGIC_STR.charCodeAt(i);
}
function checkForMagicArrowString(buffer, index) {
    if (index === void 0) {
        index = 0;
    }
    for (var i = -1, n = MAGIC.length; ++i < n;) {
        if (MAGIC[i] !== buffer[index + i]) {
            return false;
        }
    }
    return true;
}
var magicLength = MAGIC.length;
var magicAndPadding = magicLength + PADDING;
var magicX2AndPadding = magicLength * 2 + PADDING;
function readStreamSchema(bb) {
    if (!checkForMagicArrowString(bb.bytes(), 0)) {
        try {
            for (var _a = tslib_1.__values(readMessages(bb)), _b = _a.next(); !_b.done; _b = _a.next()) {
                var message = _b.value;
                if (_metadata.Message.isSchema(message)) {
                    return message;
                }
            }
        } catch (e_5_1) {
            e_5 = { error: e_5_1 };
        } finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            } finally {
                if (e_5) throw e_5.error;
            }
        }
    }
    return null;
    var e_5, _c;
}
function readStreamMessages(bb) {
    var _a, _b, message, e_6_1, e_6, _c;
    return tslib_1.__generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _d.trys.push([0, 9, 10, 11]);
                _a = tslib_1.__values(readMessages(bb)), _b = _a.next();
                _d.label = 1;
            case 1:
                if (!!_b.done) return [3 /*break*/, 8];
                message = _b.value;
                if (!_metadata.Message.isRecordBatch(message)) return [3 /*break*/, 3];
                return [4 /*yield*/, message];
            case 2:
                _d.sent();
                return [3 /*break*/, 6];
            case 3:
                if (!_metadata.Message.isDictionaryBatch(message)) return [3 /*break*/, 5];
                return [4 /*yield*/, message];
            case 4:
                _d.sent();
                return [3 /*break*/, 6];
            case 5:
                return [3 /*break*/, 7];
            case 6:
                // position the buffer after the body to read the next message
                bb.setPosition(bb.position() + message.bodyLength);
                _d.label = 7;
            case 7:
                _b = _a.next();
                return [3 /*break*/, 1];
            case 8:
                return [3 /*break*/, 11];
            case 9:
                e_6_1 = _d.sent();
                e_6 = { error: e_6_1 };
                return [3 /*break*/, 11];
            case 10:
                try {
                    if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                } finally {
                    if (e_6) throw e_6.error;
                }
                return [7 /*endfinally*/];
            case 11:
                return [2 /*return*/];
        }
    });
}
function readFileSchema(bb) {
    var fileLength = bb.capacity(),
        footerLength,
        footerOffset;
    if (fileLength < magicX2AndPadding /*                     Arrow buffer too small */ || !checkForMagicArrowString(bb.bytes(), 0) /*                        Missing magic start    */ || !checkForMagicArrowString(bb.bytes(), fileLength - magicLength) /* Missing magic end      */ || (footerLength = bb.readInt32(footerOffset = fileLength - magicAndPadding)) < 1 && footerLength + magicX2AndPadding > fileLength) {
        return null;
    }
    bb.setPosition(footerOffset - footerLength);
    return footerFromByteBuffer(bb);
}
function readFileMessages(footer) {
    return function (bb) {
        var i, batches, n, i, batches, n;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    i = -1, batches = footer.dictionaryBatches, n = batches.length;
                    _a.label = 1;
                case 1:
                    if (!(++i < n)) return [3 /*break*/, 4];
                    bb.setPosition(batches[i].offset.low);
                    return [4 /*yield*/, readMessage(bb, bb.readInt32(bb.position()))];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    return [3 /*break*/, 1];
                case 4:
                    i = -1, batches = footer.recordBatches, n = batches.length;
                    _a.label = 5;
                case 5:
                    if (!(++i < n)) return [3 /*break*/, 8];
                    bb.setPosition(batches[i].offset.low);
                    return [4 /*yield*/, readMessage(bb, bb.readInt32(bb.position()))];
                case 6:
                    _a.sent();
                    _a.label = 7;
                case 7:
                    return [3 /*break*/, 5];
                case 8:
                    return [2 /*return*/];
            }
        });
    };
}
function readMessages(bb) {
    var length, message;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!(bb.position() < bb.capacity() && (length = bb.readInt32(bb.position())) > 0)) return [3 /*break*/, 3];
                if (!(message = readMessage(bb, length))) return [3 /*break*/, 2];
                return [4 /*yield*/, message];
            case 1:
                _a.sent();
                _a.label = 2;
            case 2:
                return [3 /*break*/, 0];
            case 3:
                return [2 /*return*/];
        }
    });
}
function readMessage(bb, length) {
    bb.setPosition(bb.position() + PADDING);
    var message = messageFromByteBuffer(bb);
    bb.setPosition(bb.position() + length);
    return message;
}

var Type = Schema_.org.apache.arrow.flatbuf.Type;
var Precision = Schema_.org.apache.arrow.flatbuf.Precision;
var MessageHeader = Message_.org.apache.arrow.flatbuf.MessageHeader;
var MetadataVersion = Schema_.org.apache.arrow.flatbuf.MetadataVersion;
var _Footer = File_.org.apache.arrow.flatbuf.Footer;
var _Message = Message_.org.apache.arrow.flatbuf.Message;
var _Schema = Schema_.org.apache.arrow.flatbuf.Schema;
var _RecordBatch = Message_.org.apache.arrow.flatbuf.RecordBatch;
var _DictionaryBatch = Message_.org.apache.arrow.flatbuf.DictionaryBatch;
var _Null = Schema_.org.apache.arrow.flatbuf.Null;
var _Int = Schema_.org.apache.arrow.flatbuf.Int;
var _FloatingPoint = Schema_.org.apache.arrow.flatbuf.FloatingPoint;
var _Binary = Schema_.org.apache.arrow.flatbuf.Binary;
var _Bool = Schema_.org.apache.arrow.flatbuf.Bool;
var _Utf8 = Schema_.org.apache.arrow.flatbuf.Utf8;
var _Decimal = Schema_.org.apache.arrow.flatbuf.Decimal;
var _Date = Schema_.org.apache.arrow.flatbuf.Date;
var _Time = Schema_.org.apache.arrow.flatbuf.Time;
var _Timestamp = Schema_.org.apache.arrow.flatbuf.Timestamp;
var _Interval = Schema_.org.apache.arrow.flatbuf.Interval;
var _List = Schema_.org.apache.arrow.flatbuf.List;
var _Struct = Schema_.org.apache.arrow.flatbuf.Struct_;
var _Union = Schema_.org.apache.arrow.flatbuf.Union;
var _FixedSizeBinary = Schema_.org.apache.arrow.flatbuf.FixedSizeBinary;
var _FixedSizeList = Schema_.org.apache.arrow.flatbuf.FixedSizeList;
var _Map = Schema_.org.apache.arrow.flatbuf.Map;
function footerFromByteBuffer(bb) {
    var dictionaryFields = new _map2.default();
    var f = _Footer.getRootAsFooter(bb),
        s = f.schema();
    return new _metadata.Footer(dictionaryBatchesFromFooter(f), recordBatchesFromFooter(f), new _type2.Schema(fieldsFromSchema(s, dictionaryFields), customMetadata(s), f.version(), dictionaryFields));
}
function messageFromByteBuffer(bb) {
    var m = _Message.getRootAsMessage(bb),
        type = m.headerType(),
        version = m.version();
    switch (type) {
        case MessageHeader.Schema:
            return schemaFromMessage(version, m.header(new _Schema()), new _map2.default());
        case MessageHeader.RecordBatch:
            return recordBatchFromMessage(version, m.header(new _RecordBatch()));
        case MessageHeader.DictionaryBatch:
            return dictionaryBatchFromMessage(version, m.header(new _DictionaryBatch()));
    }
    return null;
    // throw new Error(`Unrecognized Message type '${type}'`);
}
function schemaFromMessage(version, s, dictionaryFields) {
    return new _type2.Schema(fieldsFromSchema(s, dictionaryFields), customMetadata(s), version, dictionaryFields);
}
function recordBatchFromMessage(version, b) {
    return new _metadata.RecordBatchMetadata(version, b.length(), fieldNodesFromRecordBatch(b), buffersFromRecordBatch(b, version));
}
function dictionaryBatchFromMessage(version, d) {
    return new _metadata.DictionaryBatch(version, recordBatchFromMessage(version, d.data()), d.id(), d.isDelta());
}
function dictionaryBatchesFromFooter(f) {
    var blocks = [];
    for (var b = void 0, i = -1, n = f && f.dictionariesLength(); ++i < n;) {
        if (b = f.dictionaries(i)) {
            blocks.push(new _metadata.FileBlock(b.metaDataLength(), b.bodyLength(), b.offset()));
        }
    }
    return blocks;
}
function recordBatchesFromFooter(f) {
    var blocks = [];
    for (var b = void 0, i = -1, n = f && f.recordBatchesLength(); ++i < n;) {
        if (b = f.recordBatches(i)) {
            blocks.push(new _metadata.FileBlock(b.metaDataLength(), b.bodyLength(), b.offset()));
        }
    }
    return blocks;
}
function fieldsFromSchema(s, dictionaryFields) {
    var fields = [];
    for (var i = -1, c = void 0, n = s && s.fieldsLength(); ++i < n;) {
        if (c = field(s.fields(i), dictionaryFields)) {
            fields.push(c);
        }
    }
    return fields;
}
function fieldsFromField(f, dictionaryFields) {
    var fields = [];
    for (var i = -1, c = void 0, n = f && f.childrenLength(); ++i < n;) {
        if (c = field(f.children(i), dictionaryFields)) {
            fields.push(c);
        }
    }
    return fields;
}
function fieldNodesFromRecordBatch(b) {
    var fieldNodes = [];
    for (var i = -1, n = b.nodesLength(); ++i < n;) {
        fieldNodes.push(fieldNodeFromRecordBatch(b.nodes(i)));
    }
    return fieldNodes;
}
function buffersFromRecordBatch(b, version) {
    var buffers = [];
    for (var i = -1, n = b.buffersLength(); ++i < n;) {
        var buffer = b.buffers(i);
        // If this Arrow buffer was written before version 4,
        // advance the buffer's bb_pos 8 bytes to skip past
        // the now-removed page id field.
        if (version < MetadataVersion.V4) {
            buffer.bb_pos += 8 * (i + 1);
        }
        buffers.push(bufferFromRecordBatch(buffer));
    }
    return buffers;
}
function field(f, dictionaryFields) {
    var name = f.name();
    var field;
    var nullable = f.nullable();
    var metadata = customMetadata(f);
    var dataType;
    var keysMeta, id;
    var dictMeta;
    if (!dictionaryFields || !(dictMeta = f.dictionary())) {
        if (dataType = typeFromField(f, fieldsFromField(f, dictionaryFields))) {
            field = new _type2.Field(name, dataType, nullable, metadata);
        }
    } else if (dataType = dictionaryFields.has(id = dictMeta.id().low) ? dictionaryFields.get(id).type.dictionary : typeFromField(f, fieldsFromField(f, null))) {
        dataType = new _type2.Dictionary(dataType,
        // a dictionary index defaults to signed 32 bit int if unspecified
        (keysMeta = dictMeta.indexType()) ? intFromField(keysMeta) : new _type2.Int32(), id, dictMeta.isOrdered());
        field = new _type2.Field(name, dataType, nullable, metadata);
        dictionaryFields.has(id) || dictionaryFields.set(id, field);
    }
    return field || null;
}
function customMetadata(parent) {
    var data = new _map2.default();
    if (parent) {
        for (var entry = void 0, key = void 0, i = -1, n = parent.customMetadataLength() | 0; ++i < n;) {
            if ((entry = parent.customMetadata(i)) && (key = entry.key()) != null) {
                data.set(key, entry.value());
            }
        }
    }
    return data;
}
function fieldNodeFromRecordBatch(f) {
    return new _metadata.FieldMetadata(f.length(), f.nullCount());
}
function bufferFromRecordBatch(b) {
    return new _metadata.BufferMetadata(b.offset(), b.length());
}
function typeFromField(f, children) {
    switch (f.typeType()) {
        case Type.NONE:
            return null;
        case Type.Null:
            return nullFromField(f.type(new _Null()));
        case Type.Int:
            return intFromField(f.type(new _Int()));
        case Type.FloatingPoint:
            return floatFromField(f.type(new _FloatingPoint()));
        case Type.Binary:
            return binaryFromField(f.type(new _Binary()));
        case Type.Utf8:
            return utf8FromField(f.type(new _Utf8()));
        case Type.Bool:
            return boolFromField(f.type(new _Bool()));
        case Type.Decimal:
            return decimalFromField(f.type(new _Decimal()));
        case Type.Date:
            return dateFromField(f.type(new _Date()));
        case Type.Time:
            return timeFromField(f.type(new _Time()));
        case Type.Timestamp:
            return timestampFromField(f.type(new _Timestamp()));
        case Type.Interval:
            return intervalFromField(f.type(new _Interval()));
        case Type.List:
            return listFromField(f.type(new _List()), children || []);
        case Type.Struct_:
            return structFromField(f.type(new _Struct()), children || []);
        case Type.Union:
            return unionFromField(f.type(new _Union()), children || []);
        case Type.FixedSizeBinary:
            return fixedSizeBinaryFromField(f.type(new _FixedSizeBinary()));
        case Type.FixedSizeList:
            return fixedSizeListFromField(f.type(new _FixedSizeList()), children || []);
        case Type.Map:
            return mapFromField(f.type(new _Map()), children || []);
    }
    throw new Error("Unrecognized type " + f.typeType());
}
function nullFromField(_type) {
    return new _type2.Null();
}
function intFromField(_type) {
    switch (_type.bitWidth()) {
        case 8:
            return _type.isSigned() ? new _type2.Int8() : new _type2.Uint8();
        case 16:
            return _type.isSigned() ? new _type2.Int16() : new _type2.Uint16();
        case 32:
            return _type.isSigned() ? new _type2.Int32() : new _type2.Uint32();
        case 64:
            return _type.isSigned() ? new _type2.Int64() : new _type2.Uint64();
    }
    return null;
}
function floatFromField(_type) {
    switch (_type.precision()) {
        case Precision.HALF:
            return new _type2.Float16();
        case Precision.SINGLE:
            return new _type2.Float32();
        case Precision.DOUBLE:
            return new _type2.Float64();
    }
    return null;
}
function binaryFromField(_type) {
    return new _type2.Binary();
}
function utf8FromField(_type) {
    return new _type2.Utf8();
}
function boolFromField(_type) {
    return new _type2.Bool();
}
function decimalFromField(_type) {
    return new _type2.Decimal(_type.scale(), _type.precision());
}
function dateFromField(_type) {
    return new _type2.Date_(_type.unit());
}
function timeFromField(_type) {
    return new _type2.Time(_type.unit(), _type.bitWidth());
}
function timestampFromField(_type) {
    return new _type2.Timestamp(_type.unit(), _type.timezone());
}
function intervalFromField(_type) {
    return new _type2.Interval(_type.unit());
}
function listFromField(_type, children) {
    return new _type2.List(children);
}
function structFromField(_type, children) {
    return new _type2.Struct(children);
}
function unionFromField(_type, children) {
    return new _type2.Union(_type.mode(), _type.typeIdsArray() || [], children);
}
function fixedSizeBinaryFromField(_type) {
    return new _type2.FixedSizeBinary(_type.byteWidth());
}
function fixedSizeListFromField(_type, children) {
    return new _type2.FixedSizeList(_type.listSize(), children);
}
function mapFromField(_type, children) {
    return new _type2.Map_(_type.keysSorted(), children);
}

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.org = undefined;

var _Schema = __webpack_require__(5);

var NS16187549871986683199 = _interopRequireWildcard(_Schema);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * ----------------------------------------------------------------------
 * Arrow File metadata
 *
 *
 * @constructor
 */
var org = exports.org = undefined; // automatically generated by the FlatBuffers compiler, do not modify

(function (org) {
    var apache;
    (function (apache) {
        var arrow;
        (function (arrow) {
            var flatbuf;
            (function (flatbuf) {
                var Footer = /** @class */function () {
                    function Footer() {
                        /**
                         * @type {number}
                         */
                        this.bb_pos = 0;
                    }
                    /**
                     * @param {number} i
                     * @param {flatbuffers.ByteBuffer} bb
                     * @returns {Footer}
                     */
                    Footer.prototype.__init = function (i, bb) {
                        this.bb_pos = i;
                        this.bb = bb;
                        return this;
                    };
                    /**
                     * @param {flatbuffers.ByteBuffer} bb
                     * @param {Footer=} obj
                     * @returns {Footer}
                     */
                    Footer.getRootAsFooter = function (bb, obj) {
                        return (obj || new Footer()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
                    };
                    /**
                     * @returns {org.apache.arrow.flatbuf.MetadataVersion}
                     */
                    Footer.prototype.version = function () {
                        var offset = this.bb.__offset(this.bb_pos, 4);
                        return offset ? /** @type {org.apache.arrow.flatbuf.MetadataVersion} */this.bb.readInt16(this.bb_pos + offset) : NS16187549871986683199.org.apache.arrow.flatbuf.MetadataVersion.V1;
                    };
                    /**
                     * @param {org.apache.arrow.flatbuf.Schema=} obj
                     * @returns {org.apache.arrow.flatbuf.Schema|null}
                     */
                    Footer.prototype.schema = function (obj) {
                        var offset = this.bb.__offset(this.bb_pos, 6);
                        return offset ? (obj || new NS16187549871986683199.org.apache.arrow.flatbuf.Schema()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
                    };
                    /**
                     * @param {number} index
                     * @param {org.apache.arrow.flatbuf.Block=} obj
                     * @returns {org.apache.arrow.flatbuf.Block}
                     */
                    Footer.prototype.dictionaries = function (index, obj) {
                        var offset = this.bb.__offset(this.bb_pos, 8);
                        return offset ? (obj || new org.apache.arrow.flatbuf.Block()).__init(this.bb.__vector(this.bb_pos + offset) + index * 24, this.bb) : null;
                    };
                    /**
                     * @returns {number}
                     */
                    Footer.prototype.dictionariesLength = function () {
                        var offset = this.bb.__offset(this.bb_pos, 8);
                        return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
                    };
                    /**
                     * @param {number} index
                     * @param {org.apache.arrow.flatbuf.Block=} obj
                     * @returns {org.apache.arrow.flatbuf.Block}
                     */
                    Footer.prototype.recordBatches = function (index, obj) {
                        var offset = this.bb.__offset(this.bb_pos, 10);
                        return offset ? (obj || new org.apache.arrow.flatbuf.Block()).__init(this.bb.__vector(this.bb_pos + offset) + index * 24, this.bb) : null;
                    };
                    /**
                     * @returns {number}
                     */
                    Footer.prototype.recordBatchesLength = function () {
                        var offset = this.bb.__offset(this.bb_pos, 10);
                        return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     */
                    Footer.startFooter = function (builder) {
                        builder.startObject(4);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @param {org.apache.arrow.flatbuf.MetadataVersion} version
                     */
                    Footer.addVersion = function (builder, version) {
                        builder.addFieldInt16(0, version, NS16187549871986683199.org.apache.arrow.flatbuf.MetadataVersion.V1);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @param {flatbuffers.Offset} schemaOffset
                     */
                    Footer.addSchema = function (builder, schemaOffset) {
                        builder.addFieldOffset(1, schemaOffset, 0);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @param {flatbuffers.Offset} dictionariesOffset
                     */
                    Footer.addDictionaries = function (builder, dictionariesOffset) {
                        builder.addFieldOffset(2, dictionariesOffset, 0);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @param {number} numElems
                     */
                    Footer.startDictionariesVector = function (builder, numElems) {
                        builder.startVector(24, numElems, 8);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @param {flatbuffers.Offset} recordBatchesOffset
                     */
                    Footer.addRecordBatches = function (builder, recordBatchesOffset) {
                        builder.addFieldOffset(3, recordBatchesOffset, 0);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @param {number} numElems
                     */
                    Footer.startRecordBatchesVector = function (builder, numElems) {
                        builder.startVector(24, numElems, 8);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @returns {flatbuffers.Offset}
                     */
                    Footer.endFooter = function (builder) {
                        var offset = builder.endObject();
                        return offset;
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @param {flatbuffers.Offset} offset
                     */
                    Footer.finishFooterBuffer = function (builder, offset) {
                        builder.finish(offset);
                    };
                    return Footer;
                }();
                flatbuf.Footer = Footer;
            })(flatbuf = arrow.flatbuf || (arrow.flatbuf = {}));
        })(arrow = apache.arrow || (apache.arrow = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (exports.org = org = {}));
/**
 * @constructor
 */
(function (org) {
    var apache;
    (function (apache) {
        var arrow;
        (function (arrow) {
            var flatbuf;
            (function (flatbuf) {
                var Block = /** @class */function () {
                    function Block() {
                        /**
                         * @type {number}
                         */
                        this.bb_pos = 0;
                    }
                    /**
                     * @param {number} i
                     * @param {flatbuffers.ByteBuffer} bb
                     * @returns {Block}
                     */
                    Block.prototype.__init = function (i, bb) {
                        this.bb_pos = i;
                        this.bb = bb;
                        return this;
                    };
                    /**
                     * Index to the start of the RecordBlock (note this is past the Message header)
                     *
                     * @returns {flatbuffers.Long}
                     */
                    Block.prototype.offset = function () {
                        return this.bb.readInt64(this.bb_pos);
                    };
                    /**
                     * Length of the metadata
                     *
                     * @returns {number}
                     */
                    Block.prototype.metaDataLength = function () {
                        return this.bb.readInt32(this.bb_pos + 8);
                    };
                    /**
                     * Length of the data (this is aligned so there can be a gap between this and
                     * the metatdata).
                     *
                     * @returns {flatbuffers.Long}
                     */
                    Block.prototype.bodyLength = function () {
                        return this.bb.readInt64(this.bb_pos + 16);
                    };
                    /**
                     * @param {flatbuffers.Builder} builder
                     * @param {flatbuffers.Long} offset
                     * @param {number} metaDataLength
                     * @param {flatbuffers.Long} bodyLength
                     * @returns {flatbuffers.Offset}
                     */
                    Block.createBlock = function (builder, offset, metaDataLength, bodyLength) {
                        builder.prep(8, 24);
                        builder.writeInt64(bodyLength);
                        builder.pad(4);
                        builder.writeInt32(metaDataLength);
                        builder.writeInt64(offset);
                        return builder.offset();
                    };
                    return Block;
                }();
                flatbuf.Block = Block;
            })(flatbuf = arrow.flatbuf || (arrow.flatbuf = {}));
        })(arrow = apache.arrow || (apache.arrow = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (exports.org = org = {}));

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _symbol = __webpack_require__(61);

var _symbol2 = _interopRequireDefault(_symbol);

var _iterator = __webpack_require__(2);

var _iterator2 = _interopRequireDefault(_iterator);

exports.isPromise = isPromise;
exports.isObservable = isObservable;
exports.isArrayLike = isArrayLike;
exports.isIterable = isIterable;
exports.isAsyncIterable = isAsyncIterable;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @ignore
 */
function isPromise(x) {
  return x != null && Object(x) === x && typeof x['then'] === 'function';
}
/**
 * @ignore
 */
function isObservable(x) {
  return x != null && Object(x) === x && typeof x['subscribe'] === 'function';
}
/**
 * @ignore
 */
function isArrayLike(x) {
  return x != null && Object(x) === x && typeof x['length'] === 'number';
}
/**
 * @ignore
 */
function isIterable(x) {
  return x != null && Object(x) === x && typeof x[_iterator2.default] !== 'undefined';
}
/**
 * @ignore
 */
function isAsyncIterable(x) {
  return x != null && Object(x) === x && typeof x[_symbol2.default.asyncIterator] !== 'undefined';
}

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_61__;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assign = __webpack_require__(63);

var _assign2 = _interopRequireDefault(_assign);

var _papaparse = __webpack_require__(31);

var _papaparse2 = _interopRequireDefault(_papaparse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var jsonFormatter = {
    initDataValue: function initDataValue() {
        return [];
    },
    initRowValue: function initRowValue() {
        return {};
    },
    initColumnValue: function initColumnValue(data, row, colName) {
        return row[colName] = [];
    },
    setColumnValue: function setColumnValue(data, row, colName, value) {
        return row[colName] = value;
    },
    addColumnValue: function addColumnValue(data, row, colName, value) {
        return row[colName].unshift(value);
    },
    addRow: function addRow(data, row) {
        return data.push(row);
    },
    formatData: function formatData(data) {
        return data;
    },
    slice: function slice(data, start) {
        return data.slice(start);
    }
}; /******************************************************************************
    *
    * Copyright (c) 2017, the Perspective Authors.
    *
    * This file is part of the Perspective library, distributed under the terms of
    * the Apache License 2.0.  The full license can be found in the LICENSE file.
    *
    */

var csvFormatter = (0, _assign2.default)({}, jsonFormatter, {
    addColumnValue: function addColumnValue(data, row, colName, value) {
        return row[colName.split("|").join(",")].unshift(value);
    },
    setColumnValue: function setColumnValue(data, row, colName, value) {
        return row[colName.split("|").join(",")] = value;
    },
    formatData: function formatData(data, config) {
        return _papaparse2.default.unparse(data, config);
    }
});

var jsonTableFormatter = {
    initDataValue: function initDataValue() {
        return new Object();
    },
    initRowValue: function initRowValue() {},
    setColumnValue: function setColumnValue(data, row, colName, value) {
        data[colName] = data[colName] || [];
        data[colName].push(value);
    },
    addColumnValue: function addColumnValue(data, row, colName, value) {
        data[colName] = data[colName] || [];
        data[colName][data[colName].length - 1].unshift(value);
    },
    initColumnValue: function initColumnValue(data, row, colName) {
        data[colName] = data[colName] || [];
        data[colName].push([]);
    },
    addRow: function addRow() {},
    formatData: function formatData(data) {
        return data;
    },
    slice: function slice(data, start) {
        var new_data = {};
        for (var x in data) {
            new_data[x] = data[x].slice(start);
        }
        return new_data;
    }
};

exports.default = {
    jsonFormatter: jsonFormatter,
    jsonTableFormatter: jsonTableFormatter,
    csvFormatter: csvFormatter
};

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_63__;

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_64__;

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_65__;

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_66__;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname) {;var window = window || {};exports.load_perspective = function(Module) {
var Module=typeof Module!=="undefined"?Module:{};var moduleOverrides={};var key;for(key in Module){if(Module.hasOwnProperty(key)){moduleOverrides[key]=Module[key]}}Module["arguments"]=[];Module["thisProgram"]="./this.program";Module["quit"]=(function(status,toThrow){throw toThrow});Module["preRun"]=[];Module["postRun"]=[];var ENVIRONMENT_IS_WEB=false;var ENVIRONMENT_IS_WORKER=false;var ENVIRONMENT_IS_NODE=true;var scriptDirectory="";function locateFile(path){if(Module["locateFile"]){return Module["locateFile"](path,scriptDirectory)}else{return scriptDirectory+path}}if(ENVIRONMENT_IS_NODE){scriptDirectory=__dirname+"/";var nodeFS;var nodePath;Module["read"]=function shell_read(filename,binary){var ret;if(!nodeFS)nodeFS=__webpack_require__(32);if(!nodePath)nodePath=__webpack_require__(33);filename=nodePath["normalize"](filename);ret=nodeFS["readFileSync"](filename);return binary?ret:ret.toString()};Module["readBinary"]=function readBinary(filename){var ret=Module["read"](filename,true);if(!ret.buffer){ret=new Uint8Array(ret)}assert(ret.buffer);return ret};if(process["argv"].length>1){Module["thisProgram"]=process["argv"][1].replace(/\\/g,"/")}Module["arguments"]=process["argv"].slice(2);if(true){module["exports"]=Module}process["on"]("uncaughtException",(function(ex){if(!(ex instanceof ExitStatus)){throw ex}}));process["on"]("unhandledRejection",(function(reason,p){process["exit"](1)}));Module["quit"]=(function(status){process["exit"](status)});Module["inspect"]=(function(){return"[Emscripten Module object]"})}else{}var out=Module["print"]||(typeof console!=="undefined"?console.log.bind(console):typeof print!=="undefined"?print:null);var err=Module["printErr"]||(typeof printErr!=="undefined"?printErr:typeof console!=="undefined"&&console.warn.bind(console)||out);for(key in moduleOverrides){if(moduleOverrides.hasOwnProperty(key)){Module[key]=moduleOverrides[key]}}moduleOverrides=undefined;var STACK_ALIGN=16;function staticAlloc(size){var ret=STATICTOP;STATICTOP=STATICTOP+size+15&-16;return ret}function dynamicAlloc(size){var ret=HEAP32[DYNAMICTOP_PTR>>2];var end=ret+size+15&-16;HEAP32[DYNAMICTOP_PTR>>2]=end;if(end>=TOTAL_MEMORY){var success=enlargeMemory();if(!success){HEAP32[DYNAMICTOP_PTR>>2]=ret;return 0}}return ret}function alignMemory(size,factor){if(!factor)factor=STACK_ALIGN;var ret=size=Math.ceil(size/factor)*factor;return ret}var asm2wasmImports={"f64-rem":(function(x,y){return x%y}),"debugger":(function(){debugger})};var functionPointers=new Array(0);var GLOBAL_BASE=1024;var ABORT=0;var EXITSTATUS=0;function assert(condition,text){if(!condition){abort("Assertion failed: "+text)}}function getMemory(size){if(!staticSealed)return staticAlloc(size);if(!runtimeInitialized)return dynamicAlloc(size);return _malloc(size)}function Pointer_stringify(ptr,length){if(length===0||!ptr)return"";var hasUtf=0;var t;var i=0;while(1){t=HEAPU8[ptr+i>>0];hasUtf|=t;if(t==0&&!length)break;i++;if(length&&i==length)break}if(!length)length=i;var ret="";if(hasUtf<128){var MAX_CHUNK=1024;var curr;while(length>0){curr=String.fromCharCode.apply(String,HEAPU8.subarray(ptr,ptr+Math.min(length,MAX_CHUNK)));ret=ret?ret+curr:curr;ptr+=MAX_CHUNK;length-=MAX_CHUNK}return ret}return UTF8ToString(ptr)}var UTF8Decoder=typeof TextDecoder!=="undefined"?new TextDecoder("utf8"):undefined;function UTF8ArrayToString(u8Array,idx){var endPtr=idx;while(u8Array[endPtr])++endPtr;if(endPtr-idx>16&&u8Array.subarray&&UTF8Decoder){return UTF8Decoder.decode(u8Array.subarray(idx,endPtr))}else{var u0,u1,u2,u3,u4,u5;var str="";while(1){u0=u8Array[idx++];if(!u0)return str;if(!(u0&128)){str+=String.fromCharCode(u0);continue}u1=u8Array[idx++]&63;if((u0&224)==192){str+=String.fromCharCode((u0&31)<<6|u1);continue}u2=u8Array[idx++]&63;if((u0&240)==224){u0=(u0&15)<<12|u1<<6|u2}else{u3=u8Array[idx++]&63;if((u0&248)==240){u0=(u0&7)<<18|u1<<12|u2<<6|u3}else{u4=u8Array[idx++]&63;if((u0&252)==248){u0=(u0&3)<<24|u1<<18|u2<<12|u3<<6|u4}else{u5=u8Array[idx++]&63;u0=(u0&1)<<30|u1<<24|u2<<18|u3<<12|u4<<6|u5}}}if(u0<65536){str+=String.fromCharCode(u0)}else{var ch=u0-65536;str+=String.fromCharCode(55296|ch>>10,56320|ch&1023)}}}}function UTF8ToString(ptr){return UTF8ArrayToString(HEAPU8,ptr)}function stringToUTF8Array(str,outU8Array,outIdx,maxBytesToWrite){if(!(maxBytesToWrite>0))return 0;var startIdx=outIdx;var endIdx=outIdx+maxBytesToWrite-1;for(var i=0;i<str.length;++i){var u=str.charCodeAt(i);if(u>=55296&&u<=57343)u=65536+((u&1023)<<10)|str.charCodeAt(++i)&1023;if(u<=127){if(outIdx>=endIdx)break;outU8Array[outIdx++]=u}else if(u<=2047){if(outIdx+1>=endIdx)break;outU8Array[outIdx++]=192|u>>6;outU8Array[outIdx++]=128|u&63}else if(u<=65535){if(outIdx+2>=endIdx)break;outU8Array[outIdx++]=224|u>>12;outU8Array[outIdx++]=128|u>>6&63;outU8Array[outIdx++]=128|u&63}else if(u<=2097151){if(outIdx+3>=endIdx)break;outU8Array[outIdx++]=240|u>>18;outU8Array[outIdx++]=128|u>>12&63;outU8Array[outIdx++]=128|u>>6&63;outU8Array[outIdx++]=128|u&63}else if(u<=67108863){if(outIdx+4>=endIdx)break;outU8Array[outIdx++]=248|u>>24;outU8Array[outIdx++]=128|u>>18&63;outU8Array[outIdx++]=128|u>>12&63;outU8Array[outIdx++]=128|u>>6&63;outU8Array[outIdx++]=128|u&63}else{if(outIdx+5>=endIdx)break;outU8Array[outIdx++]=252|u>>30;outU8Array[outIdx++]=128|u>>24&63;outU8Array[outIdx++]=128|u>>18&63;outU8Array[outIdx++]=128|u>>12&63;outU8Array[outIdx++]=128|u>>6&63;outU8Array[outIdx++]=128|u&63}}outU8Array[outIdx]=0;return outIdx-startIdx}function lengthBytesUTF8(str){var len=0;for(var i=0;i<str.length;++i){var u=str.charCodeAt(i);if(u>=55296&&u<=57343)u=65536+((u&1023)<<10)|str.charCodeAt(++i)&1023;if(u<=127){++len}else if(u<=2047){len+=2}else if(u<=65535){len+=3}else if(u<=2097151){len+=4}else if(u<=67108863){len+=5}else{len+=6}}return len}var UTF16Decoder=typeof TextDecoder!=="undefined"?new TextDecoder("utf-16le"):undefined;function allocateUTF8(str){var size=lengthBytesUTF8(str)+1;var ret=_malloc(size);if(ret)stringToUTF8Array(str,HEAP8,ret,size);return ret}function allocateUTF8OnStack(str){var size=lengthBytesUTF8(str)+1;var ret=stackAlloc(size);stringToUTF8Array(str,HEAP8,ret,size);return ret}var PAGE_SIZE=16384;var WASM_PAGE_SIZE=65536;var ASMJS_PAGE_SIZE=16777216;var MIN_TOTAL_MEMORY=16777216;function alignUp(x,multiple){if(x%multiple>0){x+=multiple-x%multiple}return x}var buffer,HEAP8,HEAPU8,HEAP16,HEAPU16,HEAP32,HEAPU32,HEAPF32,HEAPF64;function updateGlobalBuffer(buf){Module["buffer"]=buffer=buf}function updateGlobalBufferViews(){Module["HEAP8"]=HEAP8=new Int8Array(buffer);Module["HEAP16"]=HEAP16=new Int16Array(buffer);Module["HEAP32"]=HEAP32=new Int32Array(buffer);Module["HEAPU8"]=HEAPU8=new Uint8Array(buffer);Module["HEAPU16"]=HEAPU16=new Uint16Array(buffer);Module["HEAPU32"]=HEAPU32=new Uint32Array(buffer);Module["HEAPF32"]=HEAPF32=new Float32Array(buffer);Module["HEAPF64"]=HEAPF64=new Float64Array(buffer)}var STATIC_BASE,STATICTOP,staticSealed;var STACK_BASE,STACKTOP,STACK_MAX;var DYNAMIC_BASE,DYNAMICTOP_PTR;STATIC_BASE=STATICTOP=STACK_BASE=STACKTOP=STACK_MAX=DYNAMIC_BASE=DYNAMICTOP_PTR=0;staticSealed=false;function abortOnCannotGrowMemory(){abort("Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value "+TOTAL_MEMORY+", (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ")}if(!Module["reallocBuffer"])Module["reallocBuffer"]=(function(size){var ret;try{if(ArrayBuffer.transfer){ret=ArrayBuffer.transfer(buffer,size)}else{var oldHEAP8=HEAP8;ret=new ArrayBuffer(size);var temp=new Int8Array(ret);temp.set(oldHEAP8)}}catch(e){return false}var success=_emscripten_replace_memory(ret);if(!success)return false;return ret});function enlargeMemory(){var PAGE_MULTIPLE=Module["usingWasm"]?WASM_PAGE_SIZE:ASMJS_PAGE_SIZE;var LIMIT=2147483648-PAGE_MULTIPLE;if(HEAP32[DYNAMICTOP_PTR>>2]>LIMIT){return false}var OLD_TOTAL_MEMORY=TOTAL_MEMORY;TOTAL_MEMORY=Math.max(TOTAL_MEMORY,MIN_TOTAL_MEMORY);while(TOTAL_MEMORY<HEAP32[DYNAMICTOP_PTR>>2]){if(TOTAL_MEMORY<=536870912){TOTAL_MEMORY=alignUp(2*TOTAL_MEMORY,PAGE_MULTIPLE)}else{TOTAL_MEMORY=Math.min(alignUp((3*TOTAL_MEMORY+2147483648)/4,PAGE_MULTIPLE),LIMIT)}}var replacement=Module["reallocBuffer"](TOTAL_MEMORY);if(!replacement||replacement.byteLength!=TOTAL_MEMORY){TOTAL_MEMORY=OLD_TOTAL_MEMORY;return false}updateGlobalBuffer(replacement);updateGlobalBufferViews();return true}var byteLength;try{byteLength=Function.prototype.call.bind(Object.getOwnPropertyDescriptor(ArrayBuffer.prototype,"byteLength").get);byteLength(new ArrayBuffer(4))}catch(e){byteLength=(function(buffer){return buffer.byteLength})}var TOTAL_STACK=Module["TOTAL_STACK"]||5242880;var TOTAL_MEMORY=Module["TOTAL_MEMORY"]||16777216;if(TOTAL_MEMORY<TOTAL_STACK)err("TOTAL_MEMORY should be larger than TOTAL_STACK, was "+TOTAL_MEMORY+"! (TOTAL_STACK="+TOTAL_STACK+")");if(Module["buffer"]){buffer=Module["buffer"]}else{if(typeof WebAssembly==="object"&&typeof WebAssembly.Memory==="function"){Module["wasmMemory"]=new WebAssembly.Memory({"initial":TOTAL_MEMORY/WASM_PAGE_SIZE});buffer=Module["wasmMemory"].buffer}else{buffer=new ArrayBuffer(TOTAL_MEMORY)}Module["buffer"]=buffer}updateGlobalBufferViews();function getTotalMemory(){return TOTAL_MEMORY}function callRuntimeCallbacks(callbacks){while(callbacks.length>0){var callback=callbacks.shift();if(typeof callback=="function"){callback();continue}var func=callback.func;if(typeof func==="number"){if(callback.arg===undefined){Module["dynCall_v"](func)}else{Module["dynCall_vi"](func,callback.arg)}}else{func(callback.arg===undefined?null:callback.arg)}}}var __ATPRERUN__=[];var __ATINIT__=[];var __ATMAIN__=[];var __ATEXIT__=[];var __ATPOSTRUN__=[];var runtimeInitialized=false;var runtimeExited=false;function preRun(){if(Module["preRun"]){if(typeof Module["preRun"]=="function")Module["preRun"]=[Module["preRun"]];while(Module["preRun"].length){addOnPreRun(Module["preRun"].shift())}}callRuntimeCallbacks(__ATPRERUN__)}function ensureInitRuntime(){if(runtimeInitialized)return;runtimeInitialized=true;callRuntimeCallbacks(__ATINIT__)}function preMain(){callRuntimeCallbacks(__ATMAIN__)}function exitRuntime(){callRuntimeCallbacks(__ATEXIT__);runtimeExited=true}function postRun(){if(Module["postRun"]){if(typeof Module["postRun"]=="function")Module["postRun"]=[Module["postRun"]];while(Module["postRun"].length){addOnPostRun(Module["postRun"].shift())}}callRuntimeCallbacks(__ATPOSTRUN__)}function addOnPreRun(cb){__ATPRERUN__.unshift(cb)}function addOnPostRun(cb){__ATPOSTRUN__.unshift(cb)}function writeArrayToMemory(array,buffer){HEAP8.set(array,buffer)}function writeAsciiToMemory(str,buffer,dontAddNull){for(var i=0;i<str.length;++i){HEAP8[buffer++>>0]=str.charCodeAt(i)}if(!dontAddNull)HEAP8[buffer>>0]=0}var runDependencies=0;var runDependencyWatcher=null;var dependenciesFulfilled=null;function addRunDependency(id){runDependencies++;if(Module["monitorRunDependencies"]){Module["monitorRunDependencies"](runDependencies)}}function removeRunDependency(id){runDependencies--;if(Module["monitorRunDependencies"]){Module["monitorRunDependencies"](runDependencies)}if(runDependencies==0){if(runDependencyWatcher!==null){clearInterval(runDependencyWatcher);runDependencyWatcher=null}if(dependenciesFulfilled){var callback=dependenciesFulfilled;dependenciesFulfilled=null;callback()}}}Module["preloadedImages"]={};Module["preloadedAudios"]={};var dataURIPrefix="data:application/octet-stream;base64,";function isDataURI(filename){return String.prototype.startsWith?filename.startsWith(dataURIPrefix):filename.indexOf(dataURIPrefix)===0}function integrateWasmJS(){var wasmTextFile="psp.sync.wast";var wasmBinaryFile="psp.sync.wasm";var asmjsCodeFile="psp.sync.temp.asm.js";if(!isDataURI(wasmTextFile)){wasmTextFile=locateFile(wasmTextFile)}if(!isDataURI(wasmBinaryFile)){wasmBinaryFile=locateFile(wasmBinaryFile)}if(!isDataURI(asmjsCodeFile)){asmjsCodeFile=locateFile(asmjsCodeFile)}var wasmPageSize=64*1024;var info={"global":null,"env":null,"asm2wasm":asm2wasmImports,"parent":Module};var exports=null;function mergeMemory(newBuffer){var oldBuffer=Module["buffer"];if(newBuffer.byteLength<oldBuffer.byteLength){err("the new buffer in mergeMemory is smaller than the previous one. in native wasm, we should grow memory here")}var oldView=new Int8Array(oldBuffer);var newView=new Int8Array(newBuffer);newView.set(oldView);updateGlobalBuffer(newBuffer);updateGlobalBufferViews()}function fixImports(imports){return imports}function getBinary(){try{if(Module["wasmBinary"]){return new Uint8Array(Module["wasmBinary"])}if(Module["readBinary"]){return Module["readBinary"](wasmBinaryFile)}else{throw"sync fetching of the wasm failed: you can preload it to Module['wasmBinary'] manually, or emcc.py will do that for you when generating HTML (but not JS)"}}catch(err){abort(err)}}function doNativeWasm(global,env,providedBuffer){if(typeof WebAssembly!=="object"){err("no native wasm support detected");return false}if(!(Module["wasmMemory"]instanceof WebAssembly.Memory)){err("no native wasm Memory in use");return false}env["memory"]=Module["wasmMemory"];info["global"]={"NaN":NaN,"Infinity":Infinity};info["global.Math"]=Math;info["env"]=env;function receiveInstance(instance,module){exports=instance.exports;if(exports.memory)mergeMemory(exports.memory);Module["asm"]=exports;Module["usingWasm"]=true;removeRunDependency("wasm-instantiate")}addRunDependency("wasm-instantiate");if(Module["instantiateWasm"]){try{return Module["instantiateWasm"](info,receiveInstance)}catch(e){err("Module.instantiateWasm callback failed with error: "+e);return false}}var instance;try{instance=new WebAssembly.Instance(new WebAssembly.Module(getBinary()),info)}catch(e){err("failed to compile wasm module: "+e);if(e.toString().indexOf("imported Memory with incompatible size")>=0){err("Memory size incompatibility issues may be due to changing TOTAL_MEMORY at runtime to something too large. Use ALLOW_MEMORY_GROWTH to allow any size memory (and also make sure not to set TOTAL_MEMORY at runtime to something smaller than it was at compile time).")}return false}receiveInstance(instance);return exports}Module["asmPreload"]=Module["asm"];var asmjsReallocBuffer=Module["reallocBuffer"];var wasmReallocBuffer=(function(size){var PAGE_MULTIPLE=Module["usingWasm"]?WASM_PAGE_SIZE:ASMJS_PAGE_SIZE;size=alignUp(size,PAGE_MULTIPLE);var old=Module["buffer"];var oldSize=old.byteLength;if(Module["usingWasm"]){try{var result=Module["wasmMemory"].grow((size-oldSize)/wasmPageSize);if(result!==(-1|0)){return Module["buffer"]=Module["wasmMemory"].buffer}else{return null}}catch(e){return null}}});Module["reallocBuffer"]=(function(size){if(finalMethod==="asmjs"){return asmjsReallocBuffer(size)}else{return wasmReallocBuffer(size)}});var finalMethod="";Module["asm"]=(function(global,env,providedBuffer){env=fixImports(env);if(!env["table"]){var TABLE_SIZE=Module["wasmTableSize"];if(TABLE_SIZE===undefined)TABLE_SIZE=1024;var MAX_TABLE_SIZE=Module["wasmMaxTableSize"];if(typeof WebAssembly==="object"&&typeof WebAssembly.Table==="function"){if(MAX_TABLE_SIZE!==undefined){env["table"]=new WebAssembly.Table({"initial":TABLE_SIZE,"maximum":MAX_TABLE_SIZE,"element":"anyfunc"})}else{env["table"]=new WebAssembly.Table({"initial":TABLE_SIZE,element:"anyfunc"})}}else{env["table"]=new Array(TABLE_SIZE)}Module["wasmTable"]=env["table"]}if(!env["memoryBase"]){env["memoryBase"]=Module["STATIC_BASE"]}if(!env["tableBase"]){env["tableBase"]=0}var exports;exports=doNativeWasm(global,env,providedBuffer);assert(exports,"no binaryen method succeeded.");return exports})}integrateWasmJS();var ASM_CONSTS=[(function(){if(typeof self!=="undefined"){if(self.dispatchEvent&&!self._perspective_initialized&&self.document){self._perspective_initialized=true;var event=self.document.createEvent("Event");event.initEvent("perspective-ready",false,true);self.dispatchEvent(event)}else if(!self.document&&self.postMessage){self.postMessage({})}}})];function _emscripten_asm_const_i(code){return ASM_CONSTS[code]()}STATIC_BASE=GLOBAL_BASE;STATICTOP=STATIC_BASE+54480;__ATINIT__.push({func:(function(){__GLOBAL__I_000101()})},{func:(function(){__GLOBAL__sub_I_main_cpp()})},{func:(function(){__GLOBAL__sub_I_sym_table_cpp()})},{func:(function(){__GLOBAL__sub_I_bind_cpp()})},{func:(function(){___emscripten_environ_constructor()})},{func:(function(){__GLOBAL__sub_I_iostream_cpp()})});var STATIC_BUMP=54480;Module["STATIC_BASE"]=STATIC_BASE;Module["STATIC_BUMP"]=STATIC_BUMP;STATICTOP+=16;function ___assert_fail(condition,filename,line,func){abort("Assertion failed: "+Pointer_stringify(condition)+", at: "+[filename?Pointer_stringify(filename):"unknown filename",line,func?Pointer_stringify(func):"unknown function"])}var ENV={};function ___buildEnvironment(environ){var MAX_ENV_VALUES=64;var TOTAL_ENV_SIZE=1024;var poolPtr;var envPtr;if(!___buildEnvironment.called){___buildEnvironment.called=true;ENV["USER"]=ENV["LOGNAME"]="web_user";ENV["PATH"]="/";ENV["PWD"]="/";ENV["HOME"]="/home/web_user";ENV["LANG"]="C.UTF-8";ENV["_"]=Module["thisProgram"];poolPtr=getMemory(TOTAL_ENV_SIZE);envPtr=getMemory(MAX_ENV_VALUES*4);HEAP32[envPtr>>2]=poolPtr;HEAP32[environ>>2]=envPtr}else{envPtr=HEAP32[environ>>2];poolPtr=HEAP32[envPtr>>2]}var strings=[];var totalSize=0;for(var key in ENV){if(typeof ENV[key]==="string"){var line=key+"="+ENV[key];strings.push(line);totalSize+=line.length}}if(totalSize>TOTAL_ENV_SIZE){throw new Error("Environment size exceeded TOTAL_ENV_SIZE!")}var ptrSize=4;for(var i=0;i<strings.length;i++){var line=strings[i];writeAsciiToMemory(line,poolPtr);HEAP32[envPtr+i*ptrSize>>2]=poolPtr;poolPtr+=line.length+1}HEAP32[envPtr+strings.length*ptrSize>>2]=0}function ___cxa_allocate_exception(size){return _malloc(size)}var EXCEPTIONS={last:0,caught:[],infos:{},deAdjust:(function(adjusted){if(!adjusted||EXCEPTIONS.infos[adjusted])return adjusted;for(var key in EXCEPTIONS.infos){var ptr=+key;var info=EXCEPTIONS.infos[ptr];if(info.adjusted===adjusted){return ptr}}return adjusted}),addRef:(function(ptr){if(!ptr)return;var info=EXCEPTIONS.infos[ptr];info.refcount++}),decRef:(function(ptr){if(!ptr)return;var info=EXCEPTIONS.infos[ptr];assert(info.refcount>0);info.refcount--;if(info.refcount===0&&!info.rethrown){if(info.destructor){Module["dynCall_vi"](info.destructor,ptr)}delete EXCEPTIONS.infos[ptr];___cxa_free_exception(ptr)}}),clearRef:(function(ptr){if(!ptr)return;var info=EXCEPTIONS.infos[ptr];info.refcount=0})};function ___cxa_pure_virtual(){ABORT=true;throw"Pure virtual function called!"}function ___cxa_throw(ptr,type,destructor){EXCEPTIONS.infos[ptr]={ptr:ptr,adjusted:ptr,type:type,destructor:destructor,refcount:0,caught:false,rethrown:false};EXCEPTIONS.last=ptr;if(!("uncaught_exception"in __ZSt18uncaught_exceptionv)){__ZSt18uncaught_exceptionv.uncaught_exception=1}else{__ZSt18uncaught_exceptionv.uncaught_exception++}throw ptr+" - Exception catching is disabled, this exception cannot be caught. Compile with -s DISABLE_EXCEPTION_CATCHING=0 or DISABLE_EXCEPTION_CATCHING=2 to catch."}function ___cxa_uncaught_exception(){return!!__ZSt18uncaught_exceptionv.uncaught_exception}function ___lock(){}var ERRNO_CODES={EPERM:1,ENOENT:2,ESRCH:3,EINTR:4,EIO:5,ENXIO:6,E2BIG:7,ENOEXEC:8,EBADF:9,ECHILD:10,EAGAIN:11,EWOULDBLOCK:11,ENOMEM:12,EACCES:13,EFAULT:14,ENOTBLK:15,EBUSY:16,EEXIST:17,EXDEV:18,ENODEV:19,ENOTDIR:20,EISDIR:21,EINVAL:22,ENFILE:23,EMFILE:24,ENOTTY:25,ETXTBSY:26,EFBIG:27,ENOSPC:28,ESPIPE:29,EROFS:30,EMLINK:31,EPIPE:32,EDOM:33,ERANGE:34,ENOMSG:42,EIDRM:43,ECHRNG:44,EL2NSYNC:45,EL3HLT:46,EL3RST:47,ELNRNG:48,EUNATCH:49,ENOCSI:50,EL2HLT:51,EDEADLK:35,ENOLCK:37,EBADE:52,EBADR:53,EXFULL:54,ENOANO:55,EBADRQC:56,EBADSLT:57,EDEADLOCK:35,EBFONT:59,ENOSTR:60,ENODATA:61,ETIME:62,ENOSR:63,ENONET:64,ENOPKG:65,EREMOTE:66,ENOLINK:67,EADV:68,ESRMNT:69,ECOMM:70,EPROTO:71,EMULTIHOP:72,EDOTDOT:73,EBADMSG:74,ENOTUNIQ:76,EBADFD:77,EREMCHG:78,ELIBACC:79,ELIBBAD:80,ELIBSCN:81,ELIBMAX:82,ELIBEXEC:83,ENOSYS:38,ENOTEMPTY:39,ENAMETOOLONG:36,ELOOP:40,EOPNOTSUPP:95,EPFNOSUPPORT:96,ECONNRESET:104,ENOBUFS:105,EAFNOSUPPORT:97,EPROTOTYPE:91,ENOTSOCK:88,ENOPROTOOPT:92,ESHUTDOWN:108,ECONNREFUSED:111,EADDRINUSE:98,ECONNABORTED:103,ENETUNREACH:101,ENETDOWN:100,ETIMEDOUT:110,EHOSTDOWN:112,EHOSTUNREACH:113,EINPROGRESS:115,EALREADY:114,EDESTADDRREQ:89,EMSGSIZE:90,EPROTONOSUPPORT:93,ESOCKTNOSUPPORT:94,EADDRNOTAVAIL:99,ENETRESET:102,EISCONN:106,ENOTCONN:107,ETOOMANYREFS:109,EUSERS:87,EDQUOT:122,ESTALE:116,ENOTSUP:95,ENOMEDIUM:123,EILSEQ:84,EOVERFLOW:75,ECANCELED:125,ENOTRECOVERABLE:131,EOWNERDEAD:130,ESTRPIPE:86};function ___setErrNo(value){if(Module["___errno_location"])HEAP32[Module["___errno_location"]()>>2]=value;return value}function ___map_file(pathname,size){___setErrNo(ERRNO_CODES.EPERM);return-1}var SYSCALLS={varargs:0,get:(function(varargs){SYSCALLS.varargs+=4;var ret=HEAP32[SYSCALLS.varargs-4>>2];return ret}),getStr:(function(){var ret=Pointer_stringify(SYSCALLS.get());return ret}),get64:(function(){var low=SYSCALLS.get(),high=SYSCALLS.get();if(low>=0)assert(high===0);else assert(high===-1);return low}),getZero:(function(){assert(SYSCALLS.get()===0)})};function ___syscall10(which,varargs){SYSCALLS.varargs=varargs;try{var path=SYSCALLS.getStr();FS.unlink(path);return 0}catch(e){if(typeof FS==="undefined"||!(e instanceof FS.ErrnoError))abort(e);return-e.errno}}function ___syscall140(which,varargs){SYSCALLS.varargs=varargs;try{var stream=SYSCALLS.getStreamFromFD(),offset_high=SYSCALLS.get(),offset_low=SYSCALLS.get(),result=SYSCALLS.get(),whence=SYSCALLS.get();var offset=offset_low;FS.llseek(stream,offset,whence);HEAP32[result>>2]=stream.position;if(stream.getdents&&offset===0&&whence===0)stream.getdents=null;return 0}catch(e){if(typeof FS==="undefined"||!(e instanceof FS.ErrnoError))abort(e);return-e.errno}}function ___syscall145(which,varargs){SYSCALLS.varargs=varargs;try{var stream=SYSCALLS.getStreamFromFD(),iov=SYSCALLS.get(),iovcnt=SYSCALLS.get();return SYSCALLS.doReadv(stream,iov,iovcnt)}catch(e){if(typeof FS==="undefined"||!(e instanceof FS.ErrnoError))abort(e);return-e.errno}}function ___syscall146(which,varargs){SYSCALLS.varargs=varargs;try{var stream=SYSCALLS.get(),iov=SYSCALLS.get(),iovcnt=SYSCALLS.get();var ret=0;if(!___syscall146.buffers){___syscall146.buffers=[null,[],[]];___syscall146.printChar=(function(stream,curr){var buffer=___syscall146.buffers[stream];assert(buffer);if(curr===0||curr===10){(stream===1?out:err)(UTF8ArrayToString(buffer,0));buffer.length=0}else{buffer.push(curr)}})}for(var i=0;i<iovcnt;i++){var ptr=HEAP32[iov+i*8>>2];var len=HEAP32[iov+(i*8+4)>>2];for(var j=0;j<len;j++){___syscall146.printChar(stream,HEAPU8[ptr+j])}ret+=len}return ret}catch(e){if(typeof FS==="undefined"||!(e instanceof FS.ErrnoError))abort(e);return-e.errno}}function ___syscall163(which,varargs){SYSCALLS.varargs=varargs;try{return-ERRNO_CODES.ENOMEM}catch(e){if(typeof FS==="undefined"||!(e instanceof FS.ErrnoError))abort(e);return-e.errno}}function ___syscall192(which,varargs){SYSCALLS.varargs=varargs;try{var addr=SYSCALLS.get(),len=SYSCALLS.get(),prot=SYSCALLS.get(),flags=SYSCALLS.get(),fd=SYSCALLS.get(),off=SYSCALLS.get();off<<=12;var ptr;var allocated=false;if(fd===-1){ptr=_memalign(PAGE_SIZE,len);if(!ptr)return-ERRNO_CODES.ENOMEM;_memset(ptr,0,len);allocated=true}else{var info=FS.getStream(fd);if(!info)return-ERRNO_CODES.EBADF;var res=FS.mmap(info,HEAPU8,addr,len,off,prot,flags);ptr=res.ptr;allocated=res.allocated}SYSCALLS.mappings[ptr]={malloc:ptr,len:len,allocated:allocated,fd:fd,flags:flags};return ptr}catch(e){if(typeof FS==="undefined"||!(e instanceof FS.ErrnoError))abort(e);return-e.errno}}function ___syscall194(which,varargs){SYSCALLS.varargs=varargs;try{var fd=SYSCALLS.get(),zero=SYSCALLS.getZero(),length=SYSCALLS.get64();FS.ftruncate(fd,length);return 0}catch(e){if(typeof FS==="undefined"||!(e instanceof FS.ErrnoError))abort(e);return-e.errno}}var PROCINFO={ppid:1,pid:42,sid:42,pgid:42};function ___syscall20(which,varargs){SYSCALLS.varargs=varargs;try{return PROCINFO.pid}catch(e){if(typeof FS==="undefined"||!(e instanceof FS.ErrnoError))abort(e);return-e.errno}}function ___syscall221(which,varargs){SYSCALLS.varargs=varargs;try{return 0}catch(e){if(typeof FS==="undefined"||!(e instanceof FS.ErrnoError))abort(e);return-e.errno}}function ___syscall5(which,varargs){SYSCALLS.varargs=varargs;try{var pathname=SYSCALLS.getStr(),flags=SYSCALLS.get(),mode=SYSCALLS.get();var stream=FS.open(pathname,flags,mode);return stream.fd}catch(e){if(typeof FS==="undefined"||!(e instanceof FS.ErrnoError))abort(e);return-e.errno}}function ___syscall54(which,varargs){SYSCALLS.varargs=varargs;try{return 0}catch(e){if(typeof FS==="undefined"||!(e instanceof FS.ErrnoError))abort(e);return-e.errno}}function ___syscall6(which,varargs){SYSCALLS.varargs=varargs;try{var stream=SYSCALLS.getStreamFromFD();FS.close(stream);return 0}catch(e){if(typeof FS==="undefined"||!(e instanceof FS.ErrnoError))abort(e);return-e.errno}}function ___syscall91(which,varargs){SYSCALLS.varargs=varargs;try{var addr=SYSCALLS.get(),len=SYSCALLS.get();var info=SYSCALLS.mappings[addr];if(!info)return 0;if(len===info.len){var stream=FS.getStream(info.fd);SYSCALLS.doMsync(addr,stream,len,info.flags);FS.munmap(stream);SYSCALLS.mappings[addr]=null;if(info.allocated){_free(info.malloc)}}return 0}catch(e){if(typeof FS==="undefined"||!(e instanceof FS.ErrnoError))abort(e);return-e.errno}}function ___unlock(){}var structRegistrations={};function runDestructors(destructors){while(destructors.length){var ptr=destructors.pop();var del=destructors.pop();del(ptr)}}function simpleReadValueFromPointer(pointer){return this["fromWireType"](HEAPU32[pointer>>2])}var awaitingDependencies={};var registeredTypes={};var typeDependencies={};var char_0=48;var char_9=57;function makeLegalFunctionName(name){if(undefined===name){return"_unknown"}name=name.replace(/[^a-zA-Z0-9_]/g,"$");var f=name.charCodeAt(0);if(f>=char_0&&f<=char_9){return"_"+name}else{return name}}function createNamedFunction(name,body){name=makeLegalFunctionName(name);return(function(){"use strict";return body.apply(this,arguments)})}function extendError(baseErrorType,errorName){var errorClass=createNamedFunction(errorName,(function(message){this.name=errorName;this.message=message;var stack=(new Error(message)).stack;if(stack!==undefined){this.stack=this.toString()+"\n"+stack.replace(/^Error(:[^\n]*)?\n/,"")}}));errorClass.prototype=Object.create(baseErrorType.prototype);errorClass.prototype.constructor=errorClass;errorClass.prototype.toString=(function(){if(this.message===undefined){return this.name}else{return this.name+": "+this.message}});return errorClass}var InternalError=undefined;function throwInternalError(message){throw new InternalError(message)}function whenDependentTypesAreResolved(myTypes,dependentTypes,getTypeConverters){myTypes.forEach((function(type){typeDependencies[type]=dependentTypes}));function onComplete(typeConverters){var myTypeConverters=getTypeConverters(typeConverters);if(myTypeConverters.length!==myTypes.length){throwInternalError("Mismatched type converter count")}for(var i=0;i<myTypes.length;++i){registerType(myTypes[i],myTypeConverters[i])}}var typeConverters=new Array(dependentTypes.length);var unregisteredTypes=[];var registered=0;dependentTypes.forEach((function(dt,i){if(registeredTypes.hasOwnProperty(dt)){typeConverters[i]=registeredTypes[dt]}else{unregisteredTypes.push(dt);if(!awaitingDependencies.hasOwnProperty(dt)){awaitingDependencies[dt]=[]}awaitingDependencies[dt].push((function(){typeConverters[i]=registeredTypes[dt];++registered;if(registered===unregisteredTypes.length){onComplete(typeConverters)}}))}}));if(0===unregisteredTypes.length){onComplete(typeConverters)}}function __embind_finalize_value_object(structType){var reg=structRegistrations[structType];delete structRegistrations[structType];var rawConstructor=reg.rawConstructor;var rawDestructor=reg.rawDestructor;var fieldRecords=reg.fields;var fieldTypes=fieldRecords.map((function(field){return field.getterReturnType})).concat(fieldRecords.map((function(field){return field.setterArgumentType})));whenDependentTypesAreResolved([structType],fieldTypes,(function(fieldTypes){var fields={};fieldRecords.forEach((function(field,i){var fieldName=field.fieldName;var getterReturnType=fieldTypes[i];var getter=field.getter;var getterContext=field.getterContext;var setterArgumentType=fieldTypes[i+fieldRecords.length];var setter=field.setter;var setterContext=field.setterContext;fields[fieldName]={read:(function(ptr){return getterReturnType["fromWireType"](getter(getterContext,ptr))}),write:(function(ptr,o){var destructors=[];setter(setterContext,ptr,setterArgumentType["toWireType"](destructors,o));runDestructors(destructors)})}}));return[{name:reg.name,"fromWireType":(function(ptr){var rv={};for(var i in fields){rv[i]=fields[i].read(ptr)}rawDestructor(ptr);return rv}),"toWireType":(function(destructors,o){for(var fieldName in fields){if(!(fieldName in o)){throw new TypeError("Missing field")}}var ptr=rawConstructor();for(fieldName in fields){fields[fieldName].write(ptr,o[fieldName])}if(destructors!==null){destructors.push(rawDestructor,ptr)}return ptr}),"argPackAdvance":8,"readValueFromPointer":simpleReadValueFromPointer,destructorFunction:rawDestructor}]}))}function getShiftFromSize(size){switch(size){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+size)}}function embind_init_charCodes(){var codes=new Array(256);for(var i=0;i<256;++i){codes[i]=String.fromCharCode(i)}embind_charCodes=codes}var embind_charCodes=undefined;function readLatin1String(ptr){var ret="";var c=ptr;while(HEAPU8[c]){ret+=embind_charCodes[HEAPU8[c++]]}return ret}var BindingError=undefined;function throwBindingError(message){throw new BindingError(message)}function registerType(rawType,registeredInstance,options){options=options||{};if(!("argPackAdvance"in registeredInstance)){throw new TypeError("registerType registeredInstance requires argPackAdvance")}var name=registeredInstance.name;if(!rawType){throwBindingError('type "'+name+'" must have a positive integer typeid pointer')}if(registeredTypes.hasOwnProperty(rawType)){if(options.ignoreDuplicateRegistrations){return}else{throwBindingError("Cannot register type '"+name+"' twice")}}registeredTypes[rawType]=registeredInstance;delete typeDependencies[rawType];if(awaitingDependencies.hasOwnProperty(rawType)){var callbacks=awaitingDependencies[rawType];delete awaitingDependencies[rawType];callbacks.forEach((function(cb){cb()}))}}function __embind_register_bool(rawType,name,size,trueValue,falseValue){var shift=getShiftFromSize(size);name=readLatin1String(name);registerType(rawType,{name:name,"fromWireType":(function(wt){return!!wt}),"toWireType":(function(destructors,o){return o?trueValue:falseValue}),"argPackAdvance":8,"readValueFromPointer":(function(pointer){var heap;if(size===1){heap=HEAP8}else if(size===2){heap=HEAP16}else if(size===4){heap=HEAP32}else{throw new TypeError("Unknown boolean type size: "+name)}return this["fromWireType"](heap[pointer>>shift])}),destructorFunction:null})}function ClassHandle_isAliasOf(other){if(!(this instanceof ClassHandle)){return false}if(!(other instanceof ClassHandle)){return false}var leftClass=this.$$.ptrType.registeredClass;var left=this.$$.ptr;var rightClass=other.$$.ptrType.registeredClass;var right=other.$$.ptr;while(leftClass.baseClass){left=leftClass.upcast(left);leftClass=leftClass.baseClass}while(rightClass.baseClass){right=rightClass.upcast(right);rightClass=rightClass.baseClass}return leftClass===rightClass&&left===right}function shallowCopyInternalPointer(o){return{count:o.count,deleteScheduled:o.deleteScheduled,preservePointerOnDelete:o.preservePointerOnDelete,ptr:o.ptr,ptrType:o.ptrType,smartPtr:o.smartPtr,smartPtrType:o.smartPtrType}}function throwInstanceAlreadyDeleted(obj){function getInstanceTypeName(handle){return handle.$$.ptrType.registeredClass.name}throwBindingError(getInstanceTypeName(obj)+" instance already deleted")}function ClassHandle_clone(){if(!this.$$.ptr){throwInstanceAlreadyDeleted(this)}if(this.$$.preservePointerOnDelete){this.$$.count.value+=1;return this}else{var clone=Object.create(Object.getPrototypeOf(this),{$$:{value:shallowCopyInternalPointer(this.$$)}});clone.$$.count.value+=1;clone.$$.deleteScheduled=false;return clone}}function runDestructor(handle){var $$=handle.$$;if($$.smartPtr){$$.smartPtrType.rawDestructor($$.smartPtr)}else{$$.ptrType.registeredClass.rawDestructor($$.ptr)}}function ClassHandle_delete(){if(!this.$$.ptr){throwInstanceAlreadyDeleted(this)}if(this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete){throwBindingError("Object already scheduled for deletion")}this.$$.count.value-=1;var toDelete=0===this.$$.count.value;if(toDelete){runDestructor(this)}if(!this.$$.preservePointerOnDelete){this.$$.smartPtr=undefined;this.$$.ptr=undefined}}function ClassHandle_isDeleted(){return!this.$$.ptr}var delayFunction=undefined;var deletionQueue=[];function flushPendingDeletes(){while(deletionQueue.length){var obj=deletionQueue.pop();obj.$$.deleteScheduled=false;obj["delete"]()}}function ClassHandle_deleteLater(){if(!this.$$.ptr){throwInstanceAlreadyDeleted(this)}if(this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete){throwBindingError("Object already scheduled for deletion")}deletionQueue.push(this);if(deletionQueue.length===1&&delayFunction){delayFunction(flushPendingDeletes)}this.$$.deleteScheduled=true;return this}function init_ClassHandle(){ClassHandle.prototype["isAliasOf"]=ClassHandle_isAliasOf;ClassHandle.prototype["clone"]=ClassHandle_clone;ClassHandle.prototype["delete"]=ClassHandle_delete;ClassHandle.prototype["isDeleted"]=ClassHandle_isDeleted;ClassHandle.prototype["deleteLater"]=ClassHandle_deleteLater}function ClassHandle(){}var registeredPointers={};function ensureOverloadTable(proto,methodName,humanName){if(undefined===proto[methodName].overloadTable){var prevFunc=proto[methodName];proto[methodName]=(function(){if(!proto[methodName].overloadTable.hasOwnProperty(arguments.length)){throwBindingError("Function '"+humanName+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+proto[methodName].overloadTable+")!")}return proto[methodName].overloadTable[arguments.length].apply(this,arguments)});proto[methodName].overloadTable=[];proto[methodName].overloadTable[prevFunc.argCount]=prevFunc}}function exposePublicSymbol(name,value,numArguments){if(Module.hasOwnProperty(name)){if(undefined===numArguments||undefined!==Module[name].overloadTable&&undefined!==Module[name].overloadTable[numArguments]){throwBindingError("Cannot register public name '"+name+"' twice")}ensureOverloadTable(Module,name,name);if(Module.hasOwnProperty(numArguments)){throwBindingError("Cannot register multiple overloads of a function with the same number of arguments ("+numArguments+")!")}Module[name].overloadTable[numArguments]=value}else{Module[name]=value;if(undefined!==numArguments){Module[name].numArguments=numArguments}}}function RegisteredClass(name,constructor,instancePrototype,rawDestructor,baseClass,getActualType,upcast,downcast){this.name=name;this.constructor=constructor;this.instancePrototype=instancePrototype;this.rawDestructor=rawDestructor;this.baseClass=baseClass;this.getActualType=getActualType;this.upcast=upcast;this.downcast=downcast;this.pureVirtualFunctions=[]}function upcastPointer(ptr,ptrClass,desiredClass){while(ptrClass!==desiredClass){if(!ptrClass.upcast){throwBindingError("Expected null or instance of "+desiredClass.name+", got an instance of "+ptrClass.name)}ptr=ptrClass.upcast(ptr);ptrClass=ptrClass.baseClass}return ptr}function constNoSmartPtrRawPointerToWireType(destructors,handle){if(handle===null){if(this.isReference){throwBindingError("null is not a valid "+this.name)}return 0}if(!handle.$$){throwBindingError('Cannot pass "'+_embind_repr(handle)+'" as a '+this.name)}if(!handle.$$.ptr){throwBindingError("Cannot pass deleted object as a pointer of type "+this.name)}var handleClass=handle.$$.ptrType.registeredClass;var ptr=upcastPointer(handle.$$.ptr,handleClass,this.registeredClass);return ptr}function genericPointerToWireType(destructors,handle){var ptr;if(handle===null){if(this.isReference){throwBindingError("null is not a valid "+this.name)}if(this.isSmartPointer){ptr=this.rawConstructor();if(destructors!==null){destructors.push(this.rawDestructor,ptr)}return ptr}else{return 0}}if(!handle.$$){throwBindingError('Cannot pass "'+_embind_repr(handle)+'" as a '+this.name)}if(!handle.$$.ptr){throwBindingError("Cannot pass deleted object as a pointer of type "+this.name)}if(!this.isConst&&handle.$$.ptrType.isConst){throwBindingError("Cannot convert argument of type "+(handle.$$.smartPtrType?handle.$$.smartPtrType.name:handle.$$.ptrType.name)+" to parameter type "+this.name)}var handleClass=handle.$$.ptrType.registeredClass;ptr=upcastPointer(handle.$$.ptr,handleClass,this.registeredClass);if(this.isSmartPointer){if(undefined===handle.$$.smartPtr){throwBindingError("Passing raw pointer to smart pointer is illegal")}switch(this.sharingPolicy){case 0:if(handle.$$.smartPtrType===this){ptr=handle.$$.smartPtr}else{throwBindingError("Cannot convert argument of type "+(handle.$$.smartPtrType?handle.$$.smartPtrType.name:handle.$$.ptrType.name)+" to parameter type "+this.name)}break;case 1:ptr=handle.$$.smartPtr;break;case 2:if(handle.$$.smartPtrType===this){ptr=handle.$$.smartPtr}else{var clonedHandle=handle["clone"]();ptr=this.rawShare(ptr,__emval_register((function(){clonedHandle["delete"]()})));if(destructors!==null){destructors.push(this.rawDestructor,ptr)}}break;default:throwBindingError("Unsupporting sharing policy")}}return ptr}function nonConstNoSmartPtrRawPointerToWireType(destructors,handle){if(handle===null){if(this.isReference){throwBindingError("null is not a valid "+this.name)}return 0}if(!handle.$$){throwBindingError('Cannot pass "'+_embind_repr(handle)+'" as a '+this.name)}if(!handle.$$.ptr){throwBindingError("Cannot pass deleted object as a pointer of type "+this.name)}if(handle.$$.ptrType.isConst){throwBindingError("Cannot convert argument of type "+handle.$$.ptrType.name+" to parameter type "+this.name)}var handleClass=handle.$$.ptrType.registeredClass;var ptr=upcastPointer(handle.$$.ptr,handleClass,this.registeredClass);return ptr}function RegisteredPointer_getPointee(ptr){if(this.rawGetPointee){ptr=this.rawGetPointee(ptr)}return ptr}function RegisteredPointer_destructor(ptr){if(this.rawDestructor){this.rawDestructor(ptr)}}function RegisteredPointer_deleteObject(handle){if(handle!==null){handle["delete"]()}}function downcastPointer(ptr,ptrClass,desiredClass){if(ptrClass===desiredClass){return ptr}if(undefined===desiredClass.baseClass){return null}var rv=downcastPointer(ptr,ptrClass,desiredClass.baseClass);if(rv===null){return null}return desiredClass.downcast(rv)}function getInheritedInstanceCount(){return Object.keys(registeredInstances).length}function getLiveInheritedInstances(){var rv=[];for(var k in registeredInstances){if(registeredInstances.hasOwnProperty(k)){rv.push(registeredInstances[k])}}return rv}function setDelayFunction(fn){delayFunction=fn;if(deletionQueue.length&&delayFunction){delayFunction(flushPendingDeletes)}}function init_embind(){Module["getInheritedInstanceCount"]=getInheritedInstanceCount;Module["getLiveInheritedInstances"]=getLiveInheritedInstances;Module["flushPendingDeletes"]=flushPendingDeletes;Module["setDelayFunction"]=setDelayFunction}var registeredInstances={};function getBasestPointer(class_,ptr){if(ptr===undefined){throwBindingError("ptr should not be undefined")}while(class_.baseClass){ptr=class_.upcast(ptr);class_=class_.baseClass}return ptr}function getInheritedInstance(class_,ptr){ptr=getBasestPointer(class_,ptr);return registeredInstances[ptr]}function makeClassHandle(prototype,record){if(!record.ptrType||!record.ptr){throwInternalError("makeClassHandle requires ptr and ptrType")}var hasSmartPtrType=!!record.smartPtrType;var hasSmartPtr=!!record.smartPtr;if(hasSmartPtrType!==hasSmartPtr){throwInternalError("Both smartPtrType and smartPtr must be specified")}record.count={value:1};return Object.create(prototype,{$$:{value:record}})}function RegisteredPointer_fromWireType(ptr){var rawPointer=this.getPointee(ptr);if(!rawPointer){this.destructor(ptr);return null}var registeredInstance=getInheritedInstance(this.registeredClass,rawPointer);if(undefined!==registeredInstance){if(0===registeredInstance.$$.count.value){registeredInstance.$$.ptr=rawPointer;registeredInstance.$$.smartPtr=ptr;return registeredInstance["clone"]()}else{var rv=registeredInstance["clone"]();this.destructor(ptr);return rv}}function makeDefaultHandle(){if(this.isSmartPointer){return makeClassHandle(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:rawPointer,smartPtrType:this,smartPtr:ptr})}else{return makeClassHandle(this.registeredClass.instancePrototype,{ptrType:this,ptr:ptr})}}var actualType=this.registeredClass.getActualType(rawPointer);var registeredPointerRecord=registeredPointers[actualType];if(!registeredPointerRecord){return makeDefaultHandle.call(this)}var toType;if(this.isConst){toType=registeredPointerRecord.constPointerType}else{toType=registeredPointerRecord.pointerType}var dp=downcastPointer(rawPointer,this.registeredClass,toType.registeredClass);if(dp===null){return makeDefaultHandle.call(this)}if(this.isSmartPointer){return makeClassHandle(toType.registeredClass.instancePrototype,{ptrType:toType,ptr:dp,smartPtrType:this,smartPtr:ptr})}else{return makeClassHandle(toType.registeredClass.instancePrototype,{ptrType:toType,ptr:dp})}}function init_RegisteredPointer(){RegisteredPointer.prototype.getPointee=RegisteredPointer_getPointee;RegisteredPointer.prototype.destructor=RegisteredPointer_destructor;RegisteredPointer.prototype["argPackAdvance"]=8;RegisteredPointer.prototype["readValueFromPointer"]=simpleReadValueFromPointer;RegisteredPointer.prototype["deleteObject"]=RegisteredPointer_deleteObject;RegisteredPointer.prototype["fromWireType"]=RegisteredPointer_fromWireType}function RegisteredPointer(name,registeredClass,isReference,isConst,isSmartPointer,pointeeType,sharingPolicy,rawGetPointee,rawConstructor,rawShare,rawDestructor){this.name=name;this.registeredClass=registeredClass;this.isReference=isReference;this.isConst=isConst;this.isSmartPointer=isSmartPointer;this.pointeeType=pointeeType;this.sharingPolicy=sharingPolicy;this.rawGetPointee=rawGetPointee;this.rawConstructor=rawConstructor;this.rawShare=rawShare;this.rawDestructor=rawDestructor;if(!isSmartPointer&&registeredClass.baseClass===undefined){if(isConst){this["toWireType"]=constNoSmartPtrRawPointerToWireType;this.destructorFunction=null}else{this["toWireType"]=nonConstNoSmartPtrRawPointerToWireType;this.destructorFunction=null}}else{this["toWireType"]=genericPointerToWireType}}function replacePublicSymbol(name,value,numArguments){if(!Module.hasOwnProperty(name)){throwInternalError("Replacing nonexistant public symbol")}if(undefined!==Module[name].overloadTable&&undefined!==numArguments){Module[name].overloadTable[numArguments]=value}else{Module[name]=value;Module[name].argCount=numArguments}}function embind__requireFunction(signature,rawFunction){signature=readLatin1String(signature);function makeDynCaller(dynCall){return(function(){var args=new Array(arguments.length+1);args[0]=rawFunction;for(var i=0;i<arguments.length;i++){args[i+1]=arguments[i]}return dynCall.apply(null,args)})}var fp;if(Module["FUNCTION_TABLE_"+signature]!==undefined){fp=Module["FUNCTION_TABLE_"+signature][rawFunction]}else if(typeof FUNCTION_TABLE!=="undefined"){fp=FUNCTION_TABLE[rawFunction]}else{var dc=Module["asm"]["dynCall_"+signature];if(dc===undefined){dc=Module["asm"]["dynCall_"+signature.replace(/f/g,"d")];if(dc===undefined){throwBindingError("No dynCall invoker for signature: "+signature)}}fp=makeDynCaller(dc)}if(typeof fp!=="function"){throwBindingError("unknown function pointer with signature "+signature+": "+rawFunction)}return fp}var UnboundTypeError=undefined;function getTypeName(type){var ptr=___getTypeName(type);var rv=readLatin1String(ptr);_free(ptr);return rv}function throwUnboundTypeError(message,types){var unboundTypes=[];var seen={};function visit(type){if(seen[type]){return}if(registeredTypes[type]){return}if(typeDependencies[type]){typeDependencies[type].forEach(visit);return}unboundTypes.push(type);seen[type]=true}types.forEach(visit);throw new UnboundTypeError(message+": "+unboundTypes.map(getTypeName).join([", "]))}function __embind_register_class(rawType,rawPointerType,rawConstPointerType,baseClassRawType,getActualTypeSignature,getActualType,upcastSignature,upcast,downcastSignature,downcast,name,destructorSignature,rawDestructor){name=readLatin1String(name);getActualType=embind__requireFunction(getActualTypeSignature,getActualType);if(upcast){upcast=embind__requireFunction(upcastSignature,upcast)}if(downcast){downcast=embind__requireFunction(downcastSignature,downcast)}rawDestructor=embind__requireFunction(destructorSignature,rawDestructor);var legalFunctionName=makeLegalFunctionName(name);exposePublicSymbol(legalFunctionName,(function(){throwUnboundTypeError("Cannot construct "+name+" due to unbound types",[baseClassRawType])}));whenDependentTypesAreResolved([rawType,rawPointerType,rawConstPointerType],baseClassRawType?[baseClassRawType]:[],(function(base){base=base[0];var baseClass;var basePrototype;if(baseClassRawType){baseClass=base.registeredClass;basePrototype=baseClass.instancePrototype}else{basePrototype=ClassHandle.prototype}var constructor=createNamedFunction(legalFunctionName,(function(){if(Object.getPrototypeOf(this)!==instancePrototype){throw new BindingError("Use 'new' to construct "+name)}if(undefined===registeredClass.constructor_body){throw new BindingError(name+" has no accessible constructor")}var body=registeredClass.constructor_body[arguments.length];if(undefined===body){throw new BindingError("Tried to invoke ctor of "+name+" with invalid number of parameters ("+arguments.length+") - expected ("+Object.keys(registeredClass.constructor_body).toString()+") parameters instead!")}return body.apply(this,arguments)}));var instancePrototype=Object.create(basePrototype,{constructor:{value:constructor}});constructor.prototype=instancePrototype;var registeredClass=new RegisteredClass(name,constructor,instancePrototype,rawDestructor,baseClass,getActualType,upcast,downcast);var referenceConverter=new RegisteredPointer(name,registeredClass,true,false,false);var pointerConverter=new RegisteredPointer(name+"*",registeredClass,false,false,false);var constPointerConverter=new RegisteredPointer(name+" const*",registeredClass,false,true,false);registeredPointers[rawType]={pointerType:pointerConverter,constPointerType:constPointerConverter};replacePublicSymbol(legalFunctionName,constructor);return[referenceConverter,pointerConverter,constPointerConverter]}))}function heap32VectorToArray(count,firstElement){var array=[];for(var i=0;i<count;i++){array.push(HEAP32[(firstElement>>2)+i])}return array}function __embind_register_class_constructor(rawClassType,argCount,rawArgTypesAddr,invokerSignature,invoker,rawConstructor){var rawArgTypes=heap32VectorToArray(argCount,rawArgTypesAddr);invoker=embind__requireFunction(invokerSignature,invoker);whenDependentTypesAreResolved([],[rawClassType],(function(classType){classType=classType[0];var humanName="constructor "+classType.name;if(undefined===classType.registeredClass.constructor_body){classType.registeredClass.constructor_body=[]}if(undefined!==classType.registeredClass.constructor_body[argCount-1]){throw new BindingError("Cannot register multiple constructors with identical number of parameters ("+(argCount-1)+") for class '"+classType.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!")}classType.registeredClass.constructor_body[argCount-1]=function unboundTypeHandler(){throwUnboundTypeError("Cannot construct "+classType.name+" due to unbound types",rawArgTypes)};whenDependentTypesAreResolved([],rawArgTypes,(function(argTypes){classType.registeredClass.constructor_body[argCount-1]=function constructor_body(){if(arguments.length!==argCount-1){throwBindingError(humanName+" called with "+arguments.length+" arguments, expected "+(argCount-1))}var destructors=[];var args=new Array(argCount);args[0]=rawConstructor;for(var i=1;i<argCount;++i){args[i]=argTypes[i]["toWireType"](destructors,arguments[i-1])}var ptr=invoker.apply(null,args);runDestructors(destructors);return argTypes[0]["fromWireType"](ptr)};return[]}));return[]}))}function craftInvokerFunction(humanName,argTypes,classType,cppInvokerFunc,cppTargetFunc){var argCount=argTypes.length;if(argCount<2){throwBindingError("argTypes array size mismatch! Must at least get return value and 'this' types!")}var isClassMethodFunc=argTypes[1]!==null&&classType!==null;var needsDestructorStack=false;for(var i=1;i<argTypes.length;++i){if(argTypes[i]!==null&&argTypes[i].destructorFunction===undefined){needsDestructorStack=true;break}}var returns=argTypes[0].name!=="void";var argsWired=new Array(argCount-2);return(function(){if(arguments.length!==argCount-2){throwBindingError("function "+humanName+" called with "+arguments.length+" arguments, expected "+(argCount-2)+" args!")}var destructors=needsDestructorStack?[]:null;var thisWired;if(isClassMethodFunc){thisWired=argTypes[1].toWireType(destructors,this)}for(var i=0;i<argCount-2;++i){argsWired[i]=argTypes[i+2].toWireType(destructors,arguments[i])}var invokerFuncArgs=isClassMethodFunc?[cppTargetFunc,thisWired]:[cppTargetFunc];var rv=cppInvokerFunc.apply(null,invokerFuncArgs.concat(argsWired));if(needsDestructorStack){runDestructors(destructors)}else{for(var i=isClassMethodFunc?1:2;i<argTypes.length;i++){var param=i===1?thisWired:argsWired[i-2];if(argTypes[i].destructorFunction!==null){argTypes[i].destructorFunction(param)}}}if(returns){return argTypes[0].fromWireType(rv)}})}function __embind_register_class_function(rawClassType,methodName,argCount,rawArgTypesAddr,invokerSignature,rawInvoker,context,isPureVirtual){var rawArgTypes=heap32VectorToArray(argCount,rawArgTypesAddr);methodName=readLatin1String(methodName);rawInvoker=embind__requireFunction(invokerSignature,rawInvoker);whenDependentTypesAreResolved([],[rawClassType],(function(classType){classType=classType[0];var humanName=classType.name+"."+methodName;if(isPureVirtual){classType.registeredClass.pureVirtualFunctions.push(methodName)}function unboundTypesHandler(){throwUnboundTypeError("Cannot call "+humanName+" due to unbound types",rawArgTypes)}var proto=classType.registeredClass.instancePrototype;var method=proto[methodName];if(undefined===method||undefined===method.overloadTable&&method.className!==classType.name&&method.argCount===argCount-2){unboundTypesHandler.argCount=argCount-2;unboundTypesHandler.className=classType.name;proto[methodName]=unboundTypesHandler}else{ensureOverloadTable(proto,methodName,humanName);proto[methodName].overloadTable[argCount-2]=unboundTypesHandler}whenDependentTypesAreResolved([],rawArgTypes,(function(argTypes){var memberFunction=craftInvokerFunction(humanName,argTypes,classType,rawInvoker,context);if(undefined===proto[methodName].overloadTable){memberFunction.argCount=argCount-2;proto[methodName]=memberFunction}else{proto[methodName].overloadTable[argCount-2]=memberFunction}return[]}));return[]}))}var emval_free_list=[];var emval_handle_array=[{},{value:undefined},{value:null},{value:true},{value:false}];function __emval_decref(handle){if(handle>4&&0===--emval_handle_array[handle].refcount){emval_handle_array[handle]=undefined;emval_free_list.push(handle)}}function count_emval_handles(){var count=0;for(var i=5;i<emval_handle_array.length;++i){if(emval_handle_array[i]!==undefined){++count}}return count}function get_first_emval(){for(var i=5;i<emval_handle_array.length;++i){if(emval_handle_array[i]!==undefined){return emval_handle_array[i]}}return null}function init_emval(){Module["count_emval_handles"]=count_emval_handles;Module["get_first_emval"]=get_first_emval}function __emval_register(value){switch(value){case undefined:{return 1};case null:{return 2};case true:{return 3};case false:{return 4};default:{var handle=emval_free_list.length?emval_free_list.pop():emval_handle_array.length;emval_handle_array[handle]={refcount:1,value:value};return handle}}}function __embind_register_emval(rawType,name){name=readLatin1String(name);registerType(rawType,{name:name,"fromWireType":(function(handle){var rv=emval_handle_array[handle].value;__emval_decref(handle);return rv}),"toWireType":(function(destructors,value){return __emval_register(value)}),"argPackAdvance":8,"readValueFromPointer":simpleReadValueFromPointer,destructorFunction:null})}function enumReadValueFromPointer(name,shift,signed){switch(shift){case 0:return(function(pointer){var heap=signed?HEAP8:HEAPU8;return this["fromWireType"](heap[pointer])});case 1:return(function(pointer){var heap=signed?HEAP16:HEAPU16;return this["fromWireType"](heap[pointer>>1])});case 2:return(function(pointer){var heap=signed?HEAP32:HEAPU32;return this["fromWireType"](heap[pointer>>2])});default:throw new TypeError("Unknown integer type: "+name)}}function __embind_register_enum(rawType,name,size,isSigned){var shift=getShiftFromSize(size);name=readLatin1String(name);function ctor(){}ctor.values={};registerType(rawType,{name:name,constructor:ctor,"fromWireType":(function(c){return this.constructor.values[c]}),"toWireType":(function(destructors,c){return c.value}),"argPackAdvance":8,"readValueFromPointer":enumReadValueFromPointer(name,shift,isSigned),destructorFunction:null});exposePublicSymbol(name,ctor)}function requireRegisteredType(rawType,humanName){var impl=registeredTypes[rawType];if(undefined===impl){throwBindingError(humanName+" has unknown type "+getTypeName(rawType))}return impl}function __embind_register_enum_value(rawEnumType,name,enumValue){var enumType=requireRegisteredType(rawEnumType,"enum");name=readLatin1String(name);var Enum=enumType.constructor;var Value=Object.create(enumType.constructor.prototype,{value:{value:enumValue},constructor:{value:createNamedFunction(enumType.name+"_"+name,(function(){}))}});Enum.values[enumValue]=Value;Enum[name]=Value}function _embind_repr(v){if(v===null){return"null"}var t=typeof v;if(t==="object"||t==="array"||t==="function"){return v.toString()}else{return""+v}}function floatReadValueFromPointer(name,shift){switch(shift){case 2:return(function(pointer){return this["fromWireType"](HEAPF32[pointer>>2])});case 3:return(function(pointer){return this["fromWireType"](HEAPF64[pointer>>3])});default:throw new TypeError("Unknown float type: "+name)}}function __embind_register_float(rawType,name,size){var shift=getShiftFromSize(size);name=readLatin1String(name);registerType(rawType,{name:name,"fromWireType":(function(value){return value}),"toWireType":(function(destructors,value){if(typeof value!=="number"&&typeof value!=="boolean"){throw new TypeError('Cannot convert "'+_embind_repr(value)+'" to '+this.name)}return value}),"argPackAdvance":8,"readValueFromPointer":floatReadValueFromPointer(name,shift),destructorFunction:null})}function __embind_register_function(name,argCount,rawArgTypesAddr,signature,rawInvoker,fn){var argTypes=heap32VectorToArray(argCount,rawArgTypesAddr);name=readLatin1String(name);rawInvoker=embind__requireFunction(signature,rawInvoker);exposePublicSymbol(name,(function(){throwUnboundTypeError("Cannot call "+name+" due to unbound types",argTypes)}),argCount-1);whenDependentTypesAreResolved([],argTypes,(function(argTypes){var invokerArgsArray=[argTypes[0],null].concat(argTypes.slice(1));replacePublicSymbol(name,craftInvokerFunction(name,invokerArgsArray,null,rawInvoker,fn),argCount-1);return[]}))}function integerReadValueFromPointer(name,shift,signed){switch(shift){case 0:return signed?function readS8FromPointer(pointer){return HEAP8[pointer]}:function readU8FromPointer(pointer){return HEAPU8[pointer]};case 1:return signed?function readS16FromPointer(pointer){return HEAP16[pointer>>1]}:function readU16FromPointer(pointer){return HEAPU16[pointer>>1]};case 2:return signed?function readS32FromPointer(pointer){return HEAP32[pointer>>2]}:function readU32FromPointer(pointer){return HEAPU32[pointer>>2]};default:throw new TypeError("Unknown integer type: "+name)}}function __embind_register_integer(primitiveType,name,size,minRange,maxRange){name=readLatin1String(name);if(maxRange===-1){maxRange=4294967295}var shift=getShiftFromSize(size);var fromWireType=(function(value){return value});if(minRange===0){var bitshift=32-8*size;fromWireType=(function(value){return value<<bitshift>>>bitshift})}var isUnsignedType=name.indexOf("unsigned")!=-1;registerType(primitiveType,{name:name,"fromWireType":fromWireType,"toWireType":(function(destructors,value){if(typeof value!=="number"&&typeof value!=="boolean"){throw new TypeError('Cannot convert "'+_embind_repr(value)+'" to '+this.name)}if(value<minRange||value>maxRange){throw new TypeError('Passing a number "'+_embind_repr(value)+'" from JS side to C/C++ side to an argument of type "'+name+'", which is outside the valid range ['+minRange+", "+maxRange+"]!")}return isUnsignedType?value>>>0:value|0}),"argPackAdvance":8,"readValueFromPointer":integerReadValueFromPointer(name,shift,minRange!==0),destructorFunction:null})}function __embind_register_memory_view(rawType,dataTypeIndex,name){var typeMapping=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array];var TA=typeMapping[dataTypeIndex];function decodeMemoryView(handle){handle=handle>>2;var heap=HEAPU32;var size=heap[handle];var data=heap[handle+1];return new TA(heap["buffer"],data,size)}name=readLatin1String(name);registerType(rawType,{name:name,"fromWireType":decodeMemoryView,"argPackAdvance":8,"readValueFromPointer":decodeMemoryView},{ignoreDuplicateRegistrations:true})}function __embind_register_smart_ptr(rawType,rawPointeeType,name,sharingPolicy,getPointeeSignature,rawGetPointee,constructorSignature,rawConstructor,shareSignature,rawShare,destructorSignature,rawDestructor){name=readLatin1String(name);rawGetPointee=embind__requireFunction(getPointeeSignature,rawGetPointee);rawConstructor=embind__requireFunction(constructorSignature,rawConstructor);rawShare=embind__requireFunction(shareSignature,rawShare);rawDestructor=embind__requireFunction(destructorSignature,rawDestructor);whenDependentTypesAreResolved([rawType],[rawPointeeType],(function(pointeeType){pointeeType=pointeeType[0];var registeredPointer=new RegisteredPointer(name,pointeeType.registeredClass,false,false,true,pointeeType,sharingPolicy,rawGetPointee,rawConstructor,rawShare,rawDestructor);return[registeredPointer]}))}function __embind_register_std_string(rawType,name){name=readLatin1String(name);registerType(rawType,{name:name,"fromWireType":(function(value){var length=HEAPU32[value>>2];var a=new Array(length);for(var i=0;i<length;++i){a[i]=String.fromCharCode(HEAPU8[value+4+i])}_free(value);return a.join("")}),"toWireType":(function(destructors,value){if(value instanceof ArrayBuffer){value=new Uint8Array(value)}function getTAElement(ta,index){return ta[index]}function getStringElement(string,index){return string.charCodeAt(index)}var getElement;if(value instanceof Uint8Array){getElement=getTAElement}else if(value instanceof Uint8ClampedArray){getElement=getTAElement}else if(value instanceof Int8Array){getElement=getTAElement}else if(typeof value==="string"){getElement=getStringElement}else{throwBindingError("Cannot pass non-string to std::string")}var length=value.length;var ptr=_malloc(4+length);HEAPU32[ptr>>2]=length;for(var i=0;i<length;++i){var charCode=getElement(value,i);if(charCode>255){_free(ptr);throwBindingError("String has UTF-16 code units that do not fit in 8 bits")}HEAPU8[ptr+4+i]=charCode}if(destructors!==null){destructors.push(_free,ptr)}return ptr}),"argPackAdvance":8,"readValueFromPointer":simpleReadValueFromPointer,destructorFunction:(function(ptr){_free(ptr)})})}function __embind_register_std_wstring(rawType,charSize,name){name=readLatin1String(name);var getHeap,shift;if(charSize===2){getHeap=(function(){return HEAPU16});shift=1}else if(charSize===4){getHeap=(function(){return HEAPU32});shift=2}registerType(rawType,{name:name,"fromWireType":(function(value){var HEAP=getHeap();var length=HEAPU32[value>>2];var a=new Array(length);var start=value+4>>shift;for(var i=0;i<length;++i){a[i]=String.fromCharCode(HEAP[start+i])}_free(value);return a.join("")}),"toWireType":(function(destructors,value){var HEAP=getHeap();var length=value.length;var ptr=_malloc(4+length*charSize);HEAPU32[ptr>>2]=length;var start=ptr+4>>shift;for(var i=0;i<length;++i){HEAP[start+i]=value.charCodeAt(i)}if(destructors!==null){destructors.push(_free,ptr)}return ptr}),"argPackAdvance":8,"readValueFromPointer":simpleReadValueFromPointer,destructorFunction:(function(ptr){_free(ptr)})})}function __embind_register_value_object(rawType,name,constructorSignature,rawConstructor,destructorSignature,rawDestructor){structRegistrations[rawType]={name:readLatin1String(name),rawConstructor:embind__requireFunction(constructorSignature,rawConstructor),rawDestructor:embind__requireFunction(destructorSignature,rawDestructor),fields:[]}}function __embind_register_value_object_field(structType,fieldName,getterReturnType,getterSignature,getter,getterContext,setterArgumentType,setterSignature,setter,setterContext){structRegistrations[structType].fields.push({fieldName:readLatin1String(fieldName),getterReturnType:getterReturnType,getter:embind__requireFunction(getterSignature,getter),getterContext:getterContext,setterArgumentType:setterArgumentType,setter:embind__requireFunction(setterSignature,setter),setterContext:setterContext})}function __embind_register_void(rawType,name){name=readLatin1String(name);registerType(rawType,{isVoid:true,name:name,"argPackAdvance":0,"fromWireType":(function(){return undefined}),"toWireType":(function(destructors,o){return undefined})})}function requireHandle(handle){if(!handle){throwBindingError("Cannot use deleted val. handle = "+handle)}return emval_handle_array[handle].value}function __emval_as(handle,returnType,destructorsRef){handle=requireHandle(handle);returnType=requireRegisteredType(returnType,"emval::as");var destructors=[];var rd=__emval_register(destructors);HEAP32[destructorsRef>>2]=rd;return returnType["toWireType"](destructors,handle)}function __emval_lookupTypes(argCount,argTypes,argWireTypes){var a=new Array(argCount);for(var i=0;i<argCount;++i){a[i]=requireRegisteredType(HEAP32[(argTypes>>2)+i],"parameter "+i)}return a}function __emval_call(handle,argCount,argTypes,argv){handle=requireHandle(handle);var types=__emval_lookupTypes(argCount,argTypes);var args=new Array(argCount);for(var i=0;i<argCount;++i){var type=types[i];args[i]=type["readValueFromPointer"](argv);argv+=type["argPackAdvance"]}var rv=handle.apply(undefined,args);return __emval_register(rv)}function __emval_allocateDestructors(destructorsRef){var destructors=[];HEAP32[destructorsRef>>2]=__emval_register(destructors);return destructors}var emval_symbols={};function getStringOrSymbol(address){var symbol=emval_symbols[address];if(symbol===undefined){return readLatin1String(address)}else{return symbol}}var emval_methodCallers=[];function __emval_call_method(caller,handle,methodName,destructorsRef,args){caller=emval_methodCallers[caller];handle=requireHandle(handle);methodName=getStringOrSymbol(methodName);return caller(handle,methodName,__emval_allocateDestructors(destructorsRef),args)}function __emval_call_void_method(caller,handle,methodName,args){caller=emval_methodCallers[caller];handle=requireHandle(handle);methodName=getStringOrSymbol(methodName);caller(handle,methodName,null,args)}function emval_get_global(){function testGlobal(obj){obj["$$$embind_global$$$"]=obj;var success=typeof $$$embind_global$$$==="object"&&obj["$$$embind_global$$$"]===obj;if(!success){delete obj["$$$embind_global$$$"]}return success}if(typeof $$$embind_global$$$==="object"){return $$$embind_global$$$}if(typeof global==="object"&&testGlobal(global)){$$$embind_global$$$=global}else if(typeof window==="object"&&testGlobal(window)){$$$embind_global$$$=window}if(typeof $$$embind_global$$$==="object"){return $$$embind_global$$$}throw Error("unable to get global object.")}function __emval_get_global(name){if(name===0){return __emval_register(emval_get_global())}else{name=getStringOrSymbol(name);return __emval_register(emval_get_global()[name])}}function __emval_addMethodCaller(caller){var id=emval_methodCallers.length;emval_methodCallers.push(caller);return id}function __emval_get_method_caller(argCount,argTypes){var types=__emval_lookupTypes(argCount,argTypes);var retType=types[0];var argN=new Array(argCount-1);var invokerFunction=(function(handle,name,destructors,args){var offset=0;for(var i=0;i<argCount-1;++i){argN[i]=types[i+1].readValueFromPointer(args+offset);offset+=types[i+1].argPackAdvance}var rv=handle[name].apply(handle,argN);for(var i=0;i<argCount-1;++i){if(types[i+1].deleteObject){types[i+1].deleteObject(argN[i])}}if(!retType.isVoid){return retType.toWireType(destructors,rv)}});return __emval_addMethodCaller(invokerFunction)}function __emval_get_module_property(name){name=getStringOrSymbol(name);return __emval_register(Module[name])}function __emval_get_property(handle,key){handle=requireHandle(handle);key=requireHandle(key);return __emval_register(handle[key])}function __emval_incref(handle){if(handle>4){emval_handle_array[handle].refcount+=1}}function craftEmvalAllocator(argCount){var argsList=new Array(argCount+1);return(function(constructor,argTypes,args){argsList[0]=constructor;for(var i=0;i<argCount;++i){var argType=requireRegisteredType(HEAP32[(argTypes>>2)+i],"parameter "+i);argsList[i+1]=argType.readValueFromPointer(args);args+=argType.argPackAdvance}var obj=new(constructor.bind.apply(constructor,argsList));return __emval_register(obj)})}var emval_newers={};function __emval_new(handle,argCount,argTypes,args){handle=requireHandle(handle);var newer=emval_newers[argCount];if(!newer){newer=craftEmvalAllocator(argCount);emval_newers[argCount]=newer}return newer(handle,argTypes,args)}function __emval_new_array(){return __emval_register([])}function __emval_new_cstring(v){return __emval_register(getStringOrSymbol(v))}function __emval_run_destructors(handle){var destructors=emval_handle_array[handle].value;runDestructors(destructors);__emval_decref(handle)}function __emval_set_property(handle,key,value){handle=requireHandle(handle);key=requireHandle(key);value=requireHandle(value);handle[key]=value}function __emval_take_value(type,argv){type=requireRegisteredType(type,"_emval_take_value");var v=type["readValueFromPointer"](argv);return __emval_register(v)}function _abort(){Module["abort"]()}function _clock(){if(_clock.start===undefined)_clock.start=Date.now();return(Date.now()-_clock.start)*(1e6/1e3)|0}function _emscripten_get_now(){abort()}function _emscripten_get_now_is_monotonic(){return ENVIRONMENT_IS_NODE||typeof dateNow!=="undefined"||(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER)&&self["performance"]&&self["performance"]["now"]}function _clock_gettime(clk_id,tp){var now;if(clk_id===0){now=Date.now()}else if(clk_id===1&&_emscripten_get_now_is_monotonic()){now=_emscripten_get_now()}else{___setErrNo(ERRNO_CODES.EINVAL);return-1}HEAP32[tp>>2]=now/1e3|0;HEAP32[tp+4>>2]=now%1e3*1e3*1e3|0;return 0}function _getenv(name){if(name===0)return 0;name=Pointer_stringify(name);if(!ENV.hasOwnProperty(name))return 0;if(_getenv.ret)_free(_getenv.ret);_getenv.ret=allocateUTF8(ENV[name]);return _getenv.ret}function _getpagesize(){return PAGE_SIZE}function _gettimeofday(ptr){var now=Date.now();HEAP32[ptr>>2]=now/1e3|0;HEAP32[ptr+4>>2]=now%1e3*1e3|0;return 0}function _llvm_stackrestore(p){var self=_llvm_stacksave;var ret=self.LLVM_SAVEDSTACKS[p];self.LLVM_SAVEDSTACKS.splice(p,1);stackRestore(ret)}function _llvm_stacksave(){var self=_llvm_stacksave;if(!self.LLVM_SAVEDSTACKS){self.LLVM_SAVEDSTACKS=[]}self.LLVM_SAVEDSTACKS.push(stackSave());return self.LLVM_SAVEDSTACKS.length-1}function _llvm_trap(){abort("trap!")}function _emscripten_memcpy_big(dest,src,num){HEAPU8.set(HEAPU8.subarray(src,src+num),dest);return dest}function _usleep(useconds){var msec=useconds/1e3;if((ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER)&&self["performance"]&&self["performance"]["now"]){var start=self["performance"]["now"]();while(self["performance"]["now"]()-start<msec){}}else{var start=Date.now();while(Date.now()-start<msec){}}return 0}function _nanosleep(rqtp,rmtp){var seconds=HEAP32[rqtp>>2];var nanoseconds=HEAP32[rqtp+4>>2];if(rmtp!==0){HEAP32[rmtp>>2]=0;HEAP32[rmtp+4>>2]=0}return _usleep(seconds*1e6+nanoseconds/1e3)}function _pthread_cond_wait(){return 0}var PTHREAD_SPECIFIC={};function _pthread_getspecific(key){return PTHREAD_SPECIFIC[key]||0}var PTHREAD_SPECIFIC_NEXT_KEY=1;function _pthread_key_create(key,destructor){if(key==0){return ERRNO_CODES.EINVAL}HEAP32[key>>2]=PTHREAD_SPECIFIC_NEXT_KEY;PTHREAD_SPECIFIC[PTHREAD_SPECIFIC_NEXT_KEY]=0;PTHREAD_SPECIFIC_NEXT_KEY++;return 0}function _pthread_mutex_destroy(){}function _pthread_once(ptr,func){if(!_pthread_once.seen)_pthread_once.seen={};if(ptr in _pthread_once.seen)return;Module["dynCall_v"](func);_pthread_once.seen[ptr]=1}function _pthread_setspecific(key,value){if(!(key in PTHREAD_SPECIFIC)){return ERRNO_CODES.EINVAL}PTHREAD_SPECIFIC[key]=value;return 0}function __isLeapYear(year){return year%4===0&&(year%100!==0||year%400===0)}function __arraySum(array,index){var sum=0;for(var i=0;i<=index;sum+=array[i++]);return sum}var __MONTH_DAYS_LEAP=[31,29,31,30,31,30,31,31,30,31,30,31];var __MONTH_DAYS_REGULAR=[31,28,31,30,31,30,31,31,30,31,30,31];function __addDays(date,days){var newDate=new Date(date.getTime());while(days>0){var leap=__isLeapYear(newDate.getFullYear());var currentMonth=newDate.getMonth();var daysInCurrentMonth=(leap?__MONTH_DAYS_LEAP:__MONTH_DAYS_REGULAR)[currentMonth];if(days>daysInCurrentMonth-newDate.getDate()){days-=daysInCurrentMonth-newDate.getDate()+1;newDate.setDate(1);if(currentMonth<11){newDate.setMonth(currentMonth+1)}else{newDate.setMonth(0);newDate.setFullYear(newDate.getFullYear()+1)}}else{newDate.setDate(newDate.getDate()+days);return newDate}}return newDate}function _strftime(s,maxsize,format,tm){var tm_zone=HEAP32[tm+40>>2];var date={tm_sec:HEAP32[tm>>2],tm_min:HEAP32[tm+4>>2],tm_hour:HEAP32[tm+8>>2],tm_mday:HEAP32[tm+12>>2],tm_mon:HEAP32[tm+16>>2],tm_year:HEAP32[tm+20>>2],tm_wday:HEAP32[tm+24>>2],tm_yday:HEAP32[tm+28>>2],tm_isdst:HEAP32[tm+32>>2],tm_gmtoff:HEAP32[tm+36>>2],tm_zone:tm_zone?Pointer_stringify(tm_zone):""};var pattern=Pointer_stringify(format);var EXPANSION_RULES_1={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S"};for(var rule in EXPANSION_RULES_1){pattern=pattern.replace(new RegExp(rule,"g"),EXPANSION_RULES_1[rule])}var WEEKDAYS=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];var MONTHS=["January","February","March","April","May","June","July","August","September","October","November","December"];function leadingSomething(value,digits,character){var str=typeof value==="number"?value.toString():value||"";while(str.length<digits){str=character[0]+str}return str}function leadingNulls(value,digits){return leadingSomething(value,digits,"0")}function compareByDay(date1,date2){function sgn(value){return value<0?-1:value>0?1:0}var compare;if((compare=sgn(date1.getFullYear()-date2.getFullYear()))===0){if((compare=sgn(date1.getMonth()-date2.getMonth()))===0){compare=sgn(date1.getDate()-date2.getDate())}}return compare}function getFirstWeekStartDate(janFourth){switch(janFourth.getDay()){case 0:return new Date(janFourth.getFullYear()-1,11,29);case 1:return janFourth;case 2:return new Date(janFourth.getFullYear(),0,3);case 3:return new Date(janFourth.getFullYear(),0,2);case 4:return new Date(janFourth.getFullYear(),0,1);case 5:return new Date(janFourth.getFullYear()-1,11,31);case 6:return new Date(janFourth.getFullYear()-1,11,30)}}function getWeekBasedYear(date){var thisDate=__addDays(new Date(date.tm_year+1900,0,1),date.tm_yday);var janFourthThisYear=new Date(thisDate.getFullYear(),0,4);var janFourthNextYear=new Date(thisDate.getFullYear()+1,0,4);var firstWeekStartThisYear=getFirstWeekStartDate(janFourthThisYear);var firstWeekStartNextYear=getFirstWeekStartDate(janFourthNextYear);if(compareByDay(firstWeekStartThisYear,thisDate)<=0){if(compareByDay(firstWeekStartNextYear,thisDate)<=0){return thisDate.getFullYear()+1}else{return thisDate.getFullYear()}}else{return thisDate.getFullYear()-1}}var EXPANSION_RULES_2={"%a":(function(date){return WEEKDAYS[date.tm_wday].substring(0,3)}),"%A":(function(date){return WEEKDAYS[date.tm_wday]}),"%b":(function(date){return MONTHS[date.tm_mon].substring(0,3)}),"%B":(function(date){return MONTHS[date.tm_mon]}),"%C":(function(date){var year=date.tm_year+1900;return leadingNulls(year/100|0,2)}),"%d":(function(date){return leadingNulls(date.tm_mday,2)}),"%e":(function(date){return leadingSomething(date.tm_mday,2," ")}),"%g":(function(date){return getWeekBasedYear(date).toString().substring(2)}),"%G":(function(date){return getWeekBasedYear(date)}),"%H":(function(date){return leadingNulls(date.tm_hour,2)}),"%I":(function(date){var twelveHour=date.tm_hour;if(twelveHour==0)twelveHour=12;else if(twelveHour>12)twelveHour-=12;return leadingNulls(twelveHour,2)}),"%j":(function(date){return leadingNulls(date.tm_mday+__arraySum(__isLeapYear(date.tm_year+1900)?__MONTH_DAYS_LEAP:__MONTH_DAYS_REGULAR,date.tm_mon-1),3)}),"%m":(function(date){return leadingNulls(date.tm_mon+1,2)}),"%M":(function(date){return leadingNulls(date.tm_min,2)}),"%n":(function(){return"\n"}),"%p":(function(date){if(date.tm_hour>=0&&date.tm_hour<12){return"AM"}else{return"PM"}}),"%S":(function(date){return leadingNulls(date.tm_sec,2)}),"%t":(function(){return"\t"}),"%u":(function(date){var day=new Date(date.tm_year+1900,date.tm_mon+1,date.tm_mday,0,0,0,0);return day.getDay()||7}),"%U":(function(date){var janFirst=new Date(date.tm_year+1900,0,1);var firstSunday=janFirst.getDay()===0?janFirst:__addDays(janFirst,7-janFirst.getDay());var endDate=new Date(date.tm_year+1900,date.tm_mon,date.tm_mday);if(compareByDay(firstSunday,endDate)<0){var februaryFirstUntilEndMonth=__arraySum(__isLeapYear(endDate.getFullYear())?__MONTH_DAYS_LEAP:__MONTH_DAYS_REGULAR,endDate.getMonth()-1)-31;var firstSundayUntilEndJanuary=31-firstSunday.getDate();var days=firstSundayUntilEndJanuary+februaryFirstUntilEndMonth+endDate.getDate();return leadingNulls(Math.ceil(days/7),2)}return compareByDay(firstSunday,janFirst)===0?"01":"00"}),"%V":(function(date){var janFourthThisYear=new Date(date.tm_year+1900,0,4);var janFourthNextYear=new Date(date.tm_year+1901,0,4);var firstWeekStartThisYear=getFirstWeekStartDate(janFourthThisYear);var firstWeekStartNextYear=getFirstWeekStartDate(janFourthNextYear);var endDate=__addDays(new Date(date.tm_year+1900,0,1),date.tm_yday);if(compareByDay(endDate,firstWeekStartThisYear)<0){return"53"}if(compareByDay(firstWeekStartNextYear,endDate)<=0){return"01"}var daysDifference;if(firstWeekStartThisYear.getFullYear()<date.tm_year+1900){daysDifference=date.tm_yday+32-firstWeekStartThisYear.getDate()}else{daysDifference=date.tm_yday+1-firstWeekStartThisYear.getDate()}return leadingNulls(Math.ceil(daysDifference/7),2)}),"%w":(function(date){var day=new Date(date.tm_year+1900,date.tm_mon+1,date.tm_mday,0,0,0,0);return day.getDay()}),"%W":(function(date){var janFirst=new Date(date.tm_year,0,1);var firstMonday=janFirst.getDay()===1?janFirst:__addDays(janFirst,janFirst.getDay()===0?1:7-janFirst.getDay()+1);var endDate=new Date(date.tm_year+1900,date.tm_mon,date.tm_mday);if(compareByDay(firstMonday,endDate)<0){var februaryFirstUntilEndMonth=__arraySum(__isLeapYear(endDate.getFullYear())?__MONTH_DAYS_LEAP:__MONTH_DAYS_REGULAR,endDate.getMonth()-1)-31;var firstMondayUntilEndJanuary=31-firstMonday.getDate();var days=firstMondayUntilEndJanuary+februaryFirstUntilEndMonth+endDate.getDate();return leadingNulls(Math.ceil(days/7),2)}return compareByDay(firstMonday,janFirst)===0?"01":"00"}),"%y":(function(date){return(date.tm_year+1900).toString().substring(2)}),"%Y":(function(date){return date.tm_year+1900}),"%z":(function(date){var off=date.tm_gmtoff;var ahead=off>=0;off=Math.abs(off)/60;off=off/60*100+off%60;return(ahead?"+":"-")+String("0000"+off).slice(-4)}),"%Z":(function(date){return date.tm_zone}),"%%":(function(){return"%"})};for(var rule in EXPANSION_RULES_2){if(pattern.indexOf(rule)>=0){pattern=pattern.replace(new RegExp(rule,"g"),EXPANSION_RULES_2[rule](date))}}var bytes=intArrayFromString(pattern,false);if(bytes.length>maxsize){return 0}writeArrayToMemory(bytes,s);return bytes.length-1}function _strftime_l(s,maxsize,format,tm){return _strftime(s,maxsize,format,tm)}InternalError=Module["InternalError"]=extendError(Error,"InternalError");embind_init_charCodes();BindingError=Module["BindingError"]=extendError(Error,"BindingError");init_ClassHandle();init_RegisteredPointer();init_embind();UnboundTypeError=Module["UnboundTypeError"]=extendError(Error,"UnboundTypeError");init_emval();if(ENVIRONMENT_IS_NODE){_emscripten_get_now=function _emscripten_get_now_actual(){var t=process["hrtime"]();return t[0]*1e3+t[1]/1e6}}else if(typeof dateNow!=="undefined"){_emscripten_get_now=dateNow}else if(typeof self==="object"&&self["performance"]&&typeof self["performance"]["now"]==="function"){_emscripten_get_now=(function(){return self["performance"]["now"]()})}else if(typeof performance==="object"&&typeof performance["now"]==="function"){_emscripten_get_now=(function(){return performance["now"]()})}else{_emscripten_get_now=Date.now}DYNAMICTOP_PTR=staticAlloc(4);STACK_BASE=STACKTOP=alignMemory(STATICTOP);STACK_MAX=STACK_BASE+TOTAL_STACK;DYNAMIC_BASE=alignMemory(STACK_MAX);HEAP32[DYNAMICTOP_PTR>>2]=DYNAMIC_BASE;staticSealed=true;function intArrayFromString(stringy,dontAddNull,length){var len=length>0?length:lengthBytesUTF8(stringy)+1;var u8array=new Array(len);var numBytesWritten=stringToUTF8Array(stringy,u8array,0,u8array.length);if(dontAddNull)u8array.length=numBytesWritten;return u8array}Module["wasmTableSize"]=1476;Module["wasmMaxTableSize"]=1476;Module.asmGlobalArg={};Module.asmLibraryArg={"abort":abort,"enlargeMemory":enlargeMemory,"getTotalMemory":getTotalMemory,"abortOnCannotGrowMemory":abortOnCannotGrowMemory,"___assert_fail":___assert_fail,"___buildEnvironment":___buildEnvironment,"___cxa_allocate_exception":___cxa_allocate_exception,"___cxa_pure_virtual":___cxa_pure_virtual,"___cxa_throw":___cxa_throw,"___cxa_uncaught_exception":___cxa_uncaught_exception,"___lock":___lock,"___map_file":___map_file,"___setErrNo":___setErrNo,"___syscall10":___syscall10,"___syscall140":___syscall140,"___syscall145":___syscall145,"___syscall146":___syscall146,"___syscall163":___syscall163,"___syscall192":___syscall192,"___syscall194":___syscall194,"___syscall20":___syscall20,"___syscall221":___syscall221,"___syscall5":___syscall5,"___syscall54":___syscall54,"___syscall6":___syscall6,"___syscall91":___syscall91,"___unlock":___unlock,"__embind_finalize_value_object":__embind_finalize_value_object,"__embind_register_bool":__embind_register_bool,"__embind_register_class":__embind_register_class,"__embind_register_class_constructor":__embind_register_class_constructor,"__embind_register_class_function":__embind_register_class_function,"__embind_register_emval":__embind_register_emval,"__embind_register_enum":__embind_register_enum,"__embind_register_enum_value":__embind_register_enum_value,"__embind_register_float":__embind_register_float,"__embind_register_function":__embind_register_function,"__embind_register_integer":__embind_register_integer,"__embind_register_memory_view":__embind_register_memory_view,"__embind_register_smart_ptr":__embind_register_smart_ptr,"__embind_register_std_string":__embind_register_std_string,"__embind_register_std_wstring":__embind_register_std_wstring,"__embind_register_value_object":__embind_register_value_object,"__embind_register_value_object_field":__embind_register_value_object_field,"__embind_register_void":__embind_register_void,"__emval_as":__emval_as,"__emval_call":__emval_call,"__emval_call_method":__emval_call_method,"__emval_call_void_method":__emval_call_void_method,"__emval_decref":__emval_decref,"__emval_get_global":__emval_get_global,"__emval_get_method_caller":__emval_get_method_caller,"__emval_get_module_property":__emval_get_module_property,"__emval_get_property":__emval_get_property,"__emval_incref":__emval_incref,"__emval_new":__emval_new,"__emval_new_array":__emval_new_array,"__emval_new_cstring":__emval_new_cstring,"__emval_run_destructors":__emval_run_destructors,"__emval_set_property":__emval_set_property,"__emval_take_value":__emval_take_value,"_abort":_abort,"_clock":_clock,"_clock_gettime":_clock_gettime,"_emscripten_asm_const_i":_emscripten_asm_const_i,"_emscripten_memcpy_big":_emscripten_memcpy_big,"_getenv":_getenv,"_getpagesize":_getpagesize,"_gettimeofday":_gettimeofday,"_llvm_stackrestore":_llvm_stackrestore,"_llvm_stacksave":_llvm_stacksave,"_llvm_trap":_llvm_trap,"_nanosleep":_nanosleep,"_pthread_cond_wait":_pthread_cond_wait,"_pthread_getspecific":_pthread_getspecific,"_pthread_key_create":_pthread_key_create,"_pthread_mutex_destroy":_pthread_mutex_destroy,"_pthread_once":_pthread_once,"_pthread_setspecific":_pthread_setspecific,"_strftime_l":_strftime_l,"DYNAMICTOP_PTR":DYNAMICTOP_PTR,"STACKTOP":STACKTOP};var asm=Module["asm"](Module.asmGlobalArg,Module.asmLibraryArg,buffer);var __GLOBAL__I_000101=Module["__GLOBAL__I_000101"]=asm["__GLOBAL__I_000101"];var __GLOBAL__sub_I_bind_cpp=Module["__GLOBAL__sub_I_bind_cpp"]=asm["__GLOBAL__sub_I_bind_cpp"];var __GLOBAL__sub_I_iostream_cpp=Module["__GLOBAL__sub_I_iostream_cpp"]=asm["__GLOBAL__sub_I_iostream_cpp"];var __GLOBAL__sub_I_main_cpp=Module["__GLOBAL__sub_I_main_cpp"]=asm["__GLOBAL__sub_I_main_cpp"];var __GLOBAL__sub_I_sym_table_cpp=Module["__GLOBAL__sub_I_sym_table_cpp"]=asm["__GLOBAL__sub_I_sym_table_cpp"];var __ZSt18uncaught_exceptionv=Module["__ZSt18uncaught_exceptionv"]=asm["__ZSt18uncaught_exceptionv"];var ___emscripten_environ_constructor=Module["___emscripten_environ_constructor"]=asm["___emscripten_environ_constructor"];var ___getTypeName=Module["___getTypeName"]=asm["___getTypeName"];var _emscripten_replace_memory=Module["_emscripten_replace_memory"]=asm["_emscripten_replace_memory"];var _free=Module["_free"]=asm["_free"];var _main=Module["_main"]=asm["_main"];var _malloc=Module["_malloc"]=asm["_malloc"];var _memalign=Module["_memalign"]=asm["_memalign"];var _memset=Module["_memset"]=asm["_memset"];var stackAlloc=Module["stackAlloc"]=asm["stackAlloc"];var stackRestore=Module["stackRestore"]=asm["stackRestore"];var stackSave=Module["stackSave"]=asm["stackSave"];var dynCall_i=Module["dynCall_i"]=asm["dynCall_i"];var dynCall_ii=Module["dynCall_ii"]=asm["dynCall_ii"];var dynCall_iii=Module["dynCall_iii"]=asm["dynCall_iii"];var dynCall_iiii=Module["dynCall_iiii"]=asm["dynCall_iiii"];var dynCall_iiiii=Module["dynCall_iiiii"]=asm["dynCall_iiiii"];var dynCall_iiiiid=Module["dynCall_iiiiid"]=asm["dynCall_iiiiid"];var dynCall_iiiiii=Module["dynCall_iiiiii"]=asm["dynCall_iiiiii"];var dynCall_iiiiiid=Module["dynCall_iiiiiid"]=asm["dynCall_iiiiiid"];var dynCall_iiiiiii=Module["dynCall_iiiiiii"]=asm["dynCall_iiiiiii"];var dynCall_iiiiiiii=Module["dynCall_iiiiiiii"]=asm["dynCall_iiiiiiii"];var dynCall_iiiiiiiii=Module["dynCall_iiiiiiiii"]=asm["dynCall_iiiiiiiii"];var dynCall_iiiiiiiiiii=Module["dynCall_iiiiiiiiiii"]=asm["dynCall_iiiiiiiiiii"];var dynCall_iiiiij=Module["dynCall_iiiiij"]=asm["dynCall_iiiiij"];var dynCall_v=Module["dynCall_v"]=asm["dynCall_v"];var dynCall_vi=Module["dynCall_vi"]=asm["dynCall_vi"];var dynCall_vii=Module["dynCall_vii"]=asm["dynCall_vii"];var dynCall_viii=Module["dynCall_viii"]=asm["dynCall_viii"];var dynCall_viiii=Module["dynCall_viiii"]=asm["dynCall_viiii"];var dynCall_viiiii=Module["dynCall_viiiii"]=asm["dynCall_viiiii"];var dynCall_viiiiii=Module["dynCall_viiiiii"]=asm["dynCall_viiiiii"];var dynCall_viiiiiii=Module["dynCall_viiiiiii"]=asm["dynCall_viiiiiii"];var dynCall_viiiiiiii=Module["dynCall_viiiiiiii"]=asm["dynCall_viiiiiiii"];var dynCall_viiiiiiiiii=Module["dynCall_viiiiiiiiii"]=asm["dynCall_viiiiiiiiii"];var dynCall_viijii=Module["dynCall_viijii"]=asm["dynCall_viijii"];Module["asm"]=asm;function ExitStatus(status){this.name="ExitStatus";this.message="Program terminated with exit("+status+")";this.status=status}ExitStatus.prototype=new Error;ExitStatus.prototype.constructor=ExitStatus;var initialStackTop;var calledMain=false;dependenciesFulfilled=function runCaller(){if(!Module["calledRun"])run();if(!Module["calledRun"])dependenciesFulfilled=runCaller};Module["callMain"]=function callMain(args){args=args||[];ensureInitRuntime();var argc=args.length+1;var argv=stackAlloc((argc+1)*4);HEAP32[argv>>2]=allocateUTF8OnStack(Module["thisProgram"]);for(var i=1;i<argc;i++){HEAP32[(argv>>2)+i]=allocateUTF8OnStack(args[i-1])}HEAP32[(argv>>2)+argc]=0;try{var ret=Module["_main"](argc,argv,0);exit(ret,true)}catch(e){if(e instanceof ExitStatus){return}else if(e=="SimulateInfiniteLoop"){Module["noExitRuntime"]=true;return}else{var toLog=e;if(e&&typeof e==="object"&&e.stack){toLog=[e,e.stack]}err("exception thrown: "+toLog);Module["quit"](1,e)}}finally{calledMain=true}};function run(args){args=args||Module["arguments"];if(runDependencies>0){return}preRun();if(runDependencies>0)return;if(Module["calledRun"])return;function doRun(){if(Module["calledRun"])return;Module["calledRun"]=true;if(ABORT)return;ensureInitRuntime();preMain();if(Module["onRuntimeInitialized"])Module["onRuntimeInitialized"]();if(Module["_main"]&&shouldRunNow)Module["callMain"](args);postRun()}if(Module["setStatus"]){Module["setStatus"]("Running...");setTimeout((function(){setTimeout((function(){Module["setStatus"]("")}),1);doRun()}),1)}else{doRun()}}Module["run"]=run;function exit(status,implicit){if(implicit&&Module["noExitRuntime"]&&status===0){return}if(Module["noExitRuntime"]){}else{ABORT=true;EXITSTATUS=status;STACKTOP=initialStackTop;exitRuntime();if(Module["onExit"])Module["onExit"](status)}Module["quit"](status,new ExitStatus(status))}function abort(what){if(Module["onAbort"]){Module["onAbort"](what)}if(what!==undefined){out(what);err(what);what=JSON.stringify(what)}else{what=""}ABORT=true;EXITSTATUS=1;throw"abort("+what+"). Build with -s ASSERTIONS=1 for more info."}Module["abort"]=abort;if(Module["preInit"]){if(typeof Module["preInit"]=="function")Module["preInit"]=[Module["preInit"]];while(Module["preInit"].length>0){Module["preInit"].pop()()}}var shouldRunNow=true;if(Module["noInitialRun"]){shouldRunNow=false}Module["noExitRuntime"]=true;run()




;return Module;}
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ })
/******/ ]);
});
//# sourceMappingURL=perspective.node.js.map