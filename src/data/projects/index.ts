import bobblesportsComrexReverseEngineering from './bobblesports-comrex-reverse-engineering';
import kiprLink from './kipr-link';
import kiprWombat from './kipr-wombat';
import kiprWallaby from './kipr-wallaby';
import kiprLibwallaby from './kipr-libwallaby';
import semioStudio from './semio-studio';
import semioQuori from './semio-quori';

import bundle from '../bundle';
import semioAttentionGeneration from './semio-attention-generation';
import semioAttentionRecognition from './semio-attention-recognition';
import semioDeicticRecognition from './semio-deictic-recognition';
import kiprBotui from './kipr-botui';
import kiprPcompiler from './kipr-pcompiler';
import plasmaUmassDoppio from './plasma-umass-doppio';

export default bundle([
  bobblesportsComrexReverseEngineering,
  kiprLink,
  kiprWombat,
  kiprWallaby,
  kiprPcompiler,
  kiprBotui,
  kiprLibwallaby,
  semioStudio,
  semioQuori,
  semioAttentionGeneration,
  semioAttentionRecognition,
  semioDeicticRecognition,
  plasmaUmassDoppio
]);