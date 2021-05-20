class Validator {
  instance = null;

  value: unknown = null;

  errors: Array<string> = [];

  construction() {
    this.errors = [];
    this.value = null;
    if (this.instance) {
      return this.instance;
    }
    return this;
  }

  set setValue(value: unknown) {
    this.value = value;
  }

  get getErrors() {
    return this.errors;
  }

  private appendError(error: string) {
    this.errors.push(error);
  }

  String() {
    const { value } = this;
    if (!(typeof value === 'string')) {
      this.appendError(`${value} is not a string`);
    }
    return this;
  }

  Number() {
    const { value } = this;
    if (!(typeof value === 'number')) {
      this.appendError(`${value} is not a number`);
    }
    return this;
  }

  Array() {
    const { value } = this;
    if (!Array.isArray(value)) {
      this.appendError(`${value} is not a number`);
    }
    return this;
  }

  Boolean() {
    const { value } = this;
    if (!(typeof value === 'boolean')) {
      this.appendError(`${value} is not a boolean`);
    }
    return this;
  }

  Object() {
    const { value } = this;
    if (!(typeof value === 'object')) {
      this.appendError(`${value} is not a object`);
    }
    return this;
  }

  Range(options = { min: 0, max: Number.MAX_SAFE_INTEGER }) {
    const { min, max } = options;
    const { value } = this;
    if (!(typeof value === 'number' && value >= min && value <= max)) {
      this.appendError(`Not in range: ${min} <= ${value} <= ${max}`);
    }
    return this;
  }
}

const validator = (value: unknown) => {
  const ValidatorInstance = new Validator();
  ValidatorInstance.value = value;
  return ValidatorInstance;
};

export default validator;
