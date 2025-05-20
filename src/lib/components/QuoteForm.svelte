<script>
    import {writable} from 'svelte/store';
    import QuoteBuilder from './QuoteBuilder.svelte';
    import CalendarEmbed from './CalendarEmbed.svelte';
    import UserInfo from './UserInfo.svelte';
    import Payment from './Payment.svelte'

    //Store for form data
    const formData = writable({
        quote: { items: [], subtotal: 0 },
        appointment: null,
        user: {name: '', email: '', phone: '', address: '', message: ''},
        payment: null
    });

    //Store for current tab and form state
    let currentTab = writable(1);
    let formState = writable('form'); // 'form', 'success', 'failure'

    //Navitagion Function
    const nextTab = () => {
        if ($currentTab < 4) $currentTab += 1;
    }

    const prevTab = () => {
        if ($currentTab > 1) $currentTab -= 1;
    }
    //handle submit
    async function handleSubmit() {
        try {
            //simiulate api call
            console.log('Submitting form data:', $formData);
            $formState = 'success';
        } catch (error) {
            console.log('Submision Failure:', error);
            $formState = 'failure';
        }
    }
</script>

<div class="container mx-auto p-4 max-w -2x1">
    {#if $formState === 'form'}
    <!-- Tab Navigation-->
     <div class="flex tabby mb-6">
        {#each [1, 2, 3, 4] as tab}
            <button 
                class="px-4 py-2 rounded-md {tab === $currentTab
                ? 'active-tabby text-white'
                : 'text-gray-700'}"
                disabled={tab > $currentTab}
            >
                Tab {tab}
            </button>
        {/each}
    </div>
    {/if}
    <!-- Tab Content -->
    {#if $currentTab === 1}
            <QuoteBuilder {formData} {nextTab} />
        {:else if $currentTab === 2}
            <CalendarEmbed {formData} {nextTab} {prevTab} />
        {:else if $currentTab === 3}
            <UserInfo {formData} {nextTab} {prevTab} />
        {:else if $currentTab === 4}
            <Payment {formData} {prevTab} {handleSubmit} />
    <!--{/if}-->
        {:else if $formState === 'success'}
            <div class="text-center p-6 bg-green-100 rounded-md">
                <h2 class="text-2x1 font-bold text-green-700">Success!</h2>
                <p> Your quote appointment has been submitted succesfully. A reminder email will be sent.
                    <!-- Add appointment details -->
                </p>
                <button
                    class="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
                    on:click={() => {
                        $formState ='form';
                        $currentTab = 1;
                        $formData = { quote: { items: [], subtotal: 0 }, appointment: null, user: { name: '', email: '', phone: '', address: '', message: '' }, payment: null };
                    }}>
                    Start Over   
                </button>
            </div>
        {:else if $formState === 'failure'}
            <div class='text-center p-6 bg-red-100 rounded-md'>
                <h2 class="text-2xl font-bold text-red-700">Submission Failed</h2>
                <p>Something went cattywompus! Please try again...We really need your money and want to clean your windows.</p>
                <button 
                    class="mt-4 px-4 py-2 bg-blue-500 text white rounded-md"
                    on:click={() => {
                        $formState ='form';
                        $currentTab = 1;
                        $formData = { quote: { items: [], subtotal: 0 }, appointment: null, user: { name: '', email: '', phone: '', address: '', message: '' }, payment: null };
                    }}>
                    Try Again
                </button>
            </div>
    {/if}
</div>

    <style>
        button:disabled {
            @apply cursor-default;
            background: grey;
            color: black;
        }
        .tabby {
            gap: 10px;
        }
        .active-tabby {
            background-color: lightblue;
        }
    </style>