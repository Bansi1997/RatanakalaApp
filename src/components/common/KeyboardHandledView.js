import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const KeyboardHandledView = ({
  style,
  contentContainerStyle,
  children,
  bounces,
  keyboardShouldPersistTaps,
  innerRef,
  behavior,
  onStartShouldSetResponder,
}) => {
  return (
    <KeyboardAwareScrollView
      onStartShouldSetResponder={onStartShouldSetResponder}
      style={style}
      contentContainerStyle={contentContainerStyle}
      bounces={bounces || false}
      showsVerticalScrollIndicator={false}
      innerRef={innerRef}
      keyboardShouldPersistTaps={keyboardShouldPersistTaps || 'always'}
      behavior={behavior}>
      {children}
    </KeyboardAwareScrollView>
  );
};

export default KeyboardHandledView;
