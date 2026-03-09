import {
	Map,
	MapControls,
	MapMarker,
	MarkerContent,
	MarkerTooltip,
	MarkerPopup
} from '../UI/map'

const ContactsMap = () => {
	return (
		<div
			className='w-1/2 h-160 rounded-2xl'
			data-lenis-prevent
		>
			<Map
				theme='dark'
				center={[26.81714, 50.1208499]}
				zoom={16}
			>
				<MapControls
					position='bottom-right'
					showZoom
					showCompass
					showLocate
					showFullscreen
				/>
				<MapMarker
					longitude={26.8171687}
					latitude={50.1206394}
				>
					<MarkerContent>
						<div className='relative'>
							<span className='absolute inset-0 rounded-full bg-[#e8a21a]/40 animate-ping' />
							<div className='w-7 h-7 rounded-full bg-yellow[#e8a21a]/30 flex items-center justify-center'>
								<div className='w-4 h-4 rounded-full bg-[#e8a21a] shadow-lg' />
							</div>
						</div>
					</MarkerContent>
					<MarkerTooltip>NOIR GYM</MarkerTooltip>
					<MarkerPopup>
						<div className='min-w-40 rounded-lg bg-[#0F0F0F] p-3 shadow-xl border border-[#1F1F1F]'>
							<p className='font-semibold text-sm text-white uppercase'>
								Noir Gym
							</p>
							<p className='text-xs text-gray-400 mt-1'>Ukraine</p>
							<p className='text-xs text-gray-500 mt-2'>50.1206, 26.8171</p>
						</div>
					</MarkerPopup>
				</MapMarker>
			</Map>
		</div>
	)
}

export default ContactsMap
