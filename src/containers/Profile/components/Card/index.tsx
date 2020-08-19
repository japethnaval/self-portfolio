import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import styles from './styles.module.scss'

interface IProps {
  image: string
  title?: string
  content?: string
}

export const SkillCard: React.FC<IProps> = ({
  image,
  title,
  content,
}: IProps) => {
  return (
    <Card className={styles.root}>
      <CardMedia
        classes={{
          root: styles.cardMediaRoot,
        }}
        className={styles.media}
        image={require(`../../../../public/images/${image}`)}
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography
          variant="body2"
          component="p"
          classes={{
            root: styles.typography,
          }}
        >
          {content}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default SkillCard
