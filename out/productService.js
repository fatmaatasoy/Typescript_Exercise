"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
var simpleDatasource_1 = require("./simpleDatasource");
// Oluşturduğumuz interface i burada hayata geçiyoruz. Oluşturulan ProductService IProductService i baz aldığının anlmına geliyor
var ProductService = /** @class */ (function () {
    function ProductService() {
        var _this = this;
        this.dataSource = new simpleDatasource_1.SimpleDataSource();
        this.products = new Array();
        this.dataSource.getProducs().forEach(function (p) { return _this.products.push(p); });
    }
    ProductService.prototype.getById = function (id) {
        return this.products.filter(function (p) { return p.id === id; })[0];
    };
    ;
    ProductService.prototype.getProducts = function () {
        return this.products;
    };
    ;
    ProductService.prototype.saveProduct = function (product) {
        if (product.id == 0 || product.id == null) {
            product.id = this.generateId();
            this.products.push(product);
        }
        else {
            var index = this.products.indexOf(product);
            this.products.splice(index, 1, product);
        }
    };
    ;
    ProductService.prototype.deleteProduct = function (product) {
        var index = this.products.indexOf(product);
        if (index > 0) {
            this.products.splice(index, 1);
        }
    };
    ;
    ProductService.prototype.generateId = function () {
        var key = 1;
        while (this.getById(key) != null) {
            key++;
        }
        return key;
    };
    return ProductService;
}());
exports.ProductService = ProductService;
//# sourceMappingURL=productService.js.map