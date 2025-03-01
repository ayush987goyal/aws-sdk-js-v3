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

import { LookoutMetricsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutMetricsClient";
import {
  GetSampleDataRequest,
  GetSampleDataRequestFilterSensitiveLog,
  GetSampleDataResponse,
  GetSampleDataResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetSampleDataCommand,
  serializeAws_restJson1GetSampleDataCommand,
} from "../protocols/Aws_restJson1";

export interface GetSampleDataCommandInput extends GetSampleDataRequest {}
export interface GetSampleDataCommandOutput extends GetSampleDataResponse, __MetadataBearer {}

/**
 * <p>Returns a selection of sample records from an Amazon S3 datasource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutMetricsClient, GetSampleDataCommand } from "@aws-sdk/client-lookoutmetrics"; // ES Modules import
 * // const { LookoutMetricsClient, GetSampleDataCommand } = require("@aws-sdk/client-lookoutmetrics"); // CommonJS import
 * const client = new LookoutMetricsClient(config);
 * const command = new GetSampleDataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSampleDataCommandInput} for command's `input` shape.
 * @see {@link GetSampleDataCommandOutput} for command's `response` shape.
 * @see {@link LookoutMetricsClientResolvedConfig | config} for LookoutMetricsClient's `config` shape.
 *
 */
export class GetSampleDataCommand extends $Command<
  GetSampleDataCommandInput,
  GetSampleDataCommandOutput,
  LookoutMetricsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetSampleDataCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LookoutMetricsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetSampleDataCommandInput, GetSampleDataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LookoutMetricsClient";
    const commandName = "GetSampleDataCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetSampleDataRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetSampleDataResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetSampleDataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetSampleDataCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSampleDataCommandOutput> {
    return deserializeAws_restJson1GetSampleDataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
