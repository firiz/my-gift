import { ApiModelProperty } from '@nestjs/swagger';

export class GetBookDTO {
  @ApiModelProperty({
    uniqueItems: true,
  })
  readonly id: string;

  @ApiModelProperty()
  readonly title: string;

  @ApiModelProperty()
  readonly description: string;

  @ApiModelProperty()
  readonly author: string;
}
