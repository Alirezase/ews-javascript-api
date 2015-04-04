// ---------------------------------------------------------------------------
// <copyright file="GetHoldOnMailboxesResponse.cs" company="Microsoft">
//     Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// ---------------------------------------------------------------------------

//-----------------------------------------------------------------------
// <summary>Defines the GetHoldOnMailboxesResponse class.</summary>
//-----------------------------------------------------------------------

namespace Microsoft.Exchange.WebServices.Data
{
    using System;
    using System.Collections.Generic;
    using System.Text;

    /// <summary>
    /// Represents the GetHoldOnMailboxes response.
    /// </summary>
    public sealed class GetHoldOnMailboxesResponse : ServiceResponse
    {
        MailboxHoldResult holdResult = null;

        /// <summary>
        /// Initializes a new instance of the <see cref="GetHoldOnMailboxesResponse"/> class.
        /// </summary>
        internal GetHoldOnMailboxesResponse()
            : base()
        {
        }

        /// <summary>
        /// Reads response elements from XML.
        /// </summary>
        /// <param name="reader">The reader.</param>
        internal override void ReadElementsFromXml(EwsServiceXmlReader reader)
        {
            base.ReadElementsFromXml(reader);

            this.holdResult = MailboxHoldResult.LoadFromXml(reader);
        }

        /// <summary>
        /// Reads response elements from Json.
        /// </summary>
        /// <param name="responseObject">The response object.</param>
        /// <param name="service">The service.</param>
        internal override void ReadElementsFromJson(JsonObject responseObject, ExchangeService service)
        {
            base.ReadElementsFromJson(responseObject, service);

            if (responseObject.ContainsKey(XmlElementNames.MailboxHoldResult))
            {
                JsonObject jsonMailboxHold = responseObject.ReadAsJsonObject(XmlElementNames.MailboxHoldResult);

                this.holdResult = MailboxHoldResult.LoadFromJson(jsonMailboxHold);
            }
        }

        /// <summary>
        /// Mailbox hold result
        /// </summary>
        public MailboxHoldResult HoldResult
        {
            get { return this.holdResult; }
        }
    }
}
