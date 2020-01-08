import { hash, genSalt, compareSync } from 'bcrypt';

class Password {
  static async generate(data) {
    const salt = await (0, genSalt)(10);
    const newPassword = await hash(data.password, salt);
    return newPassword;
  }

  static async check(hashedPassword, password) {
    return compareSync(password, hashedPassword);
  }
}

export default Password;
