/* eslint-disable react/no-multi-comp */
import React from 'react';
import 'draft-js-static-toolbar-plugin/lib/plugin.css';
import Editor, { createEditorStateWithText } from 'draft-js-plugins-editor';
import createToolbarPlugin, { Separator } from 'draft-js-static-toolbar-plugin';
import {
  ItalicButton,
  BoldButton,
  UnderlineButton,
  UnorderedListButton,
  OrderedListButton,
} from 'draft-js-buttons';
import editorStyles from './editorStyles.css';


const toolbarPlugin = createToolbarPlugin({
  structure: [
    BoldButton,
    ItalicButton,
    UnderlineButton,
    Separator,
    UnorderedListButton,
    OrderedListButton,
  ]
});
const { Toolbar } = toolbarPlugin;
const plugins = [toolbarPlugin];
const text = 'Write your blog here…';

class MyEditor extends React.Component {

  state = {
    editorState: createEditorStateWithText(text),
  };

  onChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  focus = () => {
    this.editor.focus();
  };

  render() {
    return (
      <div>
        <div className={editorStyles.editor} onClick={this.focus}>
          <Toolbar />
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            plugins={plugins}
            ref={(element) => { this.editor = element; }}
          />

        </div>
      </div>
    );
  }
}
export default MyEditor;