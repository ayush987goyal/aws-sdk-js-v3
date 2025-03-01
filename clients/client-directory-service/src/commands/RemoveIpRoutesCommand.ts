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

import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import {
  RemoveIpRoutesRequest,
  RemoveIpRoutesRequestFilterSensitiveLog,
  RemoveIpRoutesResult,
  RemoveIpRoutesResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1RemoveIpRoutesCommand,
  serializeAws_json1_1RemoveIpRoutesCommand,
} from "../protocols/Aws_json1_1";

export interface RemoveIpRoutesCommandInput extends RemoveIpRoutesRequest {}
export interface RemoveIpRoutesCommandOutput extends RemoveIpRoutesResult, __MetadataBearer {}

/**
 * <p>Removes IP address blocks from a directory.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, RemoveIpRoutesCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, RemoveIpRoutesCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new RemoveIpRoutesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveIpRoutesCommandInput} for command's `input` shape.
 * @see {@link RemoveIpRoutesCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 */
export class RemoveIpRoutesCommand extends $Command<
  RemoveIpRoutesCommandInput,
  RemoveIpRoutesCommandOutput,
  DirectoryServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RemoveIpRoutesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DirectoryServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RemoveIpRoutesCommandInput, RemoveIpRoutesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectoryServiceClient";
    const commandName = "RemoveIpRoutesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RemoveIpRoutesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: RemoveIpRoutesResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RemoveIpRoutesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RemoveIpRoutesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RemoveIpRoutesCommandOutput> {
    return deserializeAws_json1_1RemoveIpRoutesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
