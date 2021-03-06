import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'
import { Form, Formik } from 'formik'
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'

import AOS from 'aos'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import PerfectScrollbar from 'react-perfect-scrollbar'
import clsx from 'clsx'
import EmailJS from 'emailjs-com'
import { SkillCard } from './components/Card'
import { validationSchema } from '../../utils/validations/contact'
import Section from './components/Section'
import SectionTitle from './components/SectionTitle'
import Button from '../../components/Button'
import styles from './styles.module.scss'
import avatarimg from '../../public/images/jap.jpg'
import RESUMEJSON from '../../strings/resume.json'
import SOCIAL from '../../strings/social.json'
import STRINGS from '../../strings/en.json'
import SKILLS from '../../strings/skills.json'
import FormikInput from '../../components/Formik/Input'
import 'aos/dist/aos.css'

interface IFormProps {
  message: string
  emailAddress: string
  webisteName?: string
}

export const ProfileContainer: React.FC = () => {
  const [error, setError] = useState<boolean|undefined>(undefined)

  const navigateToExternalUrl = (url: string, shouldOpenNewTab = true): any => {
    if (shouldOpenNewTab) {
      window.open(url, '_blank')
      return
    }
    window.location.href = url
  }

  const downloadPDF = (
    base64String: string,
    fileName = 'Japeth Naval Resume.pdf',
  ) => {
    const linkSource = `data:application/pdf;base64,${base64String}`
    const downloadLink = document.createElement('a')
    downloadLink.href = linkSource
    downloadLink.download = fileName
    downloadLink.click()
  }

  const onSubmit = async (values: IFormProps, { resetForm }: any) => {
    const {
      REACT_APP_SERVICEID,
      REACT_APP_TEMPLATEID,
      REACT_APP_USERID,
    } = process.env as any

    const templateData = { webisteName: "Jap's Personal Portfolio", ...values }
    
    try {
      await EmailJS.send(
        REACT_APP_SERVICEID,
        REACT_APP_TEMPLATEID,
        templateData,
        REACT_APP_USERID,
      )
      setError(false)
      resetForm()
    } catch (error) {
      setError(true)
    }
  }

  useEffect(() => {
    AOS.init({
      once: true,
      mirror: true,
    })
  }, [])

  return (
    <div className={styles.image}>
      <PerfectScrollbar onScrollY={() => AOS.refresh()}>
        <Section className={styles.parentContainer}>
          <div className={styles.title}>
            <div className={styles.text}>
              <span>{STRINGS.PROFILE.NAME}</span>
            </div>
            <div className={styles.subText}>
              <span>{STRINGS.PROFILE.JOB_TITLE}</span>
            </div>
          </div>
          <div className={styles.icons}>
            <FontAwesomeIcon
              size="lg"
              icon={faFacebook}
              onClick={() => navigateToExternalUrl(SOCIAL.FACEBOOK)}
            />
            <FontAwesomeIcon
              size="lg"
              icon={faGithub}
              onClick={() => navigateToExternalUrl(SOCIAL.GITHUB)}
            />
            <FontAwesomeIcon
              size="lg"
              icon={faLinkedin}
              onClick={() => navigateToExternalUrl(SOCIAL.LINKEDN)}
            />
            <FontAwesomeIcon
              size="lg"
              icon={faInstagram}
              onClick={() => navigateToExternalUrl(SOCIAL.INSTAGRAM)}
            />
          </div>
          <div className={styles.slogan}>{STRINGS.PROFILE.SLOGAN}</div>
        </Section>

        <Section sectionClassName={styles.parentContainer}>
          <SectionTitle title="Hello! I'm Jap" />
          <div className={styles.cards}>
            <Grid container direction="row" spacing={2}>
              <Grid item xs={12} md={6}>
                <div className={styles.avatarContainer}>
                  <Avatar
                    classes={{
                      root: styles.avatarRoot,
                    }}
                    src={avatarimg}
                  />
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <div className={styles.aboutContent}>
                  {STRINGS.PROFILE.ABOUT_ME}
                  <br />
                  <br />
                  {STRINGS.PROFILE.QUESTION_1}
                  <br />
                  <br />
                  {STRINGS.PROFILE.QUESTION_2}
                  <div className={styles.flexEnd}>
                    <Button
                      onClick={() => downloadPDF(RESUMEJSON.RESUME)}
                      className={styles.buttonRoot}
                    >
                      {STRINGS.PROFILE.DOWNLOAD}
                    </Button>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </Section>

        <Section sectionClassName={styles.section}>
          <SectionTitle title="Skills" />
          <div className={clsx(styles.cards)}>
            {SKILLS.map((row) => (
              <Grid container direction="row">
                {row.skills.map((column) => (
                  <Grid
                    classes={{ root: styles.item }}
                    key={column.id}
                    item
                    xs={12}
                    md={3}
                    lg={3}
                  >
                    <SkillCard
                      title={column.title}
                      content={column.content}
                      image={column.image}
                    />
                  </Grid>
                ))}
              </Grid>
            ))}
          </div>
        </Section>

        <Section sectionClassName={styles.section}>
          <SectionTitle title="Hit me up!" />
          <div className={clsx(styles.aboutContent, styles.hitMe)}>
            <Formik
              validateOnChange
              validateOnBlur={false}
              validateOnMount={false}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
              initialValues={{
                emailAddress: '',
                message: '',
              }}
            >
              <Form className={styles.form}>
                <Grid container direction="row" spacing={2}>
                  <Grid item xs={12} md={6}>
                    <h2>{STRINGS.PROFILE.CONTACT_CONSENT}</h2>
                    <p>{STRINGS.PROFILE.CONTACT_TEXT}</p>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <FormikInput
                      fullWidth
                      inputClass={styles.input}
                      name="emailAddress"
                      placeholder="Email"
                    />

                    <FormikInput
                      fullWidth
                      className={styles.multiline}
                      inputClass={styles.input}
                      multiline
                      rows={5}
                      name="message"
                      placeholder="Message"
                    />
                    <div className={styles.submitContainer}>
                      <Button type="submit" className={clsx(styles.buttonRoot)}>
                        {STRINGS.PROFILE.SEND_MSG}
                      </Button>
                    </div>
                  </Grid>
                </Grid>
              </Form>
            </Formik>
            {error !== undefined && 
            <div className={styles.errMsg}>
              {error ?
               <div className={styles.error}>
                 <FontAwesomeIcon icon={faTimesCircle}/> <p>{STRINGS.PROFILE.FAILED_MSG}</p>
               </div>
                :
              <div className={styles.success}>
                <FontAwesomeIcon icon={faCheckCircle}/> <p>{STRINGS.PROFILE.SUCCESS_MSG}</p>
              </div>
              }
            </div>
            }
          </div>
        </Section>
        <div className={clsx(styles.aboutContent, styles.footer)}>
          <div>{STRINGS.PROFILE.FOOTER_INFO}</div>
          <div>{STRINGS.PROFILE.FOOTER_TEXT}</div>
        </div>
      </PerfectScrollbar>
    </div>
  )
}
