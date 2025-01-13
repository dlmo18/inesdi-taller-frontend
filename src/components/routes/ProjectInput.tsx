import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { mockProjectInput } from '../../utils/mock-response';
import { themes } from '../../styles/ColorStyles';
import { Caption, H1 } from '../../styles/TextStyles';
import Loader from '../elements/Loader';
import useFetchData from '../../hooks/useFetchData';

const ProjectInput = () => {
  const navigate = useNavigate();
  const { data, isLoading, error } = useFetchData(mockProjectInput);
  const { t } = useTranslation();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [tags, setTags] = useState('');
  const [version, setVersions] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  if (error) {
    return (
      <Wrapper>
        <ContentWrapper>
          <ErrorMsg>{t('dashboard.error')}</ErrorMsg>
        </ContentWrapper>
      </Wrapper>
    );
  }

  async function doAddProject(event: FormEvent<HTMLFormElement>) {
    dismissError();
    event.preventDefault();
    if (!readyToSubmit()) {
      setErrorMsg(t('project_input.err_input'));
      return;
    }

    try {
      
      const result = await mockProjectInput({
        "title": title,
        "description": description,
        "tags": tags,
        "link": link,
        "version": version
      });

      setSuccessMsg(result);


    } catch (e) {
      setErrorMsg('Resultado: ' + t('project_input.err_input'));
    }
  }

  function successMessage() {
    return  <WrapperSuccess>
        <strong>{t('project_input.success_input')}:</strong>
        <ul>
          <li>ID: {successMsg[0]._id}</li>
          <li>{t('project_input.title_placeholder')}:{successMsg[0].title}</li>
          <li>{t('project_input.description_placeholder')}:{successMsg[0].description}</li>
          <li>{t('project_input.link_placeholder')}:{successMsg[0].link}</li>
          <li>{t('project_input.tags_placeholder')}:{successMsg[0].tags}</li>
          <li>{t('project_input.version_placeholder')}:{successMsg[0].version}</li>
        </ul>
      </WrapperSuccess>;
  }

  function onChangeAnyInput(e: ChangeEvent<HTMLInputElement>) {
    
    if(e.target.name == 'title') {
      setTitle(e.target.value);
    }
    else if(e.target.name == 'description') {
      setDescription(e.target.value);
    }
    else if(e.target.name == 'link') {
      setLink(e.target.value);
    }
    else if(e.target.name == 'tags') {
      setTags(e.target.value);
    }
    else if(e.target.name == 'version') {
      setVersions(e.target.value);
    }

    setErrorMsg('');
  }


  function readyToSubmit(): boolean {
    return title !== '' && description !== '' && link !=='' && tags !== '' && version !== '';
  }

  function dismissError() {
    setErrorMsg('');
  }

  return (
    <Wrapper>
      {isLoading && <Loader message={t('loader.text')} />}
      <ContentWrapper>
        <FormTitle>{t('project_input.page_title')}</FormTitle>
        <FormPanel onSubmit={doAddProject}>
          {errorMsg && <ErrorDescription>{errorMsg}</ErrorDescription>}
          {successMsg && successMessage()}
          <FormInput
            name="title"
            type="title"
            placeholder={t('project_input.title_placeholder')}
            value={title}
            onChange={onChangeAnyInput}
          />
          <FormInput
            name="description"
            type="description"
            placeholder={t('project_input.description_placeholder')}
            value={description}
            onChange={onChangeAnyInput}
          />
          <FormInput
            name="link"
            type="link"
            placeholder={t('project_input.link_placeholder')}
            value={link}
            onChange={onChangeAnyInput}
          />
          <FormInput
            name="tags"
            type="tags"
            placeholder={t('project_input.tags_placeholder')}
            value={tags}
            onChange={onChangeAnyInput}
          />
          <FormInput
            name="version"
            type="tags"
            placeholder={t('project_input.version_placeholder')}
            value={tags}
            onChange={onChangeAnyInput}
          />
          <SubmitForm
            type="submit"
            value={t('project_input.button_add')}
          />
          <ButtonForm
            type="button"
            value={t('project_input.button_delete')}
          />
        </FormPanel>
      </ContentWrapper>
    </Wrapper>
  );
};


const WrapperSuccess = styled.div`
  ${themes.custom.modal}
  color: green;
  padding: 1rem;
`;

const Wrapper = styled.div`
  overflow: hidden;
  height: 100%;
  @media (min-width: 2500px) {
    padding-bottom: 100px;
  }

  li {
    margin-left: 2rem;
    list-style: square;
    margin-top: .5rem;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1234px;
  height: 100%;
  margin: 0 auto;
  padding: 30px 30px 180px 30px;
  display: grid;
  grid-template-columns: auto;
  justify-items: center;
  row-gap: 20px;

  @media (max-width: 750px) {
    justify-content: center;
    padding: 30px 0px 180px 0px;
  }

  @media (max-width: 500px) {
    justify-content: stretch;
    justify-items: stretch;
    padding: 30px 0px 180px 0px;
  }
`;

const FormTitle = styled(H1)`
  text-align: center;
  @media (prefers-color-scheme: dark) {
    color: ${themes.custom.text1};
  }
`;

const FormPanel = styled.form`
  padding: 20px 40px;
  width: 400px;
  ${themes.custom.card};
  border-radius: 8px;

  display: grid;
  row-gap: 16px;
  grid-template-rows: auto;

  @media (prefers-color-scheme: dark) {
    ${themes.custom.card};
  }

  @media (max-width: 500px) {
    width: auto;
    margin: 0px 20px;
    padding: 20px;
  }
`;

const ErrorDescription = styled(Caption)`
  color: ${themes.custom.warning};
`;

const FormInput = styled.input`
  border: none;
  border-radius: 3px;
  width: 100%;
  height: 36px;
  color: ${themes.custom.text1};
  background-color: ${themes.custom.backgroundForm};
  padding-left: 8px;

  @media (prefers-color-scheme: dark) {
    color: ${themes.custom.text1};
    background-color: ${themes.custom.backgroundForm};
  }
`;

const ButtonForm = styled.input`
  height: 36px;
  border-radius: 4px;
  border: none;
  background-color: ${themes.custom.secondary};
  color: ${themes.custom.text1};

  @media (prefers-color-scheme: dark) {
    background-color: ${themes.custom.secondary};
  }
`;
const SubmitForm = styled.input`
  height: 36px;
  border-radius: 4px;
  border: none;
  background-color: ${themes.custom.primary};
  color: ${themes.custom.text1};

  @media (prefers-color-scheme: dark) {
    background-color: ${themes.custom.primary};
  }
`;

export default ProjectInput;
