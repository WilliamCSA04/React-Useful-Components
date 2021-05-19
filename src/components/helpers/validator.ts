class Validator {
  instance = null;

  value: unknown = null;

  errors: Array<string> = [];

  set setValue(value: unknown) {
    this.value = value;
  }

  construction() {
    this.errors = [];
    this.value = null;
    if (this.instance) {
      return this.instance;
    }
    return this;
  }

  String() {
    const { value } = this;
    if (!(typeof value === 'string')) {
      this.errors.push(`${value} is not a string`);
    }
    return this;
  }

  Number() {
    const { value } = this;
    if (!(typeof value === 'number')) {
      this.errors.push(`${value} is not a number`);
    }
    return this;
  }

  Array() {
    const { value } = this;
    if (!Array.isArray(value)) {
      this.errors.push(`${value} is not a number`);
    }
    return this;
  }

  Boolean() {
    const { value } = this;
    if (!(typeof value === 'boolean')) {
      this.errors.push(`${value} is not a boolean`);
    }
    return this;
  }

  Range({ min = 0, max = Number.MAX_SAFE_INTEGER }) {
    const { value } = this;
    if (!(typeof value === 'number' && value > min && value < max)) {
      this.errors.push(`Not in range: ${min} < ${value} < ${max}`);
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
