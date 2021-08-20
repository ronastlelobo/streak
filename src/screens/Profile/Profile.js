import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {styles} from './profile.style';
import {Formik} from 'formik';
import Appconstants from '../../components/Appconstants';
import {useDispatch} from 'react-redux';
import {profileDetails} from '../../redux/actions/profile';

const Profile = ({navigation}) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.mainContainer}>
          <View style={styles.header}>
            <Text style={styles.profileText}>Profile</Text>
            <View style={styles.closeContaniner}>
              <Image
                resizeMode="center"
                source={require('../../assets/close.png')}
              />
            </View>
          </View>
          <View style={styles.instContainer}>
            <Text style={styles.instText}>
              Enter your details so we can get to know you better.
            </Text>
          </View>
          <View style={styles.sep} />
          <View>
            <Formik
              initialValues={{
                firstName: '',
                secondName: '',
                email: '',
                mobileNumber: '',
              }}
              onSubmit={values => {
                dispatch(profileDetails(values));
                navigation.navigate('Dashboard');
              }}>
              {({handleChange, handleBlur, handleSubmit, values}) => (
                <View>
                  <Text style={styles.textDetail}>First Name</Text>
                  <TextInput
                    style={styles.textInputStyle}
                    placeholder="Jhon"
                    placeholderTextColor="rgba(26, 32, 44, 0.2)"
                    onChangeText={handleChange('firstName')}
                    onBlur={handleBlur('firstName')}
                    value={values.firstName}
                  />
                  <Text style={styles.textDetail}>Second name</Text>
                  <TextInput
                    style={styles.textInputStyle}
                    placeholder="Jhon"
                    placeholderTextColor="rgba(26, 32, 44, 0.2)"
                    onChangeText={handleChange('secondName')}
                    onBlur={handleBlur('secondName')}
                    value={values.secondName}
                  />
                  <Text style={styles.textDetail}>Email</Text>
                  <TextInput
                    style={styles.textInputStyle}
                    placeholder="Jhon"
                    placeholderTextColor="rgba(26, 32, 44, 0.2)"
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                  />
                  <Text style={styles.textDetail}>Mobile Number</Text>
                  <TextInput
                    style={styles.textInputStyle}
                    placeholder="Jhon"
                    placeholderTextColor="rgba(26, 32, 44, 0.2)"
                    onChangeText={handleChange('mobileNumber')}
                    onBlur={handleBlur('mobileNumber')}
                    value={values.mobileNumber}
                  />
                  <Text style={styles.otpText}>
                    OTP verification in next step
                  </Text>
                  <TouchableOpacity
                    onPress={handleSubmit}
                    style={styles.createProfileContainer}>
                    <View style={styles.createProfile}>
                      <Text style={styles.createProfileText}>
                        Create Profile
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              )}
            </Formik>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;
