import { DetailedHTMLProps, FC, SVGAttributes } from 'react';

export type SvgProps = DetailedHTMLProps<
SVGAttributes<SVGElement>,
SVGSVGElement
>;

export type FCIcon = FC<SvgProps>;
