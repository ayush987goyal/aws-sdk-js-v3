// smithy-typescript generated code
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { AppSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppSyncClient";
import {
  ListDomainNamesRequest,
  ListDomainNamesRequestFilterSensitiveLog,
  ListDomainNamesResponse,
  ListDomainNamesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListDomainNamesCommand,
  serializeAws_restJson1ListDomainNamesCommand,
} from "../protocols/Aws_restJson1";

export interface ListDomainNamesCommandInput extends ListDomainNamesRequest {}
export interface ListDomainNamesCommandOutput extends ListDomainNamesResponse, __MetadataBearer {}

/**
 * <p>Lists multiple custom domain names.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, ListDomainNamesCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, ListDomainNamesCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * const client = new AppSyncClient(config);
 * const command = new ListDomainNamesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDomainNamesCommandInput} for command's `input` shape.
 * @see {@link ListDomainNamesCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for AppSyncClient's `config` shape.
 *
 */
export class ListDomainNamesCommand extends $Command<
  ListDomainNamesCommandInput,
  ListDomainNamesCommandOutput,
  AppSyncClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListDomainNamesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDomainNamesCommandInput, ListDomainNamesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppSyncClient";
    const commandName = "ListDomainNamesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListDomainNamesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListDomainNamesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListDomainNamesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListDomainNamesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListDomainNamesCommandOutput> {
    return deserializeAws_restJson1ListDomainNamesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
