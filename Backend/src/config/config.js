const cookieOptions = {
  httpOnly: true,
  expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax",
};

export {cookieOptions};