/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import { PanelBody, PanelRow, TextControl, ToggleControl } from '@wordpress/components';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

const InspectorControlPanel = ({ props }) => {

	const { attributes: { buttonText, buttonLink, buttonLinkType, buttonType }, setAttributes } = props;
	return (
		<PanelBody
			title={__('Control Panel ⚙️')}
			initialOpen={true}
		>
			<PanelRow>
				<TextControl
					label={__("Text", "realmdigital")}
					hideLabelFromVision={false}
					type="text"
					value={buttonText}
					onChange={(buttonText) => { setAttributes({ buttonText }) }}
				/>
			</PanelRow>
			<PanelRow>
				<TextControl
					label={__("Link", "realmdigital")}
					hideLabelFromVision={false}
					type="url"
					value={buttonLink}
					onChange={(buttonLink) => { setAttributes({ buttonLink }) }}
				/>
			</PanelRow>
			<PanelRow>
				<ToggleControl
					label={__("Open in New Tab ?", "realmdigital")}
					hideLabelFromVision={false}
					checked={buttonLinkType == "_self" ? 0 : 1}
					onChange={(value) => {
						setAttributes({
							buttonLinkType: value ? "_blank" : "_self"
						})
					}}
				/>
			</PanelRow>
			<PanelRow>
				<ToggleControl
					label={__("Solid Button ?", "realmdigital")}
					hideLabelFromVision={false}
					checked={buttonType == "simple" ? 0 : 1}
					onChange={(value) => {
						setAttributes({
							buttonType: value ? "solid" : "simple"
						})
					}}
				/>
			</PanelRow>
		</PanelBody>
	)
}

export default function Edit(props) {
	const { attributes: { buttonText, buttonLinkType, buttonType } } = props;
	let customClasses;

	switch (buttonType) {
		case "solid":
			customClasses = "btn btn-raised btn-primary"
			break;

		default:
			customClasses = "btn btn-raised btn-primary"
			break;
	}

	const blockProps = useBlockProps({
		title: buttonText,
		target: buttonLinkType,
		className: customClasses,
		rel: "noopener"
	})

	return (
		<>
			<InspectorControls>
				<InspectorControlPanel props={props} />
			</InspectorControls>
			<div {...blockProps}
			>
				{buttonText ? buttonText : "Add Text..."}
				<div className="ripple-container"></div>
			</div>
		</>
	);
}
