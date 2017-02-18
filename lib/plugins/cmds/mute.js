'use strict'

// -- Public Interface ---------------------------------------------------------

/**
 * Mute the bot for a given user or group.
 *
 * Expects one (1) required argument:
 *  * steam-id
 *    - 64-bit representation of the user or group Steam ID.
 *
 * @since 0.1.0
 * @param {SteamBot} bot - Bot instance
 * @returns {Object} Command object in yargs format
 * @example
 *
 * mute 76561197962144253
 * // => 'Permissions updated'
**/
function mute (bot) {
  return bot._permissions('mute')
}

// -- Exports ------------------------------------------------------------------

module.exports = mute