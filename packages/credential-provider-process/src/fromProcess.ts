import { getProfileName, parseKnownFiles, SourceProfileInit } from "@aws-sdk/shared-ini-file-loader";
import { CredentialProvider } from "@aws-sdk/types";

import { resolveProcessCredentials } from "./resolveProcessCredentials";

export interface FromProcessInit extends SourceProfileInit {}

/**
 * Creates a credential provider that will read from a credential_process specified
 * in ini files.
 */
export const fromProcess =
  (init: FromProcessInit = {}): CredentialProvider =>
  async () => {
    const profiles = await parseKnownFiles(init);
    return resolveProcessCredentials(getProfileName(init), profiles);
  };
