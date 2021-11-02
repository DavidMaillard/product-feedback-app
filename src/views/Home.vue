<template>
  <section class="home-page">
    <!-- Step One -->
    <section v-if="activeStep === 1" class="step-one">
      <div v-for="(option, index) in options" :key="index" class="option" @click="choose(option)">
        <GetIcon :icon="option" />
      </div>
    </section>
    <!-- Step Two -->
    <section v-if="activeStep === 2" class="step-two">
      <section class="choice player">
        <p class="choice-label">YOU PICKED</p>
        <div class="choice-option">
          <GetIcon :icon="playerChoice" />
        </div>
      </section>
      <section class="status" v-if="status">
        <p v-if="status === 'win'" class="status-label">You win</p>
        <p v-else class="status-label">You lose</p>
        <div class="status-button" @click="reset">Play again</div>
      </section>
      <section class="choice bot">
        <p class="choice-label">THE HOUSE PICKED</p>
        <div class="choice-option">
          <GetIcon v-if="botChoice" :icon="botChoice" />
          <div v-else class="choice-none"></div>
        </div>
      </section>
    </section>
    <!-- Rules -->
    <div class="rules-button" @click="rulesPopup = true">RULES</div>
    <div v-if="rulesPopup" class="rules-overlay" @click="rulesPopup = false"></div>
    <div v-if="rulesPopup" class="rules-popup">
      <p class="popup-heading">RULES</p>
      <div class="close-button" @click="rulesPopup = false">
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path opacity=".25" fill-rule="evenodd" clip-rule="evenodd" d="M19.092 2.121 16.97 0 9.546 7.425 2.12 0 0 2.121l7.425 7.425L0 16.97l2.121 2.12 7.425-7.424 7.425 7.425 2.12-2.121-7.424-7.425 7.425-7.425Z" fill="#3B4262"/></svg>
      </div>
      <svg class="rules-img" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 305 271"><ellipse cx="53.189" cy="54.815" rx="53.189" ry="54.815" fill="#B1B4C5"/><ellipse cx="53.189" cy="52.385" rx="53.189" ry="52.385" fill="url(#a)"/><ellipse cx="53.189" cy="53.465" rx="40.832" ry="41.044" fill="#E1E4ED"/><path d="M69.054 42.838a2.125 2.125 0 0 0-.904-.146c-.417.03-.755.201-.955.481-1.177 1.666-2.141 4.81-2.919 7.337-.357 1.169-.836 2.733-1.183 3.475-.362-2.08.047-9.697.206-12.63l.002-.047c.11-2.038.125-2.396.1-2.553-.174-1.118-.618-1.852-1.319-2.18-.708-.333-1.629-.186-2.62.417-.497.303-.635 1.345-1.061 6.067l-.002.02c-.235 2.595-.776 8.568-1.441 9.563-.75-1.392-1.784-9.3-2.23-12.722-.312-2.397-.494-3.774-.616-4.19-.257-.87-1.343-1.611-2.418-1.652-.895-.045-1.629.414-1.98 1.213-.655.736-.423 3.179.302 8.964.345 2.754 1.056 8.441.608 9.08-.893-.099-2.427-3.661-4.559-10.592-.598-1.942-.783-2.525-.967-2.78-.362-.891-1.593-1.578-2.696-1.5a2.314 2.314 0 0 0-.277.036c-.578.116-1.896.653-1.615 3.13.779 3.435 1.624 5.957 2.445 8.405l.016.05c.491 1.465.956 2.85 1.387 4.388 1.016 3.63.621 5.882.616 5.907-.034.232-.104.374-.211.423a.406.406 0 0 1-.143.033c-.322.023-.805-.193-1.054-.333-.57-1.098-3.402-6.33-5.968-7.055l-.092-.027-.093.008c-.942.09-1.634.45-2.057 1.068-.67.978-.392 2.224-.325 2.474l.038.09c.02.037 2.079 3.825 2.397 5.587.275 1.511 1.696 3.149 2.838 4.464l.047.054c.373.43.695.802.949 1.146 3.315 3.492 8.557 6.428 8.6 6.452.654.487 1.018.958 1.056 1.363a.596.596 0 0 1-.117.43l-.114.12.725.711 13.832-.98.59-2.73c1.823-7.705 1.442-14.275 1.436-14.319.007-.241.518-2.58.93-4.468l.011-.048c.82-3.762 1.838-8.444 2.034-10.225.085-.761-.398-1.46-1.23-1.779Z" fill="#8A90AC"/><ellipse cx="249.686" cy="54.815" rx="53.686" ry="54.815" fill="#B1B4C5"/><ellipse cx="249.686" cy="52.385" rx="53.686" ry="52.385" fill="url(#b)"/><ellipse cx="249.686" cy="53.465" rx="41.214" ry="41.044" fill="#E1E4ED"/><path d="m238.927 53.114 4.452-6.234c-1.85-.307-5.248-.375-8.032 2.397-4.387 4.369-6.164 13.808-6.535 16.093l11.151 11.105c2.008-.171 10.895-1.353 19.459-9.882.091-.184 2.177-1.719.472-3.418-.814-.81-2.162-.795-2.994.033a1.05 1.05 0 0 1-1.496.015 1.04 1.04 0 0 1 .015-1.49l3.026-3.014c1.538-1.532.088-4.115-2.058-3.495l-2.478 2.113a1.065 1.065 0 0 1-1.497-.104c-.384-.443-.302-1.114.136-1.491 8.654-7.562 7.391-6.651 12.958-11.849 2.08-1.724-.537-4.776-2.586-3.029l-13.469 12.063a1.051 1.051 0 0 1-1.378-.016c-.445-.382-.456-.934-.165-1.37l9.395-14.545c1.373-1.852-1.329-3.909-2.776-2.042l-13.891 19.348a1.05 1.05 0 0 1-1.47.256 1.02 1.02 0 0 1-.239-1.444Z" fill="#8A90AC"/><ellipse cx="151.686" cy="214.815" rx="53.686" ry="54.815" fill="#B1B4C5"/><ellipse cx="151.686" cy="212.385" rx="53.686" ry="52.385" fill="url(#c)"/><ellipse cx="151.686" cy="213.465" rx="41.214" ry="41.044" fill="#E1E4ED"/><path d="M167.652 207.57c-.476-5.996-7.208-5.384-7.208-5.384-2.842-5.011-7.282-1.381-7.282-1.381-3.41-4.911-7.686-.36-7.686-.36-7.373-.796-7.087 5.234-7.087 5.234-.174 1.917 1.039 7.847 1.039 7.847-1.094-3.418-3.466-.581-3.466-.581-2.917 4.502-.721 6.967-.721 6.967 3.946 4.627 12.357 10.18 12.357 10.18 3.045 1.745 1.757 3.301 1.757 3.301l18.42-3.045.424-3.494c2.8-8.472-.547-19.284-.547-19.284Z" fill="#8A90AC"/><path d="M140.617 27.478c0 .823-.269 1.452-.806 1.885-.529.425-1.213.637-2.054.637h-2.912a.192.192 0 0 1-.117-.039.19.19 0 0 1-.039-.117v-8.788a.14.14 0 0 1 .039-.104.163.163 0 0 1 .117-.052h2.717c.927 0 1.647.208 2.158.624.511.407.767 1.031.767 1.872 0 .858-.334 1.478-1.001 1.859-.043.026-.048.052-.013.078.763.433 1.144 1.148 1.144 2.145Zm-4.03-5.005c-.043 0-.065.022-.065.065v2.041c0 .043.022.065.065.065h.988c.347 0 .62-.095.819-.286.199-.19.299-.455.299-.793 0-.347-.1-.615-.299-.806-.191-.19-.464-.286-.819-.286h-.988Zm1.092 5.941c.347 0 .615-.1.806-.299.199-.208.299-.498.299-.871s-.1-.663-.299-.871c-.191-.217-.459-.325-.806-.325h-1.092c-.043 0-.065.022-.065.065v2.236c0 .043.022.065.065.065h1.092Zm9.619-6.097a.16.16 0 0 1-.052.117.14.14 0 0 1-.104.039h-3.484c-.043 0-.065.022-.065.065v2.028c0 .043.022.065.065.065h2.171c.044 0 .078.017.104.052.035.026.052.06.052.104v1.261a.16.16 0 0 1-.052.117.14.14 0 0 1-.104.039h-2.171c-.043 0-.065.022-.065.065v2.093c0 .043.022.065.065.065h3.484c.044 0 .078.017.104.052.035.026.052.06.052.104v1.261a.16.16 0 0 1-.052.117.14.14 0 0 1-.104.039h-5.226a.192.192 0 0 1-.117-.039.19.19 0 0 1-.039-.117v-8.788a.14.14 0 0 1 .039-.104.163.163 0 0 1 .117-.052h5.226c.044 0 .078.017.104.052.035.026.052.06.052.104v1.261ZM153.312 30c-.096 0-.156-.043-.182-.13l-.299-1.274c-.009-.035-.031-.052-.065-.052h-2.431c-.035 0-.057.017-.065.052l-.299 1.274c-.026.087-.083.13-.169.13h-1.573c-.113 0-.156-.056-.13-.169l2.34-8.801c.026-.087.086-.13.182-.13h1.885c.095 0 .156.043.182.13l2.34 8.801.013.052c0 .078-.048.117-.143.117h-1.586Zm-2.691-2.951c-.009.026-.005.048.013.065a.112.112 0 0 0 .052.013h1.716a.118.118 0 0 0 .052-.013c.017-.017.021-.039.013-.065l-.897-3.77c-.009-.035-.022-.052-.039-.052-.018 0-.031.017-.039.052l-.871 3.77Zm10.086-6.149c.044 0 .078.017.104.052.035.026.052.06.052.104v1.274a.16.16 0 0 1-.052.117.14.14 0 0 1-.104.039h-1.976c-.043 0-.065.022-.065.065v7.293a.16.16 0 0 1-.052.117.14.14 0 0 1-.104.039h-1.521a.192.192 0 0 1-.117-.039.19.19 0 0 1-.039-.117v-7.293c0-.043-.021-.065-.065-.065h-1.911a.192.192 0 0 1-.117-.039.19.19 0 0 1-.039-.117v-1.274a.14.14 0 0 1 .039-.104.163.163 0 0 1 .117-.052h5.85Zm3.88 9.204c-.598 0-1.122-.104-1.573-.312a2.548 2.548 0 0 1-1.053-.897 2.479 2.479 0 0 1-.364-1.339v-.338a.14.14 0 0 1 .039-.104.163.163 0 0 1 .117-.052h1.495c.043 0 .078.017.104.052.035.026.052.06.052.104v.247c0 .303.113.559.338.767.225.2.529.299.91.299.338 0 .594-.087.767-.26a.876.876 0 0 0 .273-.663c0-.2-.056-.368-.169-.507a1.63 1.63 0 0 0-.481-.403c-.199-.13-.511-.303-.936-.52-.52-.26-.945-.503-1.274-.728a3.122 3.122 0 0 1-.845-.871c-.234-.355-.351-.784-.351-1.287 0-.503.117-.94.351-1.313a2.323 2.323 0 0 1 1.014-.871c.433-.208.927-.312 1.482-.312.581 0 1.096.113 1.547.338.451.217.802.524 1.053.923.251.399.377.858.377 1.378v.26a.16.16 0 0 1-.052.117.141.141 0 0 1-.104.039h-1.495a.192.192 0 0 1-.117-.039.19.19 0 0 1-.039-.117v-.234c0-.312-.108-.572-.325-.78-.217-.208-.511-.312-.884-.312-.312 0-.559.082-.741.247-.173.156-.26.377-.26.663 0 .2.052.373.156.52.104.147.264.29.481.429.217.13.546.303.988.52l.273.156c.503.277.893.52 1.17.728.286.2.524.455.715.767.191.312.286.689.286 1.131 0 .789-.269 1.417-.806 1.885-.529.46-1.235.689-2.119.689ZM46.617 143.478c0 .823-.269 1.452-.806 1.885-.529.425-1.213.637-2.054.637h-2.912a.19.19 0 0 1-.117-.039.192.192 0 0 1-.039-.117v-8.788c0-.043.013-.078.039-.104a.16.16 0 0 1 .117-.052h2.717c.927 0 1.647.208 2.158.624.511.407.767 1.031.767 1.872 0 .858-.334 1.478-1.001 1.859-.043.026-.048.052-.013.078.763.433 1.144 1.148 1.144 2.145Zm-4.03-5.005c-.043 0-.065.022-.065.065v2.041c0 .043.022.065.065.065h.988c.347 0 .62-.095.819-.286.2-.191.299-.455.299-.793 0-.347-.1-.615-.299-.806-.19-.191-.464-.286-.819-.286h-.988Zm1.092 5.941c.347 0 .615-.1.806-.299.2-.208.299-.498.299-.871s-.1-.663-.299-.871c-.19-.217-.46-.325-.806-.325h-1.092c-.043 0-.065.022-.065.065v2.236c0 .043.022.065.065.065h1.092Zm9.62-6.097a.163.163 0 0 1-.053.117.14.14 0 0 1-.104.039h-3.484c-.043 0-.065.022-.065.065v2.028c0 .043.022.065.065.065h2.171c.044 0 .078.017.104.052a.124.124 0 0 1 .052.104v1.261a.163.163 0 0 1-.052.117.14.14 0 0 1-.104.039h-2.17c-.044 0-.066.022-.066.065v2.093c0 .043.022.065.065.065h3.484c.044 0 .078.017.104.052a.124.124 0 0 1 .052.104v1.261a.163.163 0 0 1-.052.117.14.14 0 0 1-.104.039h-5.226a.19.19 0 0 1-.117-.039.192.192 0 0 1-.039-.117v-8.788c0-.043.013-.078.04-.104a.16.16 0 0 1 .116-.052h5.226c.044 0 .078.017.104.052a.124.124 0 0 1 .052.104v1.261ZM59.311 146c-.096 0-.156-.043-.182-.13l-.3-1.274c-.008-.035-.03-.052-.064-.052h-2.431c-.035 0-.057.017-.066.052l-.298 1.274c-.026.087-.083.13-.17.13h-1.573c-.112 0-.156-.056-.13-.169l2.34-8.801c.026-.087.087-.13.182-.13h1.886c.095 0 .155.043.181.13l2.34 8.801.014.052c0 .078-.048.117-.143.117H59.31Zm-2.691-2.951c-.01.026-.005.048.012.065a.111.111 0 0 0 .052.013h1.716a.111.111 0 0 0 .052-.013c.018-.017.022-.039.014-.065l-.898-3.77c-.008-.035-.021-.052-.038-.052-.018 0-.03.017-.04.052l-.87 3.77Zm10.086-6.149c.044 0 .078.017.104.052a.124.124 0 0 1 .052.104v1.274a.163.163 0 0 1-.052.117.14.14 0 0 1-.104.039h-1.976c-.043 0-.065.022-.065.065v7.293a.163.163 0 0 1-.052.117.14.14 0 0 1-.104.039h-1.52a.19.19 0 0 1-.118-.039.192.192 0 0 1-.039-.117v-7.293c0-.043-.021-.065-.065-.065h-1.91a.19.19 0 0 1-.118-.039.192.192 0 0 1-.039-.117v-1.274c0-.043.013-.078.04-.104a.16.16 0 0 1 .116-.052h5.85Zm3.88 9.204c-.598 0-1.122-.104-1.573-.312a2.556 2.556 0 0 1-1.053-.897 2.48 2.48 0 0 1-.364-1.339v-.338c0-.043.013-.078.039-.104a.16.16 0 0 1 .117-.052h1.495c.043 0 .078.017.104.052a.124.124 0 0 1 .052.104v.247c0 .303.113.559.338.767.225.199.529.299.91.299.338 0 .594-.087.767-.26a.875.875 0 0 0 .273-.663.78.78 0 0 0-.169-.507 1.626 1.626 0 0 0-.481-.403c-.2-.13-.511-.303-.936-.52a11.09 11.09 0 0 1-1.274-.728 3.116 3.116 0 0 1-.845-.871c-.234-.355-.351-.784-.351-1.287 0-.503.117-.94.351-1.313.243-.381.58-.672 1.014-.871.433-.208.927-.312 1.482-.312.58 0 1.096.113 1.547.338.45.217.802.524 1.053.923.251.399.377.858.377 1.378v.26a.163.163 0 0 1-.052.117.14.14 0 0 1-.104.039h-1.495a.19.19 0 0 1-.117-.039.192.192 0 0 1-.039-.117v-.234c0-.312-.108-.572-.325-.78-.217-.208-.511-.312-.884-.312-.312 0-.559.082-.741.247-.173.156-.26.377-.26.663 0 .199.052.373.156.52.104.147.264.29.481.429.217.13.546.303.988.52l.273.156c.503.277.893.52 1.17.728.286.199.524.455.715.767.19.312.286.689.286 1.131 0 .789-.269 1.417-.806 1.885-.529.459-1.235.689-2.119.689ZM241.617 143.478c0 .823-.269 1.452-.806 1.885-.529.425-1.213.637-2.054.637h-2.912a.192.192 0 0 1-.117-.039.192.192 0 0 1-.039-.117v-8.788c0-.043.013-.078.039-.104a.161.161 0 0 1 .117-.052h2.717c.927 0 1.647.208 2.158.624.511.407.767 1.031.767 1.872 0 .858-.334 1.478-1.001 1.859-.043.026-.048.052-.013.078.763.433 1.144 1.148 1.144 2.145Zm-4.03-5.005c-.043 0-.065.022-.065.065v2.041c0 .043.022.065.065.065h.988c.347 0 .62-.095.819-.286.199-.191.299-.455.299-.793 0-.347-.1-.615-.299-.806-.191-.191-.464-.286-.819-.286h-.988Zm1.092 5.941c.347 0 .615-.1.806-.299.199-.208.299-.498.299-.871s-.1-.663-.299-.871c-.191-.217-.459-.325-.806-.325h-1.092c-.043 0-.065.022-.065.065v2.236c0 .043.022.065.065.065h1.092Zm9.619-6.097a.161.161 0 0 1-.052.117.14.14 0 0 1-.104.039h-3.484c-.043 0-.065.022-.065.065v2.028c0 .043.022.065.065.065h2.171c.044 0 .078.017.104.052a.123.123 0 0 1 .052.104v1.261a.161.161 0 0 1-.052.117.14.14 0 0 1-.104.039h-2.171c-.043 0-.065.022-.065.065v2.093c0 .043.022.065.065.065h3.484c.044 0 .078.017.104.052a.123.123 0 0 1 .052.104v1.261a.161.161 0 0 1-.052.117.14.14 0 0 1-.104.039h-5.226a.192.192 0 0 1-.117-.039.192.192 0 0 1-.039-.117v-8.788c0-.043.013-.078.039-.104a.161.161 0 0 1 .117-.052h5.226c.044 0 .078.017.104.052a.123.123 0 0 1 .052.104v1.261Zm6.014 7.683c-.096 0-.156-.043-.182-.13l-.299-1.274c-.009-.035-.031-.052-.065-.052h-2.431c-.035 0-.057.017-.065.052l-.299 1.274c-.026.087-.083.13-.169.13h-1.573c-.113 0-.156-.056-.13-.169l2.34-8.801c.026-.087.086-.13.182-.13h1.885c.095 0 .156.043.182.13l2.34 8.801.013.052c0 .078-.048.117-.143.117h-1.586Zm-2.691-2.951c-.009.026-.005.048.013.065a.108.108 0 0 0 .052.013h1.716a.114.114 0 0 0 .052-.013c.017-.017.021-.039.013-.065l-.897-3.77c-.009-.035-.022-.052-.039-.052-.018 0-.031.017-.039.052l-.871 3.77Zm10.086-6.149c.044 0 .078.017.104.052a.123.123 0 0 1 .052.104v1.274a.161.161 0 0 1-.052.117.14.14 0 0 1-.104.039h-1.976c-.043 0-.065.022-.065.065v7.293a.161.161 0 0 1-.052.117.14.14 0 0 1-.104.039h-1.521a.192.192 0 0 1-.117-.039.192.192 0 0 1-.039-.117v-7.293c0-.043-.021-.065-.065-.065h-1.911a.192.192 0 0 1-.117-.039.192.192 0 0 1-.039-.117v-1.274c0-.043.013-.078.039-.104a.161.161 0 0 1 .117-.052h5.85Zm3.88 9.204c-.598 0-1.122-.104-1.573-.312a2.552 2.552 0 0 1-1.053-.897 2.478 2.478 0 0 1-.364-1.339v-.338c0-.043.013-.078.039-.104a.161.161 0 0 1 .117-.052h1.495c.043 0 .078.017.104.052a.123.123 0 0 1 .052.104v.247c0 .303.113.559.338.767.225.199.529.299.91.299.338 0 .594-.087.767-.26a.875.875 0 0 0 .273-.663.778.778 0 0 0-.169-.507 1.63 1.63 0 0 0-.481-.403c-.199-.13-.511-.303-.936-.52-.52-.26-.945-.503-1.274-.728a3.122 3.122 0 0 1-.845-.871c-.234-.355-.351-.784-.351-1.287 0-.503.117-.94.351-1.313a2.323 2.323 0 0 1 1.014-.871c.433-.208.927-.312 1.482-.312.581 0 1.096.113 1.547.338.451.217.802.524 1.053.923.251.399.377.858.377 1.378v.26a.161.161 0 0 1-.052.117.141.141 0 0 1-.104.039h-1.495a.192.192 0 0 1-.117-.039.192.192 0 0 1-.039-.117v-.234c0-.312-.108-.572-.325-.78-.217-.208-.511-.312-.884-.312-.312 0-.559.082-.741.247-.173.156-.26.377-.26.663 0 .199.052.373.156.52.104.147.264.29.481.429.217.13.546.303.988.52l.273.156c.503.277.893.52 1.17.728.286.199.524.455.715.767.191.312.286.689.286 1.131 0 .789-.269 1.417-.806 1.885-.529.459-1.235.689-2.119.689Z" fill="#B1B4C5"/><rect width="50" height="4" rx="2" transform="matrix(-1 0 0 1 177 49)" fill="#B1B4C5"/><path fill-rule="evenodd" clip-rule="evenodd" d="M137.645 41.01a1.844 1.844 0 0 0-2.616.012l-8.59 8.728a1.845 1.845 0 0 0 2.629 2.588l8.59-8.729a1.844 1.844 0 0 0-.013-2.6Z" fill="#B1B4C5"/><path fill-rule="evenodd" clip-rule="evenodd" d="M137.645 60.99a1.844 1.844 0 0 0 .013-2.6l-8.59-8.728a1.844 1.844 0 0 0-2.629 2.587l8.59 8.729a1.844 1.844 0 0 0 2.616.013Z" fill="#B1B4C5"/><rect width="50" height="4" rx="2" transform="scale(1 -1) rotate(-55 -72.969 -136.195)" fill="#B1B4C5"/><path fill-rule="evenodd" clip-rule="evenodd" d="M96.476 154.67a1.843 1.843 0 0 0 1.511 2.135l12.077 2.031a1.844 1.844 0 1 0 .611-3.638l-12.076-2.03c-1-.168-1.949.503-2.123 1.502Z" fill="#B1B4C5"/><path fill-rule="evenodd" clip-rule="evenodd" d="M112.844 143.209a1.844 1.844 0 0 0-2.137 1.481l-2.223 12.043a1.844 1.844 0 1 0 3.627.669l2.223-12.043a1.845 1.845 0 0 0-1.49-2.15Z" fill="#B1B4C5"/><rect x="195.449" y="158.151" width="50" height="4" rx="2" transform="rotate(-55 195.449 158.151)" fill="#B1B4C5"/><path fill-rule="evenodd" clip-rule="evenodd" d="M211.476 121.33a1.843 1.843 0 0 1 1.511-2.135l12.077-2.031a1.844 1.844 0 1 1 .611 3.638l-12.076 2.03a1.844 1.844 0 0 1-2.123-1.502Z" fill="#B1B4C5"/><path fill-rule="evenodd" clip-rule="evenodd" d="M227.844 132.791a1.844 1.844 0 0 1-2.137-1.481l-2.223-12.043a1.844 1.844 0 1 1 3.627-.669l2.223 12.043a1.845 1.845 0 0 1-1.49 2.15Z" fill="#B1B4C5"/><defs><linearGradient id="a" x1="0" y1="0" x2="0" y2="104.77" gradientUnits="userSpaceOnUse"><stop stop-color="#fff" stop-opacity=".097"/><stop offset="1" stop-color="#fff" stop-opacity=".01"/></linearGradient><linearGradient id="b" x1="196" y1="0" x2="196" y2="104.77" gradientUnits="userSpaceOnUse"><stop stop-color="#fff" stop-opacity=".097"/><stop offset="1" stop-color="#fff" stop-opacity=".01"/></linearGradient><linearGradient id="c" x1="98" y1="160" x2="98" y2="264.77" gradientUnits="userSpaceOnUse"><stop stop-color="#fff" stop-opacity=".097"/><stop offset="1" stop-color="#fff" stop-opacity=".01"/></linearGradient></defs></svg>
    </div>
  </section>
</template>

<script>
import { mapMutations } from 'vuex'
import GetIcon from '@/components/GetIcon.vue'

export default {
  components: { GetIcon },
  data() {
    return {
      options: ['paper', 'scissors', 'rock'],
      activeStep: 1,
      playerChoice: null,
      botChoice: null,
      status: null,
      rulesPopup: false
    }
  },
  methods: {
    choose(option) {
      this.playerChoice = option
      this.activeStep = 2

      setTimeout(() => {
        while (this.botChoice === null || this.botChoice === this.playerChoice) {
          this.botChoice = this.options[Math.floor(Math.random() * this.options.length)]
        }

        if (this.playerChoice === 'paper') {
          if (this.botChoice === 'scissors') {
            this.status = 'loose'
          } else {
            this.status = 'win'
          }
        } else if (this.playerChoice === 'scissors') {
          if (this.botChoice === 'rock') {
            this.status = 'loose'
          } else {
            this.status = 'win'
          }
        } else if (this.playerChoice === 'rock') {
          if (this.botChoice === 'paper') {
            this.status = 'loose'
          } else {
            this.status = 'win'
          }
        }

        if (this.status === 'win') {
          this.setScore()
        }
      }, 500)
    },
    reset() {
      this.status = null
      this.botChoice = null
      this.playerChoice = null
      this.activeStep = 1
    },
    ...mapMutations('app', ['setScore'])
  }
}
</script>

<style lang="scss" scoped>
.home-page {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;

  @media (max-width: 767px) {
    margin-bottom: 56px;
  }

  .step-one {
    position: relative;
    width: 100%;
    max-width: 465px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    @media (max-width: 767px) {
      width: calc(100% - 64px);
      max-width: 400px;
    }

    &:before {
      content: '';
      position: absolute;
      top: calc(25% - 12px);
      bottom: calc(25% - 12px);
      left: calc(25% - 40px);
      right: calc(25% - 40px);
      background-image: url("data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDYgMjc3Ij48cGF0aCBvcGFjaXR5PSIuMiIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjkyLjUgNy41SDUuNTc0YzQuNjc5IDAgMTQ3Ljg5MiAyNTQgMTQ3Ljg5MiAyNTRMMjkyLjUgNy41WiIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjE1Ii8+PC9zdmc+");
      background-size: contain;
      background-position: center center;
      background-repeat: no-repeat;
    }

    .option {
      position: relative;
      display: flex;
      width: calc(50% - 40px);
      cursor: pointer;

      &:nth-child(2) {
        margin-left: 80px;

        @media (max-width: 767px) {
          margin-left: 50px;
        }
      }

      &:nth-child(3) {
        margin-top: 24px;

        @media (max-width: 767px) {
          margin-top: 20px;
        }
      }

      &:before {
        content: '';
        position: absolute;
        inset: -27px;
        border-radius: 50%;
        border: 24px solid rgba(#fff, .05);
        transform: translateY(-3px) scale(0.95);
        opacity: 0;
        transition: all ease-out .2s;
      }

      &:hover:before {
        opacity: 1;
      }

      svg {
        width: 100%;
      }
    }
  }

  .step-two {
    display: flex;
    align-items: stretch;
    justify-content: center;

    @media (max-width: 767px) {
      width: calc(100% - 64px);
      flex-wrap: wrap;
      justify-content: space-between;
    }

    .choice {
      display: flex;
      flex-direction: column;
      align-items: center;
      min-width: 293px;
      margin: 0 36px;

      @media (max-width: 1200px) {
        min-width: 200px;
      }

      @media (max-width: 1023px) {
        margin: 0 25px;
      }

      @media (max-width: 767px) {
        width: calc(50% - 20px);
        min-width: auto;
        margin: 0;
        flex-direction: column-reverse;
        order: 1;

        &.bot {
          order: 2;
        }
      }

      .choice-label {
        font-family: Barlow Semi Condensed;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 133%;
        letter-spacing: 3px;
        color: #FFFFFF;
        text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.196706);
        margin: 0 0 60px;
        text-align: center;

        @media (max-width: 1200px) {
          margin-bottom: 40px;
        }

        @media (max-width: 1023px) {
          font-size: 18px;
          margin-bottom: 20px;
        }

        @media (max-width: 767px) {
          font-size: 14px;
          margin-bottom: 0;
          margin-top: 16px;
        }
      }

      .choice-option {
        flex: 1;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
          width: 100%;
        }
      }

      .choice-none {
        width: 224px;
        height: 224px;
        background: rgba(0, 0, 0, 0.1);
        border-radius: 50%;
      }
    }

    .status {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 0 36px;

      @media (max-width: 1023px) {
        margin: 0 25px;
      }

      @media (max-width: 767px) {
        order: 3;
        width: 100%;
        margin: 60px 0 0;
      }

      .status-label {
        font-family: Barlow Semi Condensed;
        font-style: normal;
        font-weight: bold;
        font-size: 56px;
        line-height: 120%;
        text-align: center;
        color: #FFFFFF;
        text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.196706);
        margin: 0 0 16px;
        text-transform: uppercase;

        @media (max-width: 1200px) {
          font-size: 46px;
        }

        @media (max-width: 1023px) {
          font-size: 38px;
        }

        @media (max-width: 767px) {
          font-size: 56px;
          line-height: 67px;
        }
      }

      .status-button {
        width: 220px;
        background: linear-gradient(0deg, #F3F3F3 0%, #FFFFFF 100%);
        box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.196706);
        border-radius: 8px;
        padding: 14px;
        text-align: center;
        font-family: Barlow Semi Condensed;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 2.5px;
        color: #3B4262;
        cursor: pointer;
        text-transform: uppercase;

        @media (max-width: 1023px) {
          width: 150px;
        }

        @media (max-width: 767px) {
          width: 220px;
        }
      }
    }
  }

  .rules-button {
    position: absolute;
    right: 32px;
    bottom: 32px;
    width: 128px;
    border: 1px solid #FFFFFF;
    border-radius: 8px;
    padding: 10px;
    text-align: center;
    font-family: Barlow Semi Condensed;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 2.5px;
    color: #FFFFFF;
    cursor: pointer;
    transition: all ease-out .2s;
    background-color: transparent;

    @media (max-width: 767px) {
      left: 50%;
      right: initial;
      transform: translateX(-50%);
      bottom: 56px;
    }

    &:hover {
      background-color: #fff;
      color: #3B4262;
    }
  }

  .rules-overlay {
    position: fixed;
    inset: 0;
    background: #000000;
    mix-blend-mode: normal;
    opacity: 0.5;
    z-index: 50;
  }

  .rules-popup {
    position: fixed;
    z-index: 51;
    top: 50%;
    left: 50%;
    min-width: 400px;
    transform: translate(-50%, -50%);
    background: #FFFFFF;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.196706);
    border-radius: 8px;
    padding: 32px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media (max-width: 767px) {
      top: 0;
      left: 0;
      inset: 0;
      min-width: 100%;
      align-items: center;
      justify-content: center;
      transform: none;
      border-radius: 0;
    }

    .popup-heading {
      font-family: Barlow Semi Condensed;
      font-style: normal;
      font-weight: bold;
      font-size: 32px;
      line-height: 32px;
      color: #3B4262;
      margin: 0 0 48px;

      @media (max-width: 767px) {
        text-align: center;
        margin-bottom: 110px;
      }
    }

    .close-button {
      position: absolute;
      top: 38px;
      right: 30px;
      width: 20px;
      display: flex;
      cursor: pointer;

      @media (max-width: 767px) {
        bottom: 65px;
        top: initial;
        right: initial;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
}
</style>
