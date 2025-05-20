<script lang="ts">

</script>

<h2>Customer Quote Form</h2>
    <form class="windows-quote-form">
        <div class="form-group">
            <label for="windows">How many Windows?
                <span class="tooltip">
                    <span class="tooltiptext">How many windows does your house have?</span>
                    (?)
                </span>
            </label>
            <input type="number" id="windows" name="windows" min="1" required>
        </div>
        <div class="form-group">
            <label for="package">Which Package?</label>
            <div class="radio-group">
                <label><input type="radio" name="package" value="basic" required> Basic</label>
                <label><input type="radio" name="package" value="advanced"> Advanced</label>
                <label><input type="radio" name="package" value="premium"> Premium</label>
            </div>
        </div>
        <button type="submit">Get Quote</button>
    </form>

    <style>
         .form-group {
            margin-bottom: 15px;
        }
        label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
        }
        input[type="number"] {
            width: 100%;
            padding: 8px;
            border: 1px solid #ccc;
            border-radius: 4px;
        }
        .radio-group {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }
        .radio-group label {
            font-weight: normal;
            display: flex;
            align-items: center;
            gap: 10px;
            cursor: pointer;
            padding: 8px;
            border-radius: 6px;
            transition: background-color 0.2s ease;
        }
        .radio-group label:hover {
            background-color: #f0f4ff;
        }
        input[type="radio"] {
            appearance: none;
            width: 20px;
            height: 20px;
            border: 2px solid #007BFF;
            border-radius: 50%;
            position: relative;
            outline: none;
            transition: all 0.2s ease;
        }
        input[type="radio"]:hover {
            background-color: #e6f0ff;
        }
        input[type="radio"]:checked {
            border-color: #0056b3;
            background-color: #007BFF;
        }
        input[type="radio"]:checked::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 10px;
            height: 10px;
            background-color: white;
            border-radius: 50%;
            transform: translate(-50%, -50%);
            animation: scaleIn 0.2s ease;
        }
        @keyframes scaleIn {
            0% { transform: translate(-50%, -50%) scale(0); }
            100% { transform: translate(-50%, -50%) scale(1); }
        }
        .tooltip {
            position: relative;
            display: inline-block;
            cursor: help;
        }
        .tooltip .tooltiptext {
            visibility: hidden;
            width: 200px;
            background-color: #555;
            color: #fff;
            text-align: center;
            border-radius: 6px;
            padding: 5px;
            position: absolute;
            z-index: 1;
            bottom: 125%;
            left: 50%;
            margin-left: -100px;
            opacity: 0;
            transition: opacity 0.3s;
        }
        .tooltip:hover .tooltiptext {
            visibility: visible;
            opacity: 1;
        }
        button {
            background-color: #007BFF;
            color: white;
            padding: 10px 15px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
        button:hover {
            background-color: #0056b3;
        }
    </style>