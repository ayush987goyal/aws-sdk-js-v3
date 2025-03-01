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

import { AppRunnerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppRunnerClient";
import {
  DescribeVpcConnectorRequest,
  DescribeVpcConnectorRequestFilterSensitiveLog,
  DescribeVpcConnectorResponse,
  DescribeVpcConnectorResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0DescribeVpcConnectorCommand,
  serializeAws_json1_0DescribeVpcConnectorCommand,
} from "../protocols/Aws_json1_0";

export interface DescribeVpcConnectorCommandInput extends DescribeVpcConnectorRequest {}
export interface DescribeVpcConnectorCommandOutput extends DescribeVpcConnectorResponse, __MetadataBearer {}

/**
 * <p>Return a description of an App Runner VPC connector resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppRunnerClient, DescribeVpcConnectorCommand } from "@aws-sdk/client-apprunner"; // ES Modules import
 * // const { AppRunnerClient, DescribeVpcConnectorCommand } = require("@aws-sdk/client-apprunner"); // CommonJS import
 * const client = new AppRunnerClient(config);
 * const command = new DescribeVpcConnectorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeVpcConnectorCommandInput} for command's `input` shape.
 * @see {@link DescribeVpcConnectorCommandOutput} for command's `response` shape.
 * @see {@link AppRunnerClientResolvedConfig | config} for AppRunnerClient's `config` shape.
 *
 */
export class DescribeVpcConnectorCommand extends $Command<
  DescribeVpcConnectorCommandInput,
  DescribeVpcConnectorCommandOutput,
  AppRunnerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeVpcConnectorCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppRunnerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeVpcConnectorCommandInput, DescribeVpcConnectorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppRunnerClient";
    const commandName = "DescribeVpcConnectorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeVpcConnectorRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeVpcConnectorResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeVpcConnectorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0DescribeVpcConnectorCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeVpcConnectorCommandOutput> {
    return deserializeAws_json1_0DescribeVpcConnectorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
