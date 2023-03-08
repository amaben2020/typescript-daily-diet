const filterOutboundInternalLinks = (() => {
  const INTERNAL_HOST = "dodonut";
  const url = new URL("https://dodonut/jbsjaj.com");

  return url.hostname === INTERNAL_HOST
    ? "noopener"
    : "nofollow noopener noreferrer";
})();

console.log(filterOutboundInternalLinks);

const props = {
  properties: {
    a: "1",
  },
};
const loggerr = (title: string, p: any) => {
  console.log({ ...p });
};
console.log(loggerr("a", props.properties));

const StripeUrl =
  "https://checkout.stripe.com/c/pay/cs_test_a1wi1IKdw4XZ061J7CRp3os49Bo35TBZfAcYnSBZ1RriP5yRP930HxsXXC#fidkdWxOYHwnPyd1blpxYHZxWjA0TXxgajdBSFI2UWxrXE9RMzJcVUtdUD1dSjEwR2JoS2lKY3ZTalZCUWNdX05xZDxLNjF8cE5%2FcGNHTlJvcTRdTTVKS1dwRGd1X0JOYlFjNUk9b2puT0k0NTU1Un1ubDE0TicpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPyd2bGtiaWBabHFgaCcpJ2BrZGdpYFVpZGZgbWppYWB3dic%2FcXdwYHgl";

const stripe_url = new URL(StripeUrl).hostname;
console.log(stripe_url);
