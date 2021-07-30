// ----- Imports ----- //
import { css } from '@emotion/react';
import { remSpace } from '@guardian/src-foundations';
import { from } from '@guardian/src-foundations/mq';
import * as Palette from '@guardian/src-foundations/palette';
import { textSans } from '@guardian/src-foundations/typography';
import { SvgOfflineCloud } from '@guardian/src-icons';
import type { FC } from 'react';
import { useOnlineStatus } from '../utils/useOnlineStatus';

// ----- Styles ----- //

const styles = css`
	.js-video-container {
		width: 100%;
		position: relative;
		padding-bottom: 56.25%;
	}

	.iframe {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	.placeholder {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: ${Palette.neutral[20]};
		color: ${Palette.neutral[97]};
		padding-bottom: 0;
	}

	.placeholder-center {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.placeholder-wrapper {
		display: flex;
		flex-direction: column;
		width: 290px;

		${from.tablet} {
			width: 300px;
		}

		svg {
			height: 33px;
			fill: ${Palette.neutral[97]};
			stroke: ${Palette.neutral[97]};
		}
	}

	.placeholder-text {
		text-align: center;
		${textSans.small()};
		margin: ${remSpace[2]} 0;
	}
`;

// ----- Component ----- //

interface Props {
	title: string;
	atomId: string;
}

const Video: FC<Props> = ({ title, atomId }) => {
	const online = useOnlineStatus();

	const text =
		'Sorry, we couldn’t load this video. Please ensure you’re online in order to watch it.';

	return (
		<div
			className="js-video-container"
			data-atom-id={atomId}
			data-title={title}
			css={styles}
		>
			{online ? (
				<iframe
					title={title}
					className="iframe"
					frameBorder="0"
					scrolling="no"
					allowFullScreen
					src={`https://embed.theguardian.com/embed/atom/media/${atomId}#noadsaf`}
				></iframe>
			) : (
				<div className="placeholder">
					<div className="placeholder-center">
						<div className="placeholder-wrapper">
							<SvgOfflineCloud />
							<p className="placeholder-text">{text}</p>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

// ----- Exports ----- //

export default Video;
