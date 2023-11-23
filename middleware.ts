export function middleware() {
  console.log("deploying the middleware");
}

export const config = {
  matcher: ["/login"],
};
