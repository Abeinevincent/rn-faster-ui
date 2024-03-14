import React from 'react';
import type { ICModal } from './CModal.type';
import { Modal } from 'react-native';
import { Text, StyleSheet, Pressable } from 'react-native';
import { CView } from '../view/CView';
import { CText } from '../text/CText';
import { CIcon } from '../../reusable/icon/CIcon';
import { screenHeight, screenWidth } from '../../utils/dimensions';

export const CModal = (props: ICModal) => {
  // todo handle style mapping like we do for a cview

  return (
    <Modal
      transparent={props.transparent ? props.transparent : true}
      animationType="slide"
      visible={props.modalVisible}
      onRequestClose={() => {
        props.setModalVisible(!props.modalVisible);
      }}
    >
      {props.children ? (
        props.children
      ) : (
        <CView bgc={'rgba(0, 0, 0, 0.7)'} style={[styles.centeredView]}>
          <Pressable
            style={styles.closeButton}
            onPress={() => props.setModalVisible(!props.modalVisible)}
          >
            <CText>
              <CIcon
                family="MaterialCommunityIcons"
                name="close"
                size={24}
                color="white"
              />
            </CText>
          </Pressable>

          <CView
            el={5}
            ai="center"
            p={35}
            br={20}
            bc="white"
            bgc={'white'}
            w={screenWidth * 0.8}
            h={screenHeight * 0.5}
            style={[styles.modalView]}
          >
            <CText c="black">Hello World!</CText>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => props.setModalVisible(!props.modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </CView>
        </CView>
      )}
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonClose: {
    backgroundColor: '#2196F3',
  },

  modalView: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    // width: 400,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },

  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 9999,
  },

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
