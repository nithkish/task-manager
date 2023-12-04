import { Stack, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { themes } from '../../themes'

export const HeadlineWrapper = styled(Stack)(({ theme }) => ({
    gap: 8,
    flexDirection: 'row',
    alignItems: 'center',
    padding: '8px 16px',
    backgroundColor: themes[theme].taskrow.backgroundColor,
    borderRadius: '8px',
    position: 'relative',
    overflow: 'hidden',
    justifyContent: 'space-between',
    cursor:'pointer',
    ":hover": {
      backgroundColor:themes[theme].taskrow.hoverBg
    }
  }))
  
  
  export const NameText = styled(Typography)(() => ({
    flex: 1,
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  }))

  export const Text = styled(Typography)(() => ({
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  }))