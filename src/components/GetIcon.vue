<template>
  <svg v-if="icon === 'paper'" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 204 209"><g><ellipse cx="102" cy="101.5" rx="99" ry="101.5" fill="#2A45C2"/></g><ellipse cx="102" cy="97" rx="99" ry="97" fill="#4664F4"/><ellipse cx="102" cy="97" rx="99" ry="97" fill="url(#b)"/><circle cx="102" cy="99" r="76" fill="#BABFD4"/><ellipse cx="102" cy="103" rx="76" ry="72" fill="url(#c)"/><path d="M131.529 79.323a3.977 3.977 0 0 0-1.682-.27c-.777.054-1.405.371-1.777.89-2.192 3.084-3.987 8.907-5.434 13.586-.664 2.164-1.556 5.06-2.202 6.434-.673-3.85.088-17.955.383-23.387l.004-.087c.205-3.774.233-4.436.188-4.727-.325-2.07-1.151-3.428-2.456-4.037-1.319-.616-3.032-.344-4.878.772-.925.562-1.181 2.49-1.975 11.234l-.003.039c-.437 4.803-1.443 15.864-2.682 17.706-1.398-2.577-3.32-17.22-4.15-23.557-.581-4.44-.919-6.988-1.146-7.757-.479-1.613-2.5-2.985-4.501-3.061-1.666-.083-3.032.768-3.684 2.246-1.22 1.364-.79 5.887.56 16.6.641 5.098 1.966 15.63 1.132 16.81-1.662-.18-4.517-6.777-8.486-19.611-1.113-3.595-1.457-4.676-1.8-5.149-.674-1.648-2.965-2.92-5.019-2.776a4.353 4.353 0 0 0-.514.068c-1.075.214-3.529 1.208-3.006 5.796 1.45 6.36 3.023 11.03 4.55 15.562l.031.09c.914 2.716 1.778 5.28 2.58 8.128 1.892 6.721 1.157 10.891 1.148 10.938-.063.429-.195.691-.393.783a.746.746 0 0 1-.267.061c-.6.042-1.499-.357-1.962-.617-1.059-2.032-6.33-11.719-11.107-13.063l-.172-.05-.173.015c-1.752.167-3.04.832-3.828 1.977-1.247 1.811-.731 4.118-.606 4.58l.07.166c.04.07 3.87 7.085 4.463 10.348.511 2.797 3.156 5.829 5.283 8.265l.088.099c.693.797 1.292 1.486 1.764 2.124 6.17 6.464 15.929 11.902 16.008 11.946 1.218.902 1.895 1.774 1.966 2.525.046.491-.208.785-.217.795l-.213.222 1.35 1.317 25.744-1.816 1.098-5.052c3.394-14.269 2.685-26.434 2.674-26.516.012-.447.964-4.776 1.729-8.273l.022-.089c1.525-6.967 3.422-15.636 3.785-18.933.159-1.41-.739-2.705-2.287-3.294Z" fill="#3B4262"/><defs><linearGradient id="b" x1="3" y1="0" x2="3" y2="194" gradientUnits="userSpaceOnUse"><stop stop-color="#fff" stop-opacity=".097"/><stop offset="1" stop-color="#fff" stop-opacity=".01"/></linearGradient><linearGradient id="c" x1="176.74" y1="175" x2="176.74" y2="33.387" gradientUnits="userSpaceOnUse"><stop stop-color="#F3F3F3"/><stop offset="1" stop-color="#DADADA"/></linearGradient><filter id="a" x="0" y="0" width="204" height="209" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="3"/><feGaussianBlur stdDeviation="1.5"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.196706 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_0:1767"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_0:1767" result="shape"/></filter></defs></svg>
  <svg v-else-if="icon === 'scissors'" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 204 209"><g><ellipse cx="102" cy="101.5" rx="99" ry="101.5" fill="#C76C1B"/></g><ellipse cx="102" cy="97" rx="99" ry="97" fill="#EB9F0E"/><ellipse cx="102" cy="97" rx="99" ry="97" fill="url(#b)"/><circle cx="102" cy="99" r="76" fill="#BABFD4"/><ellipse cx="102" cy="103" rx="76" ry="72" fill="url(#c)"/><path d="m82.16 98.35 8.21-11.544c-3.413-.568-9.679-.694-14.812 4.438-8.09 8.09-11.367 25.569-12.05 29.8l20.563 20.562c3.701-.317 20.091-2.505 35.883-18.297.167-.341 4.014-3.184.869-6.329-1.501-1.501-3.986-1.473-5.52.061-.781.781-1.995.792-2.76.028-.764-.765-.753-1.979.028-2.76l5.58-5.581c2.836-2.836.163-7.62-3.795-6.47l-4.568 3.911a1.959 1.959 0 0 1-2.761-.192c-.708-.82-.557-2.062.25-2.762 15.958-14.002 13.629-12.315 23.896-21.939 3.836-3.194-.99-8.843-4.77-5.608l-24.837 22.335c-.723.615-1.83.627-2.541-.028-.82-.709-.84-1.73-.303-2.537l17.324-26.933c2.533-3.43-2.451-7.238-5.119-3.78L85.312 100.55c-.618.893-1.863 1.098-2.711.473-.851-.571-1.084-1.811-.441-2.674Z" fill="#3B4262"/><defs><linearGradient id="b" x1="3" y1="0" x2="3" y2="194" gradientUnits="userSpaceOnUse"><stop stop-color="#fff" stop-opacity=".097"/><stop offset="1" stop-color="#fff" stop-opacity=".01"/></linearGradient><linearGradient id="c" x1="176.74" y1="175" x2="176.74" y2="33.387" gradientUnits="userSpaceOnUse"><stop stop-color="#F3F3F3"/><stop offset="1" stop-color="#DADADA"/></linearGradient><filter id="a" x="0" y="0" width="204" height="209" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="3"/><feGaussianBlur stdDeviation="1.5"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.196706 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_0:1777"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_0:1777" result="shape"/></filter></defs></svg>
  <svg v-else-if="icon === 'rock'" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 204 209"><g><ellipse cx="102" cy="101.5" rx="99" ry="101.5" fill="#9D1634"/></g><ellipse cx="102" cy="97" rx="99" ry="97" fill="#DB2E4D"/><ellipse cx="102" cy="97" rx="99" ry="97" fill="url(#b)"/><circle cx="102" cy="99" r="76" fill="#BABFD4"/><ellipse cx="102" cy="103" rx="76" ry="72" fill="url(#c)"/><path d="M131.441 88.085c-.877-11.104-13.292-9.97-13.292-9.97-5.24-9.278-13.426-2.558-13.426-2.558-6.29-9.093-14.175-.667-14.175-.667-13.596-1.472-13.069 9.693-13.069 9.693-.32 3.549 1.916 14.53 1.916 14.53-2.017-6.33-6.392-1.076-6.392-1.076-5.378 8.337-1.33 12.9-1.33 12.9 7.278 8.567 22.788 18.85 22.788 18.85 5.616 3.231 3.24 6.113 3.24 6.113l33.968-5.638.781-6.47c5.164-15.687-1.009-35.707-1.009-35.707Z" fill="#3B4262"/><defs><linearGradient id="b" x1="3" y1="0" x2="3" y2="194" gradientUnits="userSpaceOnUse"><stop stop-color="#fff" stop-opacity=".097"/><stop offset="1" stop-color="#fff" stop-opacity=".01"/></linearGradient><linearGradient id="c" x1="176.74" y1="175" x2="176.74" y2="33.387" gradientUnits="userSpaceOnUse"><stop stop-color="#F3F3F3"/><stop offset="1" stop-color="#DADADA"/></linearGradient><filter id="a" x="0" y="0" width="204" height="209" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="3"/><feGaussianBlur stdDeviation="1.5"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.196706 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_0:1787"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_0:1787" result="shape"/></filter></defs></svg>
</template>

<script>
export default {
  props: ['icon']
}
</script>

<style lang="scss" scoped>
.scoreboard {
  width: 100%;
  max-width: 700px;
  margin: 50px 0;
  border: 3px solid rgba(255, 255, 255, 0.289199);
  border-radius: 15px;
  padding: 18px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .app-title {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    svg {
      height: 92px;
    }
  }

  .score-container {
    background: linear-gradient(0deg, #F3F3F3 0%, #FFFFFF 100%);
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.196706);
    border-radius: 8px;
    min-width: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;

    .score-label {
      font-family: Barlow Semi Condensed;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 2.5px;
      color: #2A45C2;
      margin: 0;
    }

    .score {
      font-family: Barlow Semi Condensed;
      font-style: normal;
      font-weight: bold;
      font-size: 64px;
      line-height: 64px;
      text-align: center;
      color: #565468;
      margin: 0;
    }
  }
}
</style>
