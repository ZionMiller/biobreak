import React from 'react'

const NightDay = () => {
  return (
    <div>
      <i class="sun icon"></i>
        <div class="ui toggle checkbox" style="margin-left: 5px;">
	    <input type="checkbox" tabindex="0" class="dark_mode_toggle hidden"/>
      </div>
      <i class="moon icon"></i>
    </div>
  )
}

export default NightDay;
