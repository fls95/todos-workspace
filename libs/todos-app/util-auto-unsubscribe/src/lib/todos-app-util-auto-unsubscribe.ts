export function AutoUnsubscribe(constructor) {
  const original = constructor.prototype.ngOnDestroy;

  constructor.prototype.ngOnDestroy = function () {
    // eslint-disable-next-line prefer-const
    for (let prop in this) {
      const property = this[prop];
      if (property && typeof property.unsubscribe === 'function') {
        property.unsubscribe();
      }
    }
    original &&
      typeof original === 'function' &&
      // eslint-disable-next-line prefer-rest-params
      original.apply(this, arguments);
  };
}
