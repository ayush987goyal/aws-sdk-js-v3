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

import { BackupGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupGatewayClient";
import {
  GetGatewayInput,
  GetGatewayInputFilterSensitiveLog,
  GetGatewayOutput,
  GetGatewayOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0GetGatewayCommand,
  serializeAws_json1_0GetGatewayCommand,
} from "../protocols/Aws_json1_0";

export interface GetGatewayCommandInput extends GetGatewayInput {}
export interface GetGatewayCommandOutput extends GetGatewayOutput, __MetadataBearer {}

/**
 * <p>By providing the ARN (Amazon Resource Name), this
 *       API returns the gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupGatewayClient, GetGatewayCommand } from "@aws-sdk/client-backup-gateway"; // ES Modules import
 * // const { BackupGatewayClient, GetGatewayCommand } = require("@aws-sdk/client-backup-gateway"); // CommonJS import
 * const client = new BackupGatewayClient(config);
 * const command = new GetGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetGatewayCommandInput} for command's `input` shape.
 * @see {@link GetGatewayCommandOutput} for command's `response` shape.
 * @see {@link BackupGatewayClientResolvedConfig | config} for BackupGatewayClient's `config` shape.
 *
 */
export class GetGatewayCommand extends $Command<
  GetGatewayCommandInput,
  GetGatewayCommandOutput,
  BackupGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetGatewayCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BackupGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetGatewayCommandInput, GetGatewayCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupGatewayClient";
    const commandName = "GetGatewayCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetGatewayInputFilterSensitiveLog,
      outputFilterSensitiveLog: GetGatewayOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetGatewayCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0GetGatewayCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetGatewayCommandOutput> {
    return deserializeAws_json1_0GetGatewayCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
