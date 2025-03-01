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

import { CloudHSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudHSMClient";
import {
  DescribeHapgRequest,
  DescribeHapgRequestFilterSensitiveLog,
  DescribeHapgResponse,
  DescribeHapgResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeHapgCommand,
  serializeAws_json1_1DescribeHapgCommand,
} from "../protocols/Aws_json1_1";

export interface DescribeHapgCommandInput extends DescribeHapgRequest {}
export interface DescribeHapgCommandOutput extends DescribeHapgResponse, __MetadataBearer {}

/**
 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For
 *       more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM
 *       Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS
 *       CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p>
 *          <p>
 *             <b>For information about the current version of AWS
 *       CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the
 *       <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>,
 *       and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API
 *       Reference</a>.</p>
 *          <p>Retrieves information about a high-availability partition group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudHSMClient, DescribeHapgCommand } from "@aws-sdk/client-cloudhsm"; // ES Modules import
 * // const { CloudHSMClient, DescribeHapgCommand } = require("@aws-sdk/client-cloudhsm"); // CommonJS import
 * const client = new CloudHSMClient(config);
 * const command = new DescribeHapgCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeHapgCommandInput} for command's `input` shape.
 * @see {@link DescribeHapgCommandOutput} for command's `response` shape.
 * @see {@link CloudHSMClientResolvedConfig | config} for CloudHSMClient's `config` shape.
 *
 */
export class DescribeHapgCommand extends $Command<
  DescribeHapgCommandInput,
  DescribeHapgCommandOutput,
  CloudHSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeHapgCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudHSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeHapgCommandInput, DescribeHapgCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudHSMClient";
    const commandName = "DescribeHapgCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeHapgRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeHapgResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeHapgCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeHapgCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeHapgCommandOutput> {
    return deserializeAws_json1_1DescribeHapgCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
