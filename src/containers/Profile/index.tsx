import React from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import Avatar from '@material-ui/core/Avatar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'
import Grid from '@material-ui/core/Grid'
import styles from './styles.module.scss'
import Section from './components/Section'
import avatarimg from '../../public/images/background.jpg'

import SectionTitle from './components/SectionTitle'
import { SkillCard } from './components/Card'

import strings from '../../strings/en.json'
import skills from '../../strings/skills.json'

export const ProfileContainer: React.FC = () => {
  const navigateToExternalUrl = (url: string, shouldOpenNewTab = true): any => {
    if (shouldOpenNewTab) {
      window.open(url, '_blank')
      return
    }
    window.location.href = url
  }

  return (
    <div className={styles.image}>
      <PerfectScrollbar>
        <Section className={styles.parentContainer}>
          <div className={styles.title}>
            <div className={styles.text}>
              <span>{strings.PROFILE.NAME}</span>
            </div>
            <div className={styles.subText}>
              <span>{strings.PROFILE.JOB_TITLE}</span>
            </div>
          </div>
          <div className={styles.icons}>
            <FontAwesomeIcon
              size="lg"
              icon={faFacebook}
              onClick={() =>
                navigateToExternalUrl('https://www.facebook.com/YourJaps')
              }
            />
            <FontAwesomeIcon size="lg" icon={faGithub} />
            <FontAwesomeIcon size="lg" icon={faLinkedin} />
            <FontAwesomeIcon size="lg" icon={faInstagram} />
          </div>
          <div className={styles.slogan}>{strings.PROFILE.SLOGAN}</div>
        </Section>

        <Section sectionClassName={styles.parentContainer}>
          <SectionTitle title="About Myself" />

          <div className={styles.avatarContainer}>
            <Avatar
              classes={{
                root: styles.avatarRoot,
              }}
              src={avatarimg}
            />
          </div>
          <p className={styles.aboutContent}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias
            officiis inventore consequatur facilis nisi odit dignissimos eaque
            nobis doloribus, veniam deserunt incidunt rem ipsam culpa totam
            aliquid corporis maxime hic. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Molestias officiis inventore consequatur facilis
            nisi odit dignissimos eaque nobis doloribus, veniam deserunt
            incidunt rem ipsam culpa totam aliquid corporis maxime hic. Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Molestias
            officiis inventore consequatur facilis nisi odit dignissimos eaque
            nobis doloribus, veniam deserunt incidunt rem ipsam culpa totam
            aliquid corporis maxime hic.
          </p>

          <div>
            <p className={styles.aboutContent}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestias officiis inventore consequatur facilis nisi odit
              dignissimos eaque nobis doloribus, veniam deserunt incidunt rem
              ipsam culpa totam aliquid corporis maxime hic. Lorem ipsum, dolor
              sit amet consectetur adipisicing elit. Molestias officiis
              inventore consequatur facilis nisi odit dignissimos eaque nobis
              doloribus, veniam deserunt incidunt rem ipsam culpa totam aliquid
              corporis maxime hic. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Molestias officiis inventore consequatur facilis
              nisi odit dignissimos eaque nobis doloribus, veniam deserunt
              incidunt rem ipsam culpa totam aliquid corporis maxime hic.
            </p>
          </div>
        </Section>

        <Section sectionClassName={styles.section}>
          <SectionTitle title="Skills" />
          <div className={styles.cards}>
            {skills.map((row) => (
              <Grid container direction="row">
                {row.skills.map((column) => (
                  <Grid
                    classes={{ root: styles.item }}
                    key={column.id}
                    item
                    xs={12}
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
      </PerfectScrollbar>
    </div>
  )
}
