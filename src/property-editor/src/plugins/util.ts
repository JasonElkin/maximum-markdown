export function getShortcutWithPrefix(key: string, shift = false) {
	const shiftPrefix = shift ? 'Shift-' : ''
	const CmdPrefix =
		typeof navigator !== 'undefined' && /Mac/.test(navigator.platform)
			? 'Cmd-'
			: 'Ctrl-'
	return shiftPrefix + CmdPrefix + key
}
