import jwt from "jsonwebtoken";

const privateKey = process.env.PRIVATEKEY ?? "privateKey";
const publicKey = process.env.PUBLICKEY ?? "publicKey";
export function signJwt(object: Object, option?: jwt.SignOptions | undefined) {
  return jwt.sign(object, privateKey, {
    ...(option && option),
    algorithm: "RS256",
  });
}

export function verifyJwt(token: string) {
  try {
    const decoded = jwt.verify(token, publicKey);
    return {
      valid: true,
      expired: false,
      decoded,
    };
  } catch (error: any) {
    return {
      valid: false,
      expired: error.message === "jwt expire",
      decoded: null,
    };
  }
}
