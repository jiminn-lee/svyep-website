<script lang="ts">
	import { DotLottieSvelte } from '@lottiefiles/dotlottie-svelte';
	import Spotlight from '$lib/components/Spotlight.svelte';
	import Button from '$lib/components/Button.svelte';
	import info from '$lib/info';
	import CaretDown from 'phosphor-svelte/lib/CaretDown';
	import StarsBackground from '$lib/components/StarsBackground.svelte';
</script>

<svelte:head>
	<title>Home • SVYEP</title>
</svelte:head>

<main class="relative h-full">
	<Spotlight />
	<div class="my-[220px] flex flex-wrap items-center justify-center">
		<div class="h-[550px] w-[700px]">
			<DotLottieSvelte src="/animation.lottie" autoplay segment={[0, 209]} />
		</div>
		<div class="mt-15 mr-36 -ml-16 flex w-fit flex-col items-center justify-center gap-12">
			<h1
				class="text-shadow-glow-white text-right text-7xl leading-[4.5rem] tracking-tighter text-white"
			>
				Empowering <br /> the
				<span class="text-shadow-glow-blue font-serif text-indigo-600 italic">future</span>
				of <br /> entrepreneurs.
			</h1>
			<Button href="/join" size="lg">Get started</Button>
		</div>
	</div>
</main>

<!-- section-1 -->
<section class="relative flex h-full flex-col items-center gap-52">
	<StarsBackground starDensity={0.00008} />
	<div
		class="absolute top-0 -left-[500px] h-full w-[800px] rounded-full bg-radial from-indigo-950/80
		to-transparent to-75% blur-3xl"
	></div>
	<div
		class="absolute -right-[500px] h-full w-[800px] rounded-full bg-radial from-indigo-950/80
		to-transparent to-75% blur-3xl"
	></div>
	<div class=" flex items-center gap-8">
		<div class="text-right">
			<h1
				class="text-shadow-glow-white text-[10rem] leading-32 font-black tracking-tighter text-white"
			>
				{info.home.statistics.members}
			</h1>
			<h2 class="font-serif text-7xl font-medium tracking-tighter text-indigo-600 italic">
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
				class="font-serif text-7xl font-medium tracking-tighter text-indigo-600 italic
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
				class="font-serif text-7xl leading-16 font-medium tracking-tighter text-indigo-600 italic"
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
			<h2 class="font-serif text-7xl font-medium tracking-tighter text-indigo-600 italic">
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
		<h2 class="font-serif text-7xl font-semibold tracking-tighter text-indigo-600 italic">
			businesses worked with.
		</h2>
	</div>
</section>

<!-- section-2 -->
<section class="relative flex items-center justify-center py-[500px]">
	<StarsBackground starDensity={0.00008} />
	<div class="relative flex flex-col items-center gap-10">
		<div
			class="absolute -top-48 size-[600px] rounded-full bg-radial from-indigo-950/80
		to-transparent to-75% blur-3xl"
		></div>
		<h1
			class="text-shadow-glow-white z-10 w-[600px] text-center font-serif text-6xl tracking-tighter text-white italic"
		>
			“To unite <span class="text-shadow-glow-blue font-sans font-medium text-indigo-600"
				>today's</span
			>
			youth with
			<span class="text-shadow-glow-blue font-sans font-medium text-indigo-600">tomorrow's</span>
			social entrepreneurs”
		</h1>
		<Button variant="secondary" href="/about" class="z-10">Learn about us</Button>
		<div>
			<img
				src="/images/home/S201.webp"
				alt=""
				class="shadow-glow-gray hover:shadow-glow-blue absolute -top-[200px] -left-[250px] w-[250px] -rotate-12 rounded-3xl opacity-30 transition-all duration-500 hover:opacity-100"
			/>
			<img
				src="/images/home/S202.webp"
				alt=""
				class="shadow-glow-gray hover:shadow-glow-blue absolute -top-[250px] left-[120px] w-[400px] rounded-3xl opacity-30 transition-all duration-500 hover:opacity-100"
			/>
			<img
				src="/images/home/S203.webp"
				alt=""
				class="shadow-glow-gray hover:shadow-glow-blue absolute -top-[150px] left-[650px] w-[200px] rotate-12 rounded-3xl opacity-30 transition-all duration-500 hover:opacity-100"
			/>
			<img
				src="/images/home/S204.webp"
				alt=""
				class="shadow-glow-gray hover:shadow-glow-blue absolute top-[300px] left-[280px] w-[500px] -rotate-12 rounded-3xl opacity-30 transition-all duration-500 hover:opacity-100"
			/>
			<img
				src="/images/home/S205.webp"
				alt=""
				class="shadow-glow-gray hover:shadow-glow-blue absolute top-[200px] -left-[100px] w-[220px] rotate-6 rounded-3xl opacity-30 transition-all duration-500 hover:opacity-100"
			/>
		</div>
	</div>
</section>

<!-- section-3 -->
<section class="relative flex flex-col items-center gap-20">
	<StarsBackground starDensity={0.00008} />
	<h1 class="mb-20 text-center text-9xl leading-24 tracking-tighter text-white">
		We offer resources for <br />
		<span
			class="font-serif italic underline decoration-indigo-600 decoration-wavy decoration-[5px] underline-offset-8 text-shadow-none"
			>your</span
		> success.
	</h1>
	<div class="flex flex-col">
		<div class="z-10 flex">
			<h1 class="font-sans text-[11rem] font-bold tracking-tighter text-white text-shadow-lg">
				01
			</h1>
			<h2 class=" mt-16 ml-4 font-serif text-6xl font-semibold text-indigo-600">CONNECTIONS</h2>
		</div>
		<div class="-mt-32 flex items-center">
			<img src="/images/home/S301.webp" alt="" class="ml-1 h-auto w-[300px] rounded-3xl" />
			<ul class="ml-16 w-[500px] list-disc text-3xl leading-relaxed text-gray-400">
				<li>In-person speaker events</li>
				<li>Networking sessions</li>
				<li>Online meetings w/ industry professionals</li>
			</ul>
		</div>
	</div>
	<CaretDown size={80} class="text-gray-400" />
	<div class="flex flex-col items-end">
		<div class="z-10 flex">
			<h2 class=" mt-16 mr-4 font-serif text-6xl font-semibold text-indigo-600">EXPERIENCE</h2>
			<h1 class="font-sans text-[11rem] font-bold tracking-tighter text-white text-shadow-lg">
				02
			</h1>
		</div>
		<div class="-mt-32 flex items-center">
			<ul class="w-[500px] list-disc text-3xl leading-relaxed text-gray-400">
				<li>Paid internships & jobs</li>
				<li>Volunteer opportunities @ local startups in the Silicon Valley</li>
			</ul>
			<img src="/images/home/S302.webp" alt="" class="mr-1 h-auto w-[300px] rounded-3xl" />
		</div>
	</div>
	<CaretDown size={80} class="text-gray-400" />
	<div class="flex flex-col items-center">
		<h2 class="font-serif text-6xl font-semibold text-indigo-600">EDUCATION</h2>
		<h1
			class="z-10 -mt-14 font-sans text-[11rem] font-bold tracking-tighter text-white text-shadow-lg"
		>
			03
		</h1>
		<img src="/images/home/S303.webp" alt="" class=" -mt-32 h-auto w-[500px] rounded-3xl" />
		<ul class="mt-10 w-[500px] list-disc text-3xl leading-relaxed text-gray-400">
			<li>Engage with mentions & peers in student-led workshops</li>
			<li>Access our nationwide network of schools</li>
		</ul>
	</div>
</section>

<!-- section-4 -->
<section class="relative my-56 flex flex-col items-center gap-12">
	<StarsBackground starDensity={0.00008} />
	<h1 class="text-center text-9xl leading-24 tracking-tighter text-white">
		Get started <span class="font-bold text-indigo-600">TODAY.</span>
	</h1>
	<Button href="/join" size="lg">Join Us</Button>
</section>
