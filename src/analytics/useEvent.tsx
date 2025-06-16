import ReactGA from 'react-ga4';

export const useEvent = () => {

  const sendPlayGame = () => {
    ReactGA.event({
      category: 'User',
      action: 'play_game',
    });
  }

  const sendPlayAgain = () => {
    ReactGA.event({
      category: 'User',
      action: 'play_again',
    });
  }

  const sendExitGame = () => {
    ReactGA.event({
      category: 'User',
      action: 'exit_game',
    });
  }

  const sendExitApp = () => {
    ReactGA.event({
      category: 'User',
      action: 'exit_app',
    });
  }
  
  const sendNewGame = () => {
    ReactGA.event({
      category: 'User',
      action: 'new_game',
    });
  }

  const sendInstructions = () => {
    ReactGA.event({
      category: 'User',
      action: 'visit_instructions',
    });
  }

  const sendSettings = () => {
    ReactGA.event({
      category: 'User',
      action: 'visit_settings',
    });
  }

  const sendScoreboard = () => {
    ReactGA.event({
      category: 'User',
      action: 'visit_scoreboard',
    });
  }

  const sendRemovePlayersHistory = () => {
    ReactGA.event({
      category: 'User',
      action: 'remove_players',
    });
  }

  const sendRemoveGameHistory = () => {
    ReactGA.event({
      category: 'User',
      action: 'remove_history',
    });
  }

  const sendChangeLang = (lang: string) => {
    ReactGA.event({
      category: 'User',
      action: 'remove_history',
      label: lang
    });
  }

  return {
    sendPlayAgain,
    sendPlayGame,
    sendExitGame,
    sendExitApp,
    sendNewGame,
    sendInstructions,
    sendChangeLang,
    sendRemoveGameHistory,
    sendRemovePlayersHistory,
    sendSettings,
    sendScoreboard,
  }
}
