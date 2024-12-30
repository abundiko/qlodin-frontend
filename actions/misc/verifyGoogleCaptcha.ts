"use server";

import { debugLog } from "@/functions/debug";
import { __endpoints, ApiRequest } from "@/utils";
import { headers } from "next/headers";

export async function verifyGoogleCaptcha(token: string) {
  //   const H = await headers();
  //   const remoteip = H.get("x-forwarded-for") ?? "";

  const formData = `secret=${process.env.NEXT_PUBLIC_GOOGLE_CAPTCHA_SITE_KEY}&response=${token}`;
  const [res, err] = await ApiRequest.post(
    __endpoints.google.captcha.verify,
    null,
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData,
    }
  );

  debugLog({ res, err });

  if (err || !res || !res.success) return false;

  //   const res = await createAssessment({ token });

  console.log({ res });

  if (!!res && res > 0.1) return true;

  return false;
}

import { RecaptchaEnterpriseServiceClient } from "@google-cloud/recaptcha-enterprise";

/**
 * Create an assessment to analyse the risk of a UI action.
 *
 * projectID: Your Google Cloud project ID.
 * recaptchaSiteKey: The reCAPTCHA key associated with the site/app
 * token: The generated token obtained from the client.
 * recaptchaAction: Action name corresponding to the token.
 */
async function createAssessment({
  // TO-DO: Replace the token and reCAPTCHA action variables before running the sample.
  projectID = "qlodin-5c9fd",
  recaptchaKey = "6LdxWqkqAAAAAIBaRmunSVVrKSmHerH2yGf-zN0w",
  token = "action-token",
  recaptchaAction = "action-name",
}) {
  // Create the reCAPTCHA client.
  // TODO: Cache the client generation code (recommended) or call client.close() before exiting the method.
  const client = new RecaptchaEnterpriseServiceClient();
  const projectPath = client.projectPath(projectID);

  // Build the assessment request.
  const request = {
    assessment: {
      event: {
        token: token,
        siteKey: recaptchaKey,
      },
    },
    parent: projectPath,
  };
  debugLog({ request });

  const [response] = await client.createAssessment(request);

  debugLog({ response });

  // Check if the token is valid.
  if (!response.tokenProperties?.valid) {
    console.log(
      `The CreateAssessment call failed because the token was: ${response.tokenProperties?.invalidReason}`
    );
    return null;
  }

  // Check if the expected action was executed.
  // The `action` property is set by user client in the grecaptcha.enterprise.execute() method.
  if (response.tokenProperties.action === recaptchaAction) {
    // Get the risk score and the reason(s).
    // For more information on interpreting the assessment, see:
    // https://cloud.google.com/recaptcha-enterprise/docs/interpret-assessment
    console.log(`The reCAPTCHA score is: ${response.riskAnalysis?.score}`);
    response.riskAnalysis?.reasons?.forEach((reason) => {
      console.log(reason);
    });

    return response.riskAnalysis?.score;
  } else {
    console.log(
      "The action attribute in your reCAPTCHA tag does not match the action you are expecting to score"
    );
    return null;
  }
}
