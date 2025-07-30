<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Spotlight from '$lib/components/Spotlight.svelte';
	import { DotLottieSvelte } from '@lottiefiles/dotlottie-svelte';

	import info from '$lib/info';
</script>

<main class="relative h-full">
	<Spotlight />
	<!-- <div class="flex h-screen items-center justify-center">
			<div class="aspect-square w-[1000px]">
				<DotLottieSvelte src="/animation-white.json" autoplay />
			</div>
			<div class="flex w-fit flex-col items-center justify-between gap-8">
				<h1
					class="text-shadow-glow-white text-right text-8xl font-medium tracking-tighter text-white"
				>
					Empowering <br /> the
					<span class="text-shadow-glow-blue font-serif text-indigo-700 italic">future</span>
					of entrepreneurs.
				</h1>
				<BlueButton href="/join">Join Us</BlueButton>
			</div>
		</div> -->
	<div class=" flex flex-col items-center justify-between">
		<img
			src="/svyep.png"
			alt=""
			class="pointer-events-none absolute mt-36 ml-20 size-[600px] object-cover opacity-[0.04]"
		/>
		<div class=" my-[350px] flex w-fit flex-col items-center justify-between gap-8">
			<h1 class="text-shadow-glow-white text-center text-8xl tracking-tighter text-white">
				Empowering the <span class="text-shadow-glow-blue font-serif text-indigo-700 italic"
					>future</span
				> <br /> of entrepreneurs.
			</h1>
			<Button href="/join" size="lg">Get started</Button>
		</div>
	</div>
</main>
<section class="relative flex h-full flex-col items-center gap-52">
	<div
		class="absolute top-0 -left-[500px] h-full w-[800px] rounded-full bg-radial from-indigo-950/40
		to-transparent to-75% blur-3xl"
	></div>
	<div
		class="absolute -right-[500px] h-full w-[800px] rounded-full bg-radial from-indigo-950/40
		to-transparent to-75% blur-3xl"
	></div>
	<div class=" flex items-center gap-8">
		<div class="text-right">
			<h1
				class="text-shadow-glow-white text-[10rem] leading-32 font-black tracking-tighter text-white"
			>
				{info.home.statistics.members}
			</h1>
			<h2 class="font-serif text-7xl font-medium tracking-tighter text-indigo-700 italic">
				members.
			</h2>
		</div>
		<p class="w-[500px] text-gray-400">
			<span class="text-white"
				>Our <span class="bg-indigo-700 font-serif text-white italic">members</span> are entrepreneurs,
				professionals, organizations, and most importantly, students, who are committed to growing through
				connection, collaboration, and shared opportunities.</span
			> By joining, they gain access to exclusive events, valuable resources, and a community that supports
			their business journey.
		</p>
	</div>
	<div class="flex flex-col gap-4">
		<h1
			class="text-shadow-glow-white text-[10rem] leading-32 font-black tracking-tighter text-white"
		>
			{info.home.statistics.raised}
		</h1>
		<div class="flex gap-8">
			<h2
				class="font-serif text-7xl font-medium tracking-tighter text-indigo-700 italic
			"
			>
				raised.
			</h2>
			<p class="w-[500px] text-gray-400">
				<span class="text-white"
					>We've <span class="bg-indigo-700 font-serif text-white italic">raised</span>
					{info.home.statistics.raised} through investors and partnerships, demonstrating the strength
					and trust of our growing network.</span
				> This level of backing and funding reflects the confidence our partners have in our mission
				and the value we deliver. It shows that our community believes in what we're building and the
				impact we have on bright minds of the future.
			</p>
		</div>
	</div>
	<div class="flex flex-col items-center gap-4">
		<div class="flex gap-4">
			<h1 class="text-[10rem] leading-32 font-black tracking-tighter text-white">
				{info.home.statistics.impacted_students}
			</h1>
			<h2
				class="font-serif text-7xl leading-16 font-medium tracking-tighter text-indigo-700 italic"
			>
				impacted <br />students.
			</h2>
		</div>

		<p class="w-[500px] text-center text-gray-400">
			<span class="text-white">
				We've <span class="bg-indigo-700 font-serif text-white italic">impacted</span> tens of thousands
				of students and professionals by providing them with access to career-building opportunities
				and large events.
			</span> Most notably this year, SVYEP cohosted the largest pitch event in Silicon Valley with thousands
			of attendees, 350+ VCs, and 100+ investors.
		</p>
	</div>
	<div class="flex items-center gap-8">
		<p class="w-[500px] text-right text-gray-400">
			<span class="text-white"
				>We connect students with impactful <span class="bg-indigo-700 font-serif text-white italic"
					>internship</span
				>
				opportunities at leading AI, tech, and innovative companies</span
			>. Through hands-on experience, mentorship, and real-world projects, students gain valuable
			skills and insights that prepare them for careers in various industries.
		</p>
		<div>
			<h1 class="text-[10rem] leading-32 font-black tracking-tighter text-white">
				{info.home.statistics.internships}
			</h1>
			<h2 class="font-serif text-7xl font-medium tracking-tighter text-indigo-700 italic">
				internships.
			</h2>
		</div>
	</div>
	<div class="flex flex-col">
		<div class="flex items-center gap-8">
			<h1 class="text-[10rem] leading-32 font-black tracking-tighter text-white">
				{info.home.statistics.businesses_worked_with}
			</h1>
			<p class="w-[500px] text-gray-400">
				<span class="text-white"
					>We are committed to <span class="bg-indigo-700 font-serif text-white italic"
						>partnering</span
					> with various businesses and companies who have assisted in our mission of helping the younger
					generation.</span
				> From being invited to dinner by companies such as Google Fiber to partnering and hosting monumental
				events, SVYEP is thankful to all organizations we have previously worked with and continue to
				grow alongside.
			</p>
		</div>
		<h2 class="font-serif text-7xl font-semibold tracking-tighter text-indigo-700 italic">
			businesses worked with.
		</h2>
	</div>
</section>
<section class="my-80 flex items-center justify-center">
	<div class="flex flex-col items-center gap-10">
		<h1
			class="w-[650px] text-center font-serif text-6xl font-medium tracking-tighter text-white italic"
		>
			“To unite <span class="font-sans font-semibold text-indigo-700">today's</span> youth with
			<span class="font-sans font-semibold text-indigo-700">tomorrow's</span>
			social entrepreneurs”
		</h1>
		<Button variant="secondary" href="/about">Learn about us</Button>
	</div>
</section>
