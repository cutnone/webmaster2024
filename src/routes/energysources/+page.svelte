<script lang="ts">
	let hydro: HTMLElement;
	let solar: HTMLElement;
	let wind: HTMLElement;
	let bio: HTMLElement;
	let geothermal: HTMLElement;
	let money: HTMLElement;
	let active = '';

	function getActivate(sect: string) {
		return ((e?: KeyboardEvent) => {  
            if (e?.key && e?.key !== "Enter") return
			active = sect;
            hydro.scrollTo({top: 0})
            solar.scrollTo({top: 0})
            wind.scrollTo({top: 0})
            bio.scrollTo({top: 0})
            geothermal.scrollTo({top: 0})
            money.scrollTo({top: 0})
		}) as any;
	}
</script>

<svelte:head>
    <title>Energy Sources</title>
</svelte:head>

<main>
	<section
		class="hydro"
		class:open={active === 'hydro'}
		bind:this={hydro}
		on:click={getActivate('hydro')}
        on:keypress={getActivate('money')}
        tabindex="0"
	>
		<div>
			<h3>Hydroelectric Energy</h3>
			<p>
				Hydroelectric power on a smaller scale, in households and communities, allows for
				sustainable electricity generation while avoiding the social and environmental harm that can
				be caused by large dams. Additionally, household hydroelectric generators can utilize creeks
				or rivers near the property to constantly generate electricity.
			</p>
		</div>
	</section>

	<section
		class="solar"
		class:open={active === 'solar'}
		bind:this={solar}
		on:click={getActivate('solar')}
        on:keypress={getActivate('money')}
        tabindex="0"
	>
		<div>
			<h3>Solar Power</h3>
            <p>
                Solar panels convert sunlight into energy. This energy can be used to heat water and provide
				all the energy for a home depending on the amount of panels used. Solar panels are designed
				to last and they can be grouped together in a fixed position or attached to a tracking
				device to change the angle of the solar panels depending on the sun’s position in the sky.
				Solar panels for households are becoming increasingly affordable. Taxpayers can claim a 30%
				tax credit on the cost of solar systems on their income taxes.
            </p>
            <p>
                Although upfront costs can be
				relatively expensive, usage of solar power over time can save money and increase the value
				of a home. Additionally, solar power can be used in a wide variety of biomes and climates
				and can generate sufficient electricity even in the winter, when there is less sunlight.
            </p>
			<p>			
				Solar heating can make 50% of the hot water for a family of 4 and costs between
				$5,000-$7,000 dollars for installation. Solar panels cost $3 per watt installed.
				Installation of a 7000 watt system would cost $21,000 but produce enough electricity to meet
				most demands for the energy.
			</p>
		</div>
	</section>

	<section
		class="wind"
		class:open={active === 'wind'}
		bind:this={wind}
		on:click={getActivate('wind')}
        on:keypress={getActivate('money')}
        tabindex="0"
	>
		<div>
			<h3>Grid-connected Wind energy</h3>
            <p>
                Household wind energy systems that can be connected to an electricity distribution system
				are called grid-connected wind electric systems. Wind turbines work by using air resistance
				to spin a propeller, which spins a generator to make electricity. These wind turbines are
				used in grid-connected wind electric systems, which can be very effective in areas where
				average annual wind speed is at least 10 miles per hour. They can also be combined with
				solar and battery systems. 
            </p>
            <p>
                The use of household wind energy systems can save money in the
				long run and allow for a much smaller carbon footprint. However, owners need at least one
				acre of land to install a windmill on their property. Despite these requirements, wind
				systems are a great investment because with proper installation and maintenance, a home wind
				energy system can last up to 20 years or longer. This means savings for a long amount of
				time.
            </p>
			<p>
				 Small turbines can produce around $3000-$5000 for every kilowatt of electricity
				produced. Most wind turbines produce around 5-15 kilowatts of energy, making costs range
				from $15,000 to $75,000. Costs also increase as size and height of the wind turbines
				increase.
			</p>
		</div>
	</section>

	<section
		class="geothermal"
		class:open={active === 'geothermal'}
		bind:this={geothermal}
		on:click={getActivate('geothermal')}
        on:keypress={getActivate('money')}
        tabindex="0"
	>
		<div>
			<h3>Geothermal Energy</h3>
			<p>
				Household geothermal energy units are not used to generate electricity. Instead, these
				systems regulate the temperature in your home by harnessing the air underground. In the
				winter, a geothermal home unit extracts the heat from this air and transfers it to your
				house in order to increase its temperature. 
            </p>
            <p>
                In the summer, the home unit cools the house by
				moving hot air from the house underground. They have the potential to last longer and are
				better at heating than air pump systems. This heating system is more efficient, but it costs
				more than air heating pumps. 

            </p>
            <p>
                Another problem with this system is that the equipment is
				installed underground, which makes it harder for repairs (even though repairs are very
				rare). Even though it costs around $24,500 on average, it is more effective for heating and
				cooling compared to air pumps and keeps your home comfortable for less energy.
			</p>
		</div>
	</section>

	<section 
        class="bio" 
        class:open={active === 'bio'} 
        bind:this={bio} 
        on:click={getActivate('bio')}
        on:keypress={getActivate('money')}
        tabindex="0"
    >
		<div>
			<h3>Biomass</h3>
			<p>
				Biomass heating systems burn organic materials, such as wood pellets, chips, or logs to
				provide heating for homes and water. Compared to fossil fuels like coal and oil, this system
				has a very low carbon footprint, as the wood burned only emits as much carbon as the tree
				has absorbed. Furthermore, it's estimated that a biomass system can save up to $1100 a year
				compared to a traditional electric heating system.
			</p>
		</div>
	</section>

	<section
		class="open money"
		class:open={active === 'money'}
		bind:this={money}
		on:click={getActivate('money')}
        on:keypress={getActivate('money')}
        tabindex="0"
	>
		<div>
			<h3>Additional Financial Bonuses</h3>
			<p>
				The IRS offers a 30% tax credit for installing these systems, which can be used to offset
				the costs of installing these systems. You are required to fill out an IRS form in order to
				claim this tax credit, but the government offers it to everyone who installs these systems.
				Certain states also have a policy called net-metering in which homeowners receive
				compensation for sending any excess electricity that they generate to the grid.
			</p>
		</div>
	</section>
</main>

<style lang="scss">
	main {
		height: 100dvh;
		background-size: cover;
		background-position: center;
		color: white;
		display: flex;
		// background-color: #ffffffaa;
		align-items: stretch;
		justify-content: center;
        --transition: 1s cubic-bezier(0, .2, 0, 1);
		// gap: 2px;
	}
	p {
		width: 75ch;
		transition: opacity var(--transition);
        max-width: 100%;
        white-space: wrap;
	}
	section {
		flex-basis: 0;
		background-position: center;
		transition: flex-grow var(--transition);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex-grow: 1;
		overflow: hidden;
		flex-shrink: 1;
        padding: 1rem;

		h3 {
			transition: rotate var(--transition);
			white-space: nowrap;
			font-size: 2rem;
			text-align: center;
		}

		div {
			transition: none var(--transition);
            
            transition-property: translate, background-color, backdrop-filter, -webkit-backdrop-filter;
            padding: 2rem;
            display: flex;

            // max-height: 100%;
            flex-direction: column;
            gap: 1rem;
            border-radius: 1em;
		}

		/* background-image: url("images/hydropower.png"); */
	}
	section.open {
		flex-grow: 10;

        div {
            background-color: #000000aa;
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            max-width: 100%;
        }
	}
	section:not(.open) {
		cursor: pointer;
		h3 {
			rotate: -90deg;
            text-shadow: 0 0 5px #000000aa;
		}
		p {
			opacity: 0;
		}
		&:hover, &:focus-visible {
			flex-grow: 1.3;
		}
		div {
			translate: 0 calc(50% - 1em - 3rem);
		}
	}

	section.hydro {
		background-image: url('/greenhome/images/hydropower.png');
	}
	section.solar {
		background-image: url('/greenhome/images/solar-cells.png');
	}
	section.bio {
		background-image: url('/greenhome/images/biomass.jpg');
	}
	section.wind {
		background-image: url('/greenhome/images/wind-energy.png');
	}
	section.geothermal {
		background-image: url('/greenhome/images/geothermal.jpg');
	}
	section.money {
		background-image: url('/greenhome/images/money.jpg');
	}

    @media screen and (max-width: 1000px) {
        main {
            flex-direction: column;
            // min-height: max-content;
        }

        h3 {
            font-size: 1.2em !important;

        }

        div {
            padding: 1rem;
            max-width: 100%;
        }

        p {
            font-size: 1rem;
        }

        section {
            &.open {
                justify-content: start;

                overflow-y: scroll;

                div {
                    margin-top: auto;
                    margin-bottom: auto;
                }
            }
        }

        section:not(.open) {
            h3 {
                rotate: none;
            }

            div {
                translate: 0 calc(50% - 2.3rem - .6em);
            }
        }
    }
</style>
