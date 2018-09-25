// import React from "react";
// import { Editor, EditorState, RichUtils } from "draft-js";

// class MyEditor extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			editorState: EditorState.createEmpty()
// 		};
// 	}

// 	onChange = editorState => {
// 		this.setState({
// 			editorState
// 		});
// 	};

// 	handleKeyCommand = command => {
// 		const newState = RichUtils.handleKeyCommand(
// 			this.state.editorState,
// 			command
// 		);
// 		if (newState) {
// 			this.onChange(newState);
// 			return "handled";
// 		}
// 		return "not-handled";
// 	};

// 	onUnderlineClick = () => {
// 		this.onChange(
// 			RichUtils.toggleInlineStyle(this.state.editorState, "UNDERLINE")
// 		);
// 	};

// 	onBoldClick = () => {
// 		this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, "BOLD"));
// 	};

// 	onItalicClick = () => {
// 		this.onChange(
// 			RichUtils.toggleInlineStyle(this.state.editorState, "ITALIC")
// 		);
// 	};

// 	render() {
// 		return (
// 			<div className="editorContainer">
// 				<button onClick={this.onUnderlineClick}>U</button>
// 				<button onClick={this.onBoldClick}>
// 					<b>B</b>
// 				</button>
// 				<button onClick={this.onItalicClick}>
// 					<em>I</em>
// 				</button>
// 				<div className="editors">
// 					<Editor
// 						editorState={this.state.editorState}
// 						handleKeyCommand={this.handleKeyCommand}
// 						onChange={this.onChange}
// 					/>
// 				</div>
// 			</div>
// 		);
// 	}
// }

// export default MyEditor;


/////////////////////////////////////////////////////////////////////////////////////////

/* eslint-disable react/no-multi-comp */
// import React from 'react';
// import 'draft-js-static-toolbar-plugin/lib/plugin.css';
// import Editor, { createEditorStateWithText } from 'draft-js-plugins-editor';
// import createToolbarPlugin, { Separator } from 'draft-js-static-toolbar-plugin';
// import {
//   ItalicButton,
//   BoldButton,
//   UnderlineButton,
//   UnorderedListButton,
//   OrderedListButton,
// } from 'draft-js-buttons';
// // import createLinkPlugin from 'draft-js-anchor-plugin';
// import editorStyles from './editorStyles.css';

// // Here's your chance to pass in a configuration object (see below).
// // const linkPlugin = createLinkPlugin();
// const toolbarPlugin = createToolbarPlugin({
//   structure: [
//     BoldButton,
//     ItalicButton,
//     UnderlineButton,
//     Separator,
//     UnorderedListButton,
//     OrderedListButton,
//   ]
// });
// const { Toolbar } = toolbarPlugin;
// const plugins = [toolbarPlugin];
// const text = 'Write your blog here…';

// class MyEditor extends React.Component {

//   state = {
//     editorState: createEditorStateWithText(text),
//   };

//   onChange = (editorState) => {
//     this.setState({
//       editorState,
//     });
//   };

//   focus = () => {
//     this.editor.focus();
//   };

//   render() {
//     return (
//       <div>
//         <div className={editorStyles.editor} onClick={this.focus}>
//           <Toolbar />
//           <Editor
//             editorState={this.state.editorState}
//             onChange={this.onChange}
//             plugins={plugins}
//             ref={(element) => { this.editor = element; }}
//           />

//         </div>
//       </div>
//     );
//   }
// }
// export default MyEditor;