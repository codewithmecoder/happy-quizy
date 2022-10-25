import bcrypt from "bcrypt";
export async function hashPassword(password: string): Promise<string> {
  const saltWorkFactor = parseInt(process.env.SALTWORKFACTOR ?? "10");
  const salt = await bcrypt.genSalt(saltWorkFactor);
  const hash = await bcrypt.hashSync(password, salt);
  return hash;
}

export const comparePassword = async function (
  canidatePassword: string,
  hashPassword: string
): Promise<boolean> {
  return bcrypt.compare(canidatePassword, hashPassword).catch((e) => false);
};
