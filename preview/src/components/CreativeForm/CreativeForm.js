import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { Form, Field } from 'react-final-form';
import CreativePreview from '../CreativePreview/CreativePreview';
import {
  Header,
  Wrapper,
  Row,
  ButtonsGroup,
  Button,
  TextInput,
} from '../Layout';
import { grabData } from '../../helpers';

export const FormWrapper = styled.div`
  width: 40%;
  padding-right: 15px;
`;

const CreativeForm = () => {

  const [crData, setCrData] = useState({});

  const getData = useCallback((value) => {
    //Test 'https://jsonplaceholder.typicode.com/photos/1'
    if (!!value) {
      grabData(value, (data) => {
        setCrData({
          image: data.url,
          title: data.title
        });
      });
    }
  }, []);

  const formSubmit = useCallback((values) => {
    console.log(values);
  }, []);

  return (
    <>
      <Header>Create creative</Header>
      <Form
        onSubmit={formSubmit}
        keepDirtyOnReinitialize
        initialValues={crData}
        render={({ handleSubmit, form, values }) => (
          <Wrapper>
            <FormWrapper>
              <form onSubmit={handleSubmit}>
                <Row>
                  <label>Link*</label>
                  <Field
                    name='link'
                    component={TextInput}
                    type='text'
                  >
                    {props => (
                      <TextInput
                        type='text'
                        {...props.input}
                      />
                    )}
                  </Field>
                  <Button
                    type='button'
                    onClick={() => {
                      getData(values.link);
                    }}
                  >
                    Parse
                  </Button>
                </Row>
                <Row>
                  <label>Image*</label>
                  <Field
                    name='image'
                    component={TextInput}
                    type='text'
                  >
                    {props => (
                      <TextInput
                        type='text'
                        {...props.input}
                      />
                    )}
                  </Field>
                </Row>
                <Row>
                  <label>Title*</label>
                  <Field
                    name='title'
                    component={TextInput}
                    type='text'
                  >
                    {props => (
                      <TextInput
                        type='text'
                        {...props.input}
                      />
                    )}
                  </Field>
                </Row>
                <Row>
                  <label>Body text*</label>
                  <Field
                    name='text'
                    component={TextInput}
                    type='text'
                  >
                    {props => (
                      <TextInput
                        type='text'
                        {...props.input}
                      />
                    )}
                  </Field>
                </Row>
                <Row>
                  <label>Call to Action*</label>
                  <Field
                    name='cta'
                    component={TextInput}
                    type='text'
                  >
                    {props => (
                      <TextInput
                        type='text'
                        {...props.input}
                      />
                    )}
                  </Field>
                </Row>
                <Row>
                  <label>Viewpixel</label>
                  <Field
                    name='viewpixel'
                    component={TextInput}
                    type='text'
                  >
                    {props => (
                      <TextInput
                        type='text'
                        {...props.input}
                      />
                    )}
                  </Field>
                </Row>
                <ButtonsGroup>
                  <Button type='submit'>Next</Button>
                </ButtonsGroup>
                <Row>
                  <label>{Object.keys(values).length ? JSON.stringify(values) : ''}</label>
                </Row>
              </form>
            </FormWrapper>
            <CreativePreview
              title={values.title}
              text={values.text}
              link={values.link}
              cta={values.cta}
              image={values.image}
            />
          </Wrapper>
        )}
      />
    </>
  )
};

export default CreativeForm;
