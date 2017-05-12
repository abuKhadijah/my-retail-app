import React from "react";
function createMarkup(policyMessage) {
  return {__html: policyMessage};
}

export const ReturnPolicy = ({policyMessage}) => (
  policyMessage && <div className="return-policy" dangerouslySetInnerHTML={createMarkup(policyMessage)}/>
);
