# Back-end | E-Sports

## Entidades

### Game

- id
- title
- bannerUrl
- CDN (Content Delivery Network) => URL *Amazon s3
    
### Ad

- id
- gameId
- name
- yearsPlaying
- discord
- weekDays
- hourStart
- hourEnd
- useVoiceChannel
- createdAt

## Casos de uso
- Listagem de games com contagem de anúncios;
- Criação de novo anúncio;
- Listagem de anúncios por game;
- Buscar discord pel ID do anúncio;