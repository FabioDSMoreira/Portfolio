import MailchimpSubscribe from "react-mailchimp-subscribe";
import Newsletter from "./Newsletter";

function MailchimpForm() {
  const postUrl = process.env.REACT_APP_MAILCHIMP_URL;
  return (
    <div>
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => {
          return (
            <Newsletter
              status={status}
              message={message}
              onValidated={(formData) => subscribe(formData)}
            />
          );
        }}
      />
    </div>
  );
}

export default MailchimpForm;
