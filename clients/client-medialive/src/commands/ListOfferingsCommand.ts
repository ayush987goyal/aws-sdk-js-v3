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

import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import {
  ListOfferingsRequest,
  ListOfferingsRequestFilterSensitiveLog,
  ListOfferingsResponse,
  ListOfferingsResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restJson1ListOfferingsCommand,
  serializeAws_restJson1ListOfferingsCommand,
} from "../protocols/Aws_restJson1";

export interface ListOfferingsCommandInput extends ListOfferingsRequest {}
export interface ListOfferingsCommandOutput extends ListOfferingsResponse, __MetadataBearer {}

/**
 * List offerings available for purchase.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, ListOfferingsCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, ListOfferingsCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new ListOfferingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListOfferingsCommandInput} for command's `input` shape.
 * @see {@link ListOfferingsCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for MediaLiveClient's `config` shape.
 *
 */
export class ListOfferingsCommand extends $Command<
  ListOfferingsCommandInput,
  ListOfferingsCommandOutput,
  MediaLiveClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListOfferingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaLiveClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListOfferingsCommandInput, ListOfferingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaLiveClient";
    const commandName = "ListOfferingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListOfferingsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListOfferingsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListOfferingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListOfferingsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListOfferingsCommandOutput> {
    return deserializeAws_restJson1ListOfferingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
